import React from "react";
import "../Scss/real_footer.scss";
import Logo from '../assets/Fazo_logo.png'
export default function Real_Footer() {
  return (
    <>
     
      <footer className="footer-distributed">
        <div className="footer-left">
          <h3>
            <img src={Logo} alt="logo" />
          </h3>

          <p className="footer-links">
            <a href="#" className="link-1">
              Home
            </a>

            <a href="#">Blog</a>

            <a href="#">Pricing</a>

            <a href="#">About</a>

            <a href="#">Faq</a>

            <a href="#">Contact</a>
          </p>

          <p className="footer-company-name">Fazo Software © 2020</p>
        </div>

        <div className="footer-center">
          <div>
            <i className="fa-solid fa-location-dot"></i>
            <p>
              <span>444 S. Cedros Ave</span> Solana Beach, California
            </p>
          </div>

          <div id="contact">
            <i className="fa-solid fa-phone"></i>
            <p>+1.555.555.5555</p>
          </div>

          <div>
            <i className="fa-solid fa-envelope"></i>
            <p>
              <a href="mailto:support@company.com">support@fazosoftware.com</a>
            </p>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <span>About the company</span>
            Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
            euismod convallis velit, eu auctor lacus vehicula sit amet.
          </p>

          <div className="footer-icons">
            <a href="#">
            <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
