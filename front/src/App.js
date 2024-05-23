import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
// import About from "./Pages/About/About";
import Services from "./Pages/Services/Services";
import News from "./Pages/News/News";
import Contact from "./Pages/Contact/Contact";
import Article from "./Pages/Article/Article";
import Loader from "./Components/Loader/Loader";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./App.css"

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news" element={<News />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/article" element={<Article />} />
        <Route path="/services" element={<Services />} />
        <Route path="/Loader" element={<Loader />} />
        <Route path="*" element={<div>404 not found</div>} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
