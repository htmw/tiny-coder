import React from "react";
import { GlobalStyles } from "./components/styles/Global";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/styles/Theme";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Program from "./components/Programs/Program";
import Expert from "./components/Expert/Expert";
import Doctors from "./components/Doctors/Doctors";
import Benefits from "./components/Benefits/Benefits";
import Health from "./components/Health/Health";
import Membership from "./components/Membership/Membership";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import HealthBenefits from "./components/HealthBenefits/HealthBenefits";

function Gynamstic() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <div className="container">
          {/* <Navbar /> */}
          <Expert />
          <Health />
          <Doctors />
          <HealthBenefits />
          {/* <Banner /> */}
          {/* <Membership />
          <Testimonials /> */}
          {/* <Footer /> */}
        </div>
      </ThemeProvider>
    </>
  );
}

export default Gynamstic;
