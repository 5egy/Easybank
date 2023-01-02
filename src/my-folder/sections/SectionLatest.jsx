import React, {  useEffect, useRef } from "react";
import Sarticle from "./Sarticle";
import Currency from "../easybank-landing-page-master/images/image-currency.jpg";
import Restaurant from "../easybank-landing-page-master/images/image-restaurant.jpg";
import Plane from "../easybank-landing-page-master/images/image-plane.jpg";
import Confetti from "../easybank-landing-page-master/images/image-confetti.jpg";

const SectionLatest = ({ element }) => {
  const blogSec = useRef();

  useEffect(() => {
    if (element === "blog") {
     window.scrollTo({
        top: blogSec.current.getBoundingClientRect().top + window.pageYOffset,
        behavior: "smooth",
      });

    }
  }, [element]);

  return (
    <section id="section-latest" ref={blogSec}>
      <h1 >Latest Articles</h1>
      <div id="latest-details">
        <Sarticle
          image={Currency}
          author={"Claire Robinson"}
          title={"Receive money in any currency with no fees"}
        >
          The world is getting smaller and we're becoming mor mobile. So why
          should you be forced to only receive money in a single...
        </Sarticle>

        <Sarticle
          image={Restaurant}
          author={"Wilson Hutton"}
          title={"Treat yourself without worrying about money"}
        >
          The world is getting smaller and we're becoming mor mobile. So why
          should you be forced to only receive money in a single...
        </Sarticle>

        <Sarticle
          image={Plane}
          author={"Wilson Hutton"}
          title={"Take your Easybank card wherever you go"}
        >
          We want you to enjoy your travels. This is why we don't change any
          fees on purchases while you're abroad. We'll even show you...
        </Sarticle>

        <Sarticle
          image={Confetti}
          author={"Claire Robinson"}
          title={"Our invite-only Beta accounts are now live!"}
        >
          After a lot of hard work by the whole team, we're excited tolaunch our
          closed beta. It's easy to request an invite through the site...
        </Sarticle>
      </div>
    </section>
  );
};

export default SectionLatest;
