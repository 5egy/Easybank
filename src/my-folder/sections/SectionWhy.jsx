import React,{useRef, useEffect} from "react";
import Scontent from "./Scontent";
import online from "../easybank-landing-page-master/images/icon-online.svg";
import budgeting from "../easybank-landing-page-master/images/icon-budgeting.svg";
import onboarding from "../easybank-landing-page-master/images/icon-onboarding.svg";
import api from "../easybank-landing-page-master/images/icon-api.svg";

const SectionWhy = ({element}) => {
  const whySec = useRef();

  useEffect(() => {
    if (element === "about") {
      window.scrollTo({
        top: whySec.current.getBoundingClientRect().top + window.pageYOffset,
        behavior: "smooth",
      });
      // console.log(whySec.current.getBoundingClientRect())
      
    }
  }, [element]);


  return (
  <section id="section-why" ref={whySec}>
      <div id="section-title">
        <h1>Why choose Easybank?</h1>
        <p>
          We leverage Ope banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </div>

      <div id="why-details">
      <Scontent image={online} heading={"Online Banking"}>
        Our modern web and mobile applications allow you to keep track of your
        finances wherever you are in the world
      </Scontent>

      <Scontent image={budgeting} heading={"Simple Budgeting"}>
        See exactly where your money goes each month. Receive notifications when
        you're close to your hitting limits.
      </Scontent>

      <Scontent image={onboarding} heading={"Fast Onboarding"}>
        We don't do branches. Open your account in minutes online and start
        taking control of your finances right away.
      </Scontent>

      <Scontent image={api} heading={"Open API"}>
        Manage your savings, investments, pension, and much more from one
        account. Tracking your money has never been easier.
      </Scontent>
      </div>

    
    </section>
  );
};

export default SectionWhy;
