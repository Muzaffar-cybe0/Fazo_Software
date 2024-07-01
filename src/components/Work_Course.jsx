import React, { useRef, useState } from "react";
import "../Scss/work_course.scss";
import Html_bg_img from "../assets/html_img.png";
import Css_bg_img from "../assets/css_img2.jpeg";
import Js_bg_img from "../assets/js_bg_img.png";
import React_bg_img from "../assets/react_bg.png";
import Frontend_bg_img from "../assets/frontend_bg_img.jpeg";
import Backend_bg_img from "../assets/backend_bg_img.jpeg";
import FullStack_bg_img from "../assets/fullstack_bg_img.jpeg";
import Robotech_bg_img from "../assets/robotech_bg_img.jpeg";
export default function Work_Course() {
  const Container = useRef();
  const Container2 = useRef();
  const [activeButton, setActiveButton] = useState(0);
  const [activeButton2, setActiveButton2] = useState(0);

  const handleClick = (index) => {
    setActiveButton(index);
    if (index === 0) {
      Container.current.style.backgroundImage = `url(${Html_bg_img})`;
    } else if (index === 1) {
      Container.current.style.backgroundImage = `url(${Css_bg_img})`;
    } else if (index === 2) {
      Container.current.style.backgroundImage = `url(${Js_bg_img})`;
    } else if (index === 3) {
      Container.current.style.backgroundImage = `url(${React_bg_img})`;
    }
  };

  const handleClick2 = (index) => {
     setActiveButton2(index);
     if (index === 0) {
       Container2.current.style.backgroundImage = `url(${Frontend_bg_img})`;
     } else if (index === 1) {
       Container2.current.style.backgroundImage = `url(${Backend_bg_img})`;
     } else if (index === 2) {
       Container2.current.style.backgroundImage = `url(${FullStack_bg_img})`;
     } else if (index === 3) {
       Container2.current.style.backgroundImage = `url(${Robotech_bg_img})`;
     }
   };
  const buttonStyle = (index) => {
    return activeButton === index
      ? { backgroundColor: "#f72585", color: "white" }
      : {};
  };
  const buttonStyle2 = (index) => {
     return activeButton2 === index
       ? { backgroundColor: "aqua", color: "white" }
       : {};
   };
  return (
    <div className="work_Course_C">
      <div className="work_Course-child1">
        <div className="svg_container">
          <svg
            className="svg_img"
            xmlns="http://www.w3.org/2000/svg"
            width="900"
            height="620"
            fill="none"
            viewBox="0 0 1422 640"
            role="img"
          >
            <path
              d="M1403 638.619C1478 476.619 1279 76.6187 739 179.619C558.833 213.984 658 340.619 702 252.619C746 164.619 590 -250.381 2 236.619"
              stroke="url(#A)"
              strokeWidth="10"
            ></path>
            <defs>
              <linearGradient
                id="A"
                x1="832.679"
                y1="765.969"
                x2="1836.08"
                y2="765.969"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#f72585"></stop>
                <stop offset=".333" stopColor="aqua"></stop>
                <stop offset=".667" stopColor="aqua"></stop>
                <stop offset="1" stopColor="#2fb9cc"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="work_Course_child1-1">
          <p>Courses we offer</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe non
            cumque voluptatibus, cum nam aliquid minus facere beatae veritatis
            impedit, commodi, rem magni! Delectus sit voluptates atque
            reprehenderit laborum doloribus.
          </p>
        </div>

        <div className="work_Course_child1-2" ref={Container}>
          <div>
            <button
              href=""
              style={buttonStyle(0)}
              onClick={() => handleClick(0)}
            >
              Html
            </button>
            <button
              href=""
              style={buttonStyle(1)}
              onClick={() => handleClick(1)}
            >
              Css
            </button>
            <button
              href=""
              style={buttonStyle(2)}
              onClick={() => handleClick(2)}
            >
              Js
            </button>
            <button
              href=""
              style={buttonStyle(3)}
              onClick={() => handleClick(3)}
            >
              React
            </button>
          </div>
        </div>
      </div>

      <div className="work_Course-child2">

        <div className="svg_container2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="725"
            height="410"
            viewBox="0 0 725 410"
            fill="none"
            role="img"
            className="bg-removal-landing__path__section__path"
          >
            <path
              d="M721.999 2C703.333 38 634.618 203.123 341.999 134C87.9991 74 -34.0001 243 13.9999 409"
              stroke="url(#paint0_linear_0_243)"
              strokeWidth="6"
            ></path>
            <defs>
              <linearGradient
                id="paint0_linear_0_243"
                x1="445.981"
                y1="453.453"
                x2="918.965"
                y2="453.453"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor=" #f72585"></stop>
                <stop offset="0.333333" stopColor="aqua"></stop>
                <stop offset="0.666667" stopColor="aqua"></stop>
                <stop offset="1" stopColor="#2FB9CC"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="work_Course_child2-1" ref={Container2}>
          <div>
            <button
              href=""
              style={buttonStyle2(0)}
              onClick={() => handleClick2(0)}
            >
              Frontend
            </button>
            <button
              href=""
              style={buttonStyle2(1)}
              onClick={() => handleClick2(1)}
            >
              Backend
            </button>
            <button
              href=""
              style={buttonStyle2(2)}
              onClick={() => handleClick2(2)}
            >
              FullStack
            </button>
            <button
              href=""
              style={buttonStyle2(3)}
              onClick={() => handleClick2(3)}
            >
              Robotechno
            </button>
          </div>
        </div>

        <div className="work_Course_child2-2">
          <p>Courses we offer</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe non
            cumque voluptatibus, cum nam aliquid minus facere beatae veritatis
            impedit, commodi, rem magni! Delectus sit voluptates atque
            reprehenderit laborum doloribus.
          </p>
        </div>

        
      </div>
    </div>
  );
}
