import React, { useState } from "react";
import "../Scss/carousel.scss";
import Web1 from "../assets/stoicism_bg.png";
import Web2 from "../assets/marene_bg.png";
import Web3 from "../assets/crypto_bg.png";
import Web_img1 from '../assets/web_img1.jpeg'
import Web_img2 from '../assets/web_img2.jpeg'
import Web_img3 from '../assets/web_img3.jpeg'
const text1_options = [
  "Free online courses based on ideas and practices drawn from the ancient philosophy of Stoicism. These include Stoic Week, which runs each October, and Stoic Mindfulness and Resilience Training (SMRT), a longer four-week course that runs at various times.",
  "Perfume.com has been America’s #1 place to buy discount perfumes online since 1995. We stock more than 13,000 women’s and men’s fragrances, all of them deliverable to your door within just days. Our broad selection of perfumes and colognes includes celebrity scents, gift sets, best sellers, hard-to-find fragrances, specialty samples, new releases, and even discontinued brands.",
  "Welcome to Crypto.com, your gateway to the world of cryptocurrency trading. Crypto.com provides a user-friendly platform for buying, selling, and trading a wide range of digital assets. In this guide, we'll walk you through the process of getting started with trading on Crypto.com, ensuring you can begin your cryptocurrency journey with confidence.",
];

const shadow_options = ["0 0 35px 10px #bac0d2,inset 0 0 35px 10px #bac0d2","0 0 35px 10px #1580af,inset 0 0 25px 10px #1580af","0 0 25px 10px  #58fe92,inset 0 0 25px 10px  #58fe92"];
const border_options = ["2px solid #bac0d2","2px solid #1580af","2px solid  #58fe92"];

const image_options = [Web_img1, Web_img2, Web_img3];
const Bgimage_options = [Web1, Web2, Web3];
const Carousel = () => {
  const [index, setIndex] = useState(0);

  const handleClickNext = () => {
    setIndex((index + 1) % text1_options.length);
  };

  const handleClickPrevious = () => {
    setIndex((index === 0 ? text1_options.length : index) - 1);
  };

  return (
    <div className="carousel-wrapper" id="our_work" style={{boxShadow: `${shadow_options[index]}`}}>
      <div id="menu">

        <div id="current-option">
          <span
            id="current-option-text1"
            data-previous-text=""
            data-next-text=""
          >
            {text1_options[index]}
          </span>
        </div>

        <div id="image_Container">

          <div
            id="image"
            style={{ backgroundImage: `url(${image_options[index]})` }}
          ></div>

          <div id="button_C">

            <button id="previous-option" style={{border:`${border_options[index]}`}}  onClick={handleClickPrevious}>
            <i className="fa-solid fa-angle-up"></i>
            </button>
            <button id="next-option" style={{border:`${border_options[index]}`}} onClick={handleClickNext}>
            <i className="fa-solid fa-angle-down"></i>
            </button>

          </div>

        </div>
      </div>
      <img src={Bgimage_options[index]} alt="bg_img" id="bg_img"/>
    </div>
  );
};

export default Carousel;
