import React, { useEffect } from "react";
import "../Scss/course_card.scss";
import Html_img from '../assets/html5.png'
import Css_img from '../assets/css3_icon_img.png'
import Js_img from '../assets/js_icon_img.svg'
import React_img from '../assets/react_icon_img.png'
import Teahcer_img1 from '../assets/teacher_img1.jpeg'
import Aos from "aos";
import 'aos/dist/aos.css'
export default function CourseCard() {
     useEffect(()=>{
          Aos.init();
     },[])
  return (
    <div className="courseCard">
      <div className="courseCard_child-1">
        <h1>Courses</h1>
      </div>

      <div className="courseCard_child-2" id="courses">

      <div className="card card1 right">
          <img src={Html_img} alt="html" />
        <div>
          <img src={Teahcer_img1} alt="teacher" />
          <p>Course: <span>Frontend</span></p>
          <p>Programming language: <span>Html</span></p>
          <p>Teacher's name: <span>Linda</span></p>
          <p>Students: <span>15</span></p>
          <p>Cost: <span>150,000$</span></p>
        </div>
      </div>

      <div className="card card1 right" >
          <img src={Css_img} alt="html" />
        <div>
          <img src={Teahcer_img1} alt="teacher" />
          <p>Course: <span>Frontend</span></p>
          <p>Programming language: <span>Html</span></p>
          <p>Teacher's name: <span>Linda</span></p>
          <p>Students: <span>15</span></p>
          <p>Cost: <span>150,000$</span></p>
        </div>
      </div>

      <div className="card card1 right">
          <img src={Js_img} alt="html" />
        <div>
          <img src={Teahcer_img1} alt="teacher" />
          <p>Course: <span>Frontend</span></p>
          <p>Programming language: <span>Html</span></p>
          <p>Teacher's name: <span>Linda</span></p>
          <p>Students: <span>15</span></p>
          <p>Cost: <span>150,000$</span></p>
        </div>
      </div>

      <div className="card card1 right">
          <img src={React_img} alt="html" />
        <div>
          <img src={Teahcer_img1} alt="teacher" />
          <p>Course: <span>Frontend</span></p>
          <p>Programming language: <span>Html</span></p>
          <p>Teacher's name: <span>Linda</span></p>
          <p>Students: <span>15</span></p>
          <p>Cost: <span>150,000$</span></p>
        </div>
      </div>

      <div className="card card1 right">
          <img src={Html_img} alt="html" />
        <div>
          <img src={Teahcer_img1} alt="teacher" />
          <p>Course: <span>Frontend</span></p>
          <p>Programming language: <span>Html</span></p>
          <p>Teacher's name: <span>Linda</span></p>
          <p>Students: <span>15</span></p>
          <p>Cost: <span>150,000$</span></p>
        </div>
      </div>

      <div className="card card1 right">
          <img src={Html_img} alt="html" />
        <div>
          <img src={Teahcer_img1} alt="teacher" />
          <p>Course: <span>Frontend</span></p>
          <p>Programming language: <span>Html</span></p>
          <p>Teacher's name: <span>Linda</span></p>
          <p>Students: <span>15</span></p>
          <p>Cost: <span>150,000$</span></p>
        </div>
      </div>

      </div>

     
    </div>
  );
}
