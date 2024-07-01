import React from 'react'
import '../Scss/aboutUs.scss'
import Techno from '../assets/technology-bg.png'
export default function AboutUs() {
  return (
    <div className='aboutUs' id='about_us'>
     <div className="aboutUs_child-1">
          <div>
          <p>About us</p>
          <p>Founded in 2018 by a group of passionate designers and developers, [Your Company Name] was born from a shared vision: to create impactful digital experiences that elevate brands and connect them with their audiences in meaningful ways. We started by helping small businesses establish their online presence, and over the years, we've grown into a trusted partner for businesses of all sizes.</p>
          </div>
          <a href="readmore">Read More</a>
     </div>
     <div className="aboutUs_child-2">
          <img src={Techno} alt="computer" />
     </div>
    </div>
  )
}
