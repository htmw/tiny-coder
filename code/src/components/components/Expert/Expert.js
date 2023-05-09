import React from "react";
import {
  HeroImage,
  MainButtons,
  MainDescription,
  MainDetails,
  MainHero,
  MainImage,
  MainTitleLine,
  MainTitleTextGradient,
  MainTitlte,
} from "../styles/Hero.styled";
import { StyledButton } from "../styles/Button.styled";
import {
  BsArrowUpRightCircleFill as ArrowIcon,
  BsFillPlayCircleFill as PlayIcon,
} from "react-icons/bs";
import heroImg from "../../../utils/images/doctor-main.png";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <MainHero>
      <article className="home-content">
      <MainDetails>
        <MainTitlte>
          <br/>
          <h1><span><small>when it comes to your Health</small></span></h1>
        </MainTitlte>
        <MainDescription>
          <p>Redefine Me's specialized physical health services for doctors cater to fitness enthusiasts. Experience top-tier health facilities and exceptional care today.
          </p>
        
        </MainDescription>
      </MainDetails>
      </article>
      <MainImage>
        <HeroImage src={heroImg} alt="main image" />
      </MainImage>

    </MainHero>
  );
};

export default Hero;
