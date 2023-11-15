import React from "react";
import "./App.css"
import { images } from "./imagesPaths";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="footer-box">
        <div className="logo white">
          <a href="https://www.gbsbank.co.za/">
            <img src={images.logoWhite} alt="GBS Bank Logo" />
          </a>
        </div>
        <div className="contact">
          <ContactInfo />
          <SocialLinks />
        </div>
      </div>
      <div className="copyright"> &copy; 2021 GBS Bank</div>
    </footer>
  );
};

const ContactInfo = () => {
  return (
    <div className="phone">
      <img src={images.call} alt="Phone Icon" />
      <a href="tel:+1-931-322-2222">+1 931 322 2222</a>
    </div>
  );
};

const SocialLinks = () => {
  return (
    <div className="socials">
      <SocialLink href="https://twitter.com/home" image={images.tw} alt="Twitter" />
      <SocialLink href="https://www.facebook.com/" image={images.fb} alt="Facebook" />
      <SocialLink href="https://www.instagram.com/" image={images.ig} alt="Instagram" />
    </div>
  );
};

const SocialLink = ({ href, image, alt }) => {
  return (
    <div>
      <a href={href}>
        <img src={image} alt={alt} />
      </a>
    </div>
  );
};

export default Footer;
