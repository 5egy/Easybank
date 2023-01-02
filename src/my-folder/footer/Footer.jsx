import logo from "../easybank-landing-page-master/images/logo.svg";
import InviteBtn from "../header/InviteBtn";
// import {
//   FaFacebook,
//   FaYoutube,
//   FaTwitter,
//   FaPinterest,
//   FaInstagram,
// } from "react-icons/fa";
import { useEffect, useRef } from "react";

const Footer = ({ element }) => {
  const contact = useRef();
  useEffect(() => {
    if (element === "contact") {
      // window.scrollTo(
      //   {
      //     top: contact.current.getBoundingClientRect().top,
      //     behavior: "smooth"
      //   }
      // )

      contact.current.scrollIntoView({
        behaviour: "smooth",
      });
    }
  });
  return (
    <footer>
      <div id="img-div" ref={contact}>
        <img src={logo} id="logo" alt="logo" />
        <div className="socials">
          {/* <button>
            <FaFacebook />
          </button>

          <button>
            <FaYoutube />
          </button>

          <button>
            <FaTwitter />
          </button>

          <button>
            <FaPinterest />
          </button>

          <button>
            <FaInstagram />
          </button> */}
        </div>
      </div>

      <div id="top">
        <ul>
          <li>
            <button href="#section-why">About Us</button>
          </li>

          <li>
            <button>Contact</button>
          </li>

          <li>
            <button href="#section-latest">Blog</button>
          </li>
        </ul>
      </div>

      <div id="bottom">
        <ul>
          <li>
            <button>Careers</button>
          </li>

          <li>
            <button>Support</button>
          </li>

          <li>
            <button>Privacy Policy</button>
          </li>
        </ul>
      </div>

      <div id="btn">
        <InviteBtn />
        <p> &copy; Easybank. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
