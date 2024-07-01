import React from "react";
import { Swiper, SwiperSlide} from "swiper/react";
import Teacher1 from '../assets/carusle_teacher1.png';
import Teacher2 from '../assets/carusel_teacher2.png';
import Teacher3 from '../assets/carusel_teacher3.png';
import Teacher4 from '../assets/carusel_teacher4.png';
import '../Scss/teacher_carusel.scss'

import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/pagination";
import "../Scss/style.scss";
import { Navigation } from 'swiper/modules';


export default function Teacher_carusel() {
  return (
    <div className="teacher_carusel">
     <div className="teacher_title">
          <p>Our Teachers</p>
     </div>
     <Swiper
       slidesPerView={
          window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 4
        }
        rewind={true}
        navigation={true}
        spaceBetween={10}
        modules={[Navigation]}
        className="mySwiper card__collection clear-fix"
        onClick={(e)=>console.log(e.slides)}
      >
        <SwiperSlide>
          <div className="slider_child-1">
               <img src={Teacher1} alt="" />
          </div>
          <div className="slider_child-2">
               <p>Jack Swanson</p>
               <p>Fullstack Developer</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="carusel_pink">
          <div className="slider_child-1">
               <img src={Teacher2} alt="teacher" />
          </div>
          <div className="slider_child-2">
               <p>Jack Swanson</p>
               <p>Fullstack Developer</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slider_child-1">
               <img src={Teacher3} alt="" />
          </div>
          <div className="slider_child-2">
               <p>Jack Swanson</p>
               <p>Fullstack Developer</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="carusel_pink">
          <div className="slider_child-1">
               <img src={Teacher4} alt="" />
          </div>
          <div className="slider_child-2">
               <p>Jack Swanson</p>
               <p>Fullstack Developer</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slider_child-1">
               <img src={Teacher1} alt="" />
          </div>
          <div className="slider_child-2">
               <p>Jack Swanson</p>
               <p>Fullstack Developer</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="carusel_pink">
          <div className="slider_child-1">
               <img src={Teacher2} alt="teacher" />
          </div>
          <div className="slider_child-2">
               <p>Jack Swanson</p>
               <p>Fullstack Developer</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slider_child-1">
               <img src={Teacher3} alt="" />
          </div>
          <div className="slider_child-2">
               <p>Jack Swanson</p>
               <p>Fullstack Developer</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="carusel_pink">
          <div className="slider_child-1">
               <img src={Teacher4} alt="" />
          </div>
          <div className="slider_child-2">
               <p>Jack Swanson</p>
               <p>Fullstack Developer</p>
          </div>
        </SwiperSlide>
       
      </Swiper>
      
    </div>
  );
}
