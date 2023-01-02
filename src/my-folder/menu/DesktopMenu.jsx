import React, { useContext, useRef } from "react";
import Logo from "../easybank-landing-page-master/images/logo.svg";
import InviteBtn from "../header/InviteBtn";
import { scrollElem } from "../../App";

const DesktopMenu = ({ openMenu }) => {
  const scrollToElement = useContext(scrollElem);
const blog = useRef();
const contact = useRef();
const about = useRef();
const home = useRef();


  function scrollFunction(e) {

    if(e === blog.current){
      scrollToElement("blog")
    }
    if(e === about.current){
      scrollToElement("about")
    }
    if(e === contact.current){
      scrollToElement("contact")
    }

    if(e === home.current){
      scrollToElement("home")
    }

    
    
    // console.log(e, blog.current)
  }

  return (
    <div className={`desktop-menu ${openMenu && "hide-menu"}`}>
      <div id="logo">
        <img src={Logo} alt="logo"/>
      </div>
      <ul onClick={(e) => scrollFunction(e.target)}>
        <li>
          <p  className="links" ref={home}>
            Home
          </p>
        </li>

        <li>
          <p  className="links" ref={about}>
            About
          </p>
        </li>

        <li>
          <p  className="links" ref={contact}>
            Contact
          </p>
        </li>

        <li>
          <p  className="links" ref={blog}>
            Blog
          </p>
        </li>
        <li>
          <p  className="links">
            Careers
          </p>
        </li>
      </ul>
      <div>
        <InviteBtn />
      </div>
    </div>
  );
};

export default DesktopMenu;
