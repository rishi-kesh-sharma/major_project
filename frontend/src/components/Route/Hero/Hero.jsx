import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import { config } from "../../../config";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          "url(https://themes.rslahmed.dev/rafcart/assets/images/banner-2.jpg)",
      }}>
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1
          className={`text-5xl leading-[1.2]  800px:text-[60px] text-primary-darkest font-[600] capitalize`}>
          {config.hero.title.line1} <br />
        </h1>
        <p className="text-sm leading-[1.2] font-[Poppins] font-[400] text-[#000000ba]">
          {/* <br /> */}
          {config.hero.description.line1} <br />
          {/* <br /> */}
          {config.hero.description.line2} <br />
        </p>
        <Link to="/products">
          <button className={`${styles.button} mt-5 bg-primary`}>
            <span className="bg-primary text-primary-foreground font-[Poppins] text-[18px]">
              Shop Now
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
