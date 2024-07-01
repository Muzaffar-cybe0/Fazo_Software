import React, { useRef, useState } from "react";
import LogoImg from "../assets/Fazo_logo.png";
import { Link } from "react-router-dom";
import "../Scss/navbar.scss";
export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [isTrue, setIsTrue] = useState(false);
  const Dropdown = useRef();
  const handleMenu = (e) => {
    setIsTrue((p) => !p);
    e.currentTarget.classList.toggle("active");
    Dropdown.current.style.opacity = `${!isTrue ? 1 : 0}`
  };
  const navbarBlur = () => {
    if (window.scrollY > 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", navbarBlur);
  return (
    <header className={`header ${navbar ? "navbar_blur" : ""}`}>
      <nav
        className="navbar container"
      >
        <Link className="navbar_logo">
          <img src={LogoImg} alt="logo" className="logo" />
        </Link>

        <div className="navbar_list">
          <div className="M_container">
            <div className="menu-icon" onClick={(e) => handleMenu(e)}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div
            className="dropdown_menu"
            ref={Dropdown}
            style={{
              height: isTrue ? "300px" : "0%",
            }}
          >
            <a href="#about_us">
              <i className="fa-solid fa-users"></i>
              <p>About us</p>
            </a>

            <a href="#courses">
              <i className="fa-solid fa-book"></i>
              <p>Courses</p>
            </a>

            <a href="#our_work">
              <i className="fa-solid fa-briefcase"></i>
              <p>Our work</p>
            </a>

            <a href="#contact">
              <i className="fa-solid fa-phone"></i>
              <p>Contact</p>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
