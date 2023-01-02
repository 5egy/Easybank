import React, { useEffect, useState, useContext, useRef } from "react";
import "../style/menu.scss";
import { scrollElem } from "../../App";

const MobileMenu = ({ openMenu }) => {
  const[ transitionState, setTrans] = useState(false);
  const scrollValue = useContext(scrollElem);

  const blog = useRef();
const contact = useRef();
const about = useRef();
const home = useRef();
  

  function scrollFunction(e) {

    if(e === blog.current){
      scrollValue("blog")
    }
    if(e === about.current){
      scrollValue("about")
    }
    if(e === contact.current){
      scrollValue("contact")
    }

    if(e === home.current){
      scrollValue("home")
    }
  }





  useEffect(() => {
    setTimeout(()=>{
      if(openMenu){
        setTrans(true)
      } else{
        setTrans(false)
      }

    }, 20)
  }, [openMenu]);

  return (
    <div className={`mobile-menu ${!openMenu && "hide-menu"}`} onClick={(e)=>{
      scrollFunction(e.target)
    }}>
      <ul>
        <li>
          <p ref={home} className={transitionState ? "link-1" : "links"}>Home</p>
        </li>
        <li>
          <p ref={about} className={transitionState ? "link-2" : "links"}>About</p>
        </li>
        <li>
          <p ref={contact} className={transitionState ? "link-3" : "links"}>Contact</p>
        </li>
        <li>
          <p ref={blog} className={transitionState ? "link-4" : "links"}>Blog</p>
        </li>
        <li>
          <p className={transitionState ? "link-5" : "links"}>Careers</p>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
