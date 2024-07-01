import React from "react";
import Introduction from "../components/Introduction";
import Navbar from "../components/Navbar";
import Ratings from "../components/Ratings";
import CourseCard from "../components/CourseCard";
import OurWork from "../components/OurWork";
import AboutUs from "../components/AboutUs";
import Teacher_carusel from "../components/Teacher_carusel";
import Work_Course from "../components/Work_Course";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import Real_Footer from "../components/Real_Footer";
export default function MainOne() {
  return (
    <div className="mainOne">
      <Navbar />
      <Introduction />
      <Ratings />
      <Work_Course />
      <AboutUs />
      <Teacher_carusel />
      <CourseCard />
      {window.innerWidth < 1024 ? <Carousel /> : <OurWork />}
      <Footer />
      <Real_Footer />
    </div>
  );
}
