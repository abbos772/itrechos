import React from "react";
import "./Hero.scss";
import { LuCirclePlay } from "react-icons/lu";
import heroImg from "./img/Image (1).png";
import miniimg from './img/image 79.png'

import { Rating } from "@mui/material";
const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero_flex">
          <div className="hero_text">
            <div className="mini_t">
              <div className="d"></div>
              <h3>WELCOME TO Ztech!</h3>
            </div>
            <h1>
              We are ready <b>To provide</b> <br />
              It solution
            </h1>
            <p>
              Assertively streamline interactive interfaces after value
              infrastructures. Assertively streamline interactive interfaces
              after infrastructures. We are 100+ professional software.
            </p>
            <div className="play">
              <button>EXPLORE SERVICES</button>
              <div className="pl">
                <LuCirclePlay />
                <h4>Watch A Video</h4>
              </div>
            </div>
          </div>
          <div className="hero_img">
            <img src={heroImg} alt="Hero" />
            <div className="hero_min">
            <img src={miniimg} alt="" />
            </div>
            <div className="hero_min2">
              <h3>2000+</h3>
              <p>Happy Clients</p>
              <Rating/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
