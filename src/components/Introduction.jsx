import React from "react";
import Introduction_img1 from "../assets/introduction_img.png";
import Js_icon from '../assets/javascript_icon.ico'
import "../Scss/introduction.scss";
import { Link } from "react-router-dom";
export default function Introduction() {
  return (
    <div className="introduction_C">
      <div className="intro_child-1">
        <p>
        Welcome to Fazo Software!
        </p>  
        <p>
        We are an educational center focused on teaching coding courses such as HTML, CSS, JavaScript, and React. As a bonus, we also offer opportunities to hire skilled programmers. Join us in exploring the exciting world of coding and advance your skills with our expert instructors.
        </p>
        <Link to="/about us" className="glowbutton">
         Read more
          </Link>
      </div>

      <div className="intro_child-2">
        <img src={Introduction_img1} alt="img1" className="intro_courses_img" />

        <div className="intro_courses-1">
        <i className="fa-brands fa-html5" style={{color:" #e65f05",}}></i>
        <p>html</p>
        </div>

        <div className="intro_courses-2">
        <i className="fa-brands fa-css3-alt" style={{color:" #0170c5",}}></i>
          <p>css</p>
        </div>

        <div className="intro_courses-3">
         <img src={Js_icon} alt="icon" />
          <p>javascript</p>
        </div>

        <div className="intro_courses-4">
        <i className="fa-brands fa-react" style={{color: "#00bceb"}}></i>
          <p>react</p>
        </div>

      </div>
    </div>
  );
}
