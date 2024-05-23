import React, { useState, useEffect } from "react";
import logo from "./../../Assets/images/Logo ETC 01 3.png";
import "./Navbar.css";
import { useNavigate, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa"; 

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState("/");

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  

  useEffect(() => {
    localStorage.setItem("current", currentPage);
  }, [currentPage]);

  useEffect(() => {
    const currentPath = location.pathname;
    setCurrentPage(getPageNameFromPath(currentPath));
  }, [location]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 780) {
        setIsMobile(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getPageNameFromPath = (path) => {
    const pageName = path.substring(1);
    return pageName || "/";
  };

  return (
    <nav className="Nav-container">
      <img
        className="logo"
        src={logo}
        alt=""
        onClick={() => {
          navigate("/");
          setCurrentPage("home");
          scrollToTop()
        }}
      />
      <div
        className={isMobile ? "Nav-elements-mobile" : "Nav-elements"}
        onClick={() => setIsMobile(false)}
      >
        <div
          className={`nav ${currentPage === "/" ? "current-page" : ""}`}
          onClick={() => {
            navigate("/");
            setCurrentPage("/");
            scrollToTop()

          }}
        >
          Accueil{" "}
        </div>
        
        <div
          className={`nav ${currentPage === "about" ? "current-page" : ""}`}
          onClick={() => {
            navigate("/about");
            setCurrentPage("about");
            scrollToTop()

          }}
        >
          A propos{" "}
        </div>

         <div
          className={`nav ${currentPage === "Services" ? "current-page" : ""}`}
          onClick={() => {
            navigate("/Services");
            setCurrentPage("Services");
            scrollToTop()

          }}
        >
          Services{" "}
        </div> 

        <div
          className={`nav ${currentPage === "news" ? "current-page" : ""}`}
          onClick={() => {
            navigate("/news");
            setCurrentPage("news");
            scrollToTop()

          }}
        >
          Actualités{" "}
        </div>

        <div
          className={`nav ${currentPage === "contact" ? "current-page" : ""}`}
          onClick={() => {
            navigate("/contact");
            setCurrentPage("contact");
            scrollToTop()

          }}
        >
          Contact{" "}
        </div>
      </div>

      <button className="Nav-btn" onClick={() => setIsMobile(!isMobile)}>
        <FaBars
          style={{
            fontSize: "1.5rem", // Adjust the size as needed
          }}
        />
      </button>
    </nav>
  );
}

export default Navbar