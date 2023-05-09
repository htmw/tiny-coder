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
import heroImg from "../../../utils/assets/hero-image.png";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <MainHero>
      
      <MainImage>
        <HeroImage src={heroImg} alt="main image" />
      </MainImage>
      <article className="home-content">
      <MainDetails>
        <MainTitlte>
          <h1><span><small>Let your body cry, Train everyday with pro</small></span></h1>
        </MainTitlte>
        <MainDescription>
          <p>
          Redefine Me: Personalized fitness plans by certified trainers. Top-of-the-line facilities. Inclusive community promotes physical, mental, and
          emotional well-being. Join us to redefine your fitness journey!
          </p>
        
        </MainDescription>
        <MainButtons>
          <div className="home-buttons">
            <Link to="Gynamstic" className="calories-btn">Learn more</Link>
          </div>
          {/* <Link to="Recipes" className="recipes-btn">
              <svg className="fa-solid fa-magnifying-glass"></svg>
              <span>Recipes</span>
          </Link> */}
          {/* <StyledButton primary={true}>
            Get Started <ArrowIcon />
          </StyledButton>
          <StyledButton>
            Learn More <PlayIcon />{" "}
          </StyledButton> */}
        </MainButtons>
      </MainDetails>
      </article>

    </MainHero>
  );
};

export default Hero;
