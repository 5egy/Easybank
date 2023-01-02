import React from "react";
import Nav from "./Nav";
import InviteBtn from "./InviteBtn";
import "../style/header.scss"
import mockup from "../easybank-landing-page-master/images/image-mockups.png";
import { useRef, useEffect } from "react";

const Header = ({openMenu,toggleMenu, element}) => {

  const head = useRef();

  useEffect(() => {
    if (element === "home") {
      window.scrollTo({
        top: head.current.getBoundingClientRect().top + window.pageYOffset,
        behavior: "smooth",
      });
      // console.log(whySec.current.getBoundingClientRect())
      
    }
  }, [element]);

 

  return (
    <header ref={head}>
      <Nav openMenu={openMenu} toggleMenu={toggleMenu} />

      <div id="landing-image">
     
       <img
          id="background-img"
          src={mockup}
          alt="Landing"
          width={"100px"}
        />

      </div>

      <div id="landing-message">
        <h1>Next generation digital banking</h1>

        <p>
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <InviteBtn />
      </div>
    </header>
  );
};

export default Header;
