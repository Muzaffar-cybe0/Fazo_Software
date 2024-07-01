import "../Scss/ourWork.scss";
import { useRef, useState } from "react";
import Web_img1 from "../assets/web_img1.jpeg";
import Web_img2 from "../assets/web_img2.jpeg";
import Web_img3 from "../assets/web_img3.jpeg";
import Bg1 from "../assets/stoicism_bg.png";
import Bg2 from "../assets/marene_bg.png";
import Bg3 from "../assets/crypto_bg.png";
export default function OurWork() {
  const Bg_image = useRef();
  const LogOut = useRef();
  const text_ref1 = useRef();
  const text_ref2 = useRef();
  const Container_ref = useRef();
  const Open_ref = useRef();
  const Image_ref = useRef();
  const [image, setImage] = useState(Web_img1);
  const [backG_Image, setBackG_Image] = useState(Bg1);
  const [cardImages, setCardImages] = useState([Web_img1, Web_img2, Web_img3]);
  const cardImageRefs = useRef([]);
  const [isVisible, setIsVisible] = useState(false);
  const [webName, setWebName] = useState("Stoicism");
  const [webTitle, setWebTitle] = useState(
    "Free online courses based on ideas and practices drawn from the ancient philosophy of Stoicism. These include Stoic Week, which runs each October, and Stoic Mindfulness and Resilience Training (SMRT), a longer four-week course that runs at various times."
  );

  const handleLeave = () => {
    Image_ref.current.style.transform = "translateX(-400px)";
    setTimeout(() => {
      Image_ref.current.style.transform = "translateX(0px)";
    }, 1000);
    Container_ref.current.style.boxShadow = "0 0 25px 10px #bac0d2";
    LogOut.current.style.boxShadow = "0 0 10px 2px  #bac0d2";
    LogOut.current.style.opacity = "0";
    setBackG_Image(Bg1);
    setTimeout(() => {
      setImage(Web_img1);
    }, 1000);
    setTimeout(() => {
      cardImageRefs.current[2].style.opacity = "0";
    }, 2000);
    setTimeout(() => {
      cardImageRefs.current[1].style.opacity = "0";
    }, 1500);
    setTimeout(() => {
      cardImageRefs.current[0].style.opacity = "0";
    }, 1000);
    setTimeout(() => {
      Open_ref.current.style.opacity = "1";
      Open_ref.current.style.zIndex = "4";
      Container_ref.current.style.width = "65%";
    }, 2000);
  };

  const ChangeImg = (newImageIndex) => {
    Image_ref.current.style.transform = "translateX(-400px)";
    Bg_image.current.style.opacity = "0";
    setTimeout(() => {
      Image_ref.current.style.transform = "translateX(0px)";
      setImage(cardImages[newImageIndex]);
    }, 1000);
    if (newImageIndex === 0) {
      Container_ref.current.style.boxShadow = "0 0 25px 10px #bac0d2";
      LogOut.current.style.opacity = "1";
      LogOut.current.style.boxShadow = "0 0 10px 2px  #bac0d2";
      text_ref1.current.style.opacity = "0";
      text_ref2.current.style.opacity = "0";
      setTimeout(() => {
        text_ref1.current.style.opacity = "1";
        text_ref2.current.style.opacity = "1";
      }, 1500);
      setTimeout(() => {
        setWebName("Stoicism");
        setWebTitle(
          "Free online courses based on ideas and practices drawn from the ancient philosophy of Stoicism. These include Stoic Week, which runs each October, and Stoic Mindfulness and Resilience Training (SMRT), a longer four-week course that runs at various times."
        );
      }, 1000);
    } else if (newImageIndex === 1) {
      Container_ref.current.style.boxShadow = "0 0 25px 10px  #1580af";
      LogOut.current.style.opacity = "1";
      LogOut.current.style.boxShadow = "0 0 10px 2px #1580af";
      text_ref1.current.style.opacity = "0";
      text_ref2.current.style.opacity = "0";
      setTimeout(() => {
        text_ref1.current.style.opacity = "1";
        text_ref2.current.style.opacity = "1";
      }, 1500);
      setTimeout(() => {
        setWebName("Perfumes");
        setWebTitle(
          "Perfume.com has been America’s #1 place to buy discount perfumes online since 1995. We stock more than 13,000 women’s and men’s fragrances, all of them deliverable to your door within just days. Our broad selection of perfumes and colognes includes celebrity scents, gift sets, best sellers, hard-to-find fragrances, specialty samples, new releases, and even discontinued brands."
        );
      }, 1000);
    } else if (newImageIndex === 2) {
      Container_ref.current.style.boxShadow = "0 0 25px 10px   #58fe92";
      LogOut.current.style.opacity = "1";
      LogOut.current.style.boxShadow = "0 0 10px 2px #58fe92";
      text_ref1.current.style.opacity = "0";
      text_ref2.current.style.opacity = "0";
      setTimeout(() => {
        text_ref1.current.style.opacity = "1";
        text_ref2.current.style.opacity = "1";
      }, 1500);
      setTimeout(() => {
        setWebName("Crypto");
        setWebTitle(
          "Welcome to Crypto.com, your gateway to the world of cryptocurrency trading. Crypto.com provides a user-friendly platform for buying, selling, and trading a wide range of digital assets. In this guide, we'll walk you through the process of getting started with trading on Crypto.com, ensuring you can begin your cryptocurrency journey with confidence."
        );
      }, 1000);
    } else {
      console.log("Err");
    }
    setTimeout(() => {
      setBackG_Image(
        newImageIndex === 0 ? Bg1 : newImageIndex === 1 ? Bg2 : Bg3
      );
      Bg_image.current.style.opacity = "1";
    }, 1500);
  };

  const handleCardClick = (event) => {
    const clickedIndex = cardImageRefs.current.findIndex(
      (ref) => ref === event.target
    );

    if (clickedIndex !== -1) {
      ChangeImg(clickedIndex);
    }
  };

  const OpenWork = () => {
    Open_ref.current.style.opacity = "0";
    Open_ref.current.style.zIndex = "1";
    Container_ref.current.style.width = "95%";
    LogOut.current.style.opacity = "1";
    setTimeout(() => {
      cardImageRefs.current[0].style.opacity = "1";
    }, 1000);
    setTimeout(() => {
      cardImageRefs.current[1].style.opacity = "1";
    }, 2000);
    setTimeout(() => {
      cardImageRefs.current[2].style.opacity = "1";
    }, 3000);
  };

  return (
    <div className="ourWork" id="our_work">
      <div className="ourWork_child1" ref={Container_ref}>
        <div className="child1-1">
          <img src={image} alt="web_design" ref={Image_ref} />
        </div>

        <div className="child1-2">
          <div>
            <p ref={text_ref1}>{webName}</p>
            <p ref={text_ref2}>{webTitle}</p>
          </div>
          <div className="cards_img_C">
            {cardImages.map((cardImage, index) => (
              <img
                key={index}
                src={cardImage}
                ref={(el) => (cardImageRefs.current[index] = el)}
                className="card_img"
                alt="web_designs"
                onClick={handleCardClick}
                style={{ opacity: isVisible ? "1" : "0" }}
              />
            ))}
          </div>
        </div>

        <img src={backG_Image} alt="" className="Bg_image" ref={Bg_image} />

        <div className="openWork" ref={Open_ref}>
          <p>
            We design impactful websites and marketing materials that elevate
            brands.
          </p>

          <button className="openWork_button" onClick={OpenWork}>
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="css-i6dzq1"
            >
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
            </svg>
            Explore me
          </button>
        </div>

        <button className="logout" ref={LogOut} onClick={handleLeave}>
          Logout
        </button>
      </div>
    </div>
  );
}
