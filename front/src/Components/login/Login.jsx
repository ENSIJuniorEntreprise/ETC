import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from '../../api/axios';

const Login = () => {
  const { setAuth } = useAuth();
  const [errMsg, setErrMsg] = useState('');

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [info, setInfo] = useState({
    username: "",
    password: "",
  });

  const [remember, setRemember] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo((prevInfo) => ({
      ...prevInfo, [name]: value
    }));
  };

  const get = async () => {
    try {
      const response = await axios.post('/auth/login',
        JSON.stringify({ username: info.username, password: info.password }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        }
      );

      const user = response.data;
      if (user) {
        const accessToken = response.data.accessToken;
        setAuth({ username: info.username, accessToken });
        navigate(from, { replace: true });
      } else {
        setErrMsg('Account not found or incorrect password');
      }
    } catch (error) {
      if (!error?.response) {
        setErrMsg('No Server Response');
      } else if (error.response?.status === 400) {
        setErrMsg('Missing Username or Password');
      } else if (error.response?.status === 401) {
        setErrMsg('Unauthorized');
      } else {
        setErrMsg('Login Failed');
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setInfo({
      ...info,
      username: info.username.trim(),
    });
    setRemember(false);
    get();
  };

  return (
    <div style={{ height: '100%', paddingTop: '44px', paddingBottom: '12px', width: '100%', display: 'flex', justifyContent: 'center', background: '#F5F5F5', alignItems: 'center', flexDirection: 'column' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start', fontSize: '18px', gap: '16px', padding: '40px', borderRadius: '8px', border: '2px solid #ccc' }}>
        <h1 style={{ fontSize: '32px', fontWeight: '600', color: '#333', textAlign: 'center' }}>Log in</h1>
        <p style={{ color: 'red', display: errMsg ? 'block' : 'none' }} aria-live="assertive">{errMsg}</p>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="username">Username or email</label>
          <input type="text" name="username" onChange={handleChange} value={info.username} style={{ height: '44px', width: '384px', border: '2px solid #ccc', borderRadius: '8px', padding: '8px', outline: 'none', borderColor: '#007bff' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" onChange={handleChange} value={info.password} style={{ height: '44px', width: '384px', border: '2px solid #ccc', borderRadius: '8px', padding: '8px', outline: 'none', borderColor: '#007bff' }} />
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <input type="checkbox" name="notify" onChange={() => setRemember(!remember)} checked={remember} />
          <label htmlFor="notify">Send me promotional emails/notifications</label>
        </div>
        <button type="submit" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff', backgroundColor: '#007bff', width: '384px', height: '44px', borderRadius: '8px', cursor: 'pointer' }}>Log in</button>
        <span>Don't have an account? <Link to="/signup" style={{ textDecoration: 'underline' }}>Sign up</Link></span>
      </form>
    </div>
  );
}

export { Login };
