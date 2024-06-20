import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Services from "./Pages/Services/Services";
import News from "./Pages/News/News";
import Contact from "./Pages/Contact/Contact";
import Article from "./Pages/Article/Article";
import Loader from "./Components/Loader/Loader";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import ArticleDashboard from "./Components/Loader/components/ArticleDashboard/ArticleDashboard";
import PersistLogin from "./Components/Persistlogin";
import RequireAuth from "./RequireAuth";
import { AuthProvider } from "./AuthProvider";
import { Login } from "./Components/login/Login";

function App() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 2000); 

    return () => clearTimeout(timer); // Cleanup timer if component unmounts
  }, []);

  return (
    <AuthProvider>
      {showLoader ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/news" element={<News />} />
            <Route path="/about" element={<About />} /> 
            <Route path="/article" element={<Article />} />
            <Route path="/services" element={<Services />} />
            <Route path="/Loader" element={<Loader />} />
            <Route path="/auth" element={<Login />} />
            <Route element={<PersistLogin />}>
              <Route element={<RequireAuth />}>
                <Route path="/dash" element={<ArticleDashboard />} />
              </Route>
            </Route>
            <Route path="*" element={<div>404 not found</div>} />
          </Routes>
          <Footer />
        </>
      )}
    </AuthProvider>
  );
}

export default App;
