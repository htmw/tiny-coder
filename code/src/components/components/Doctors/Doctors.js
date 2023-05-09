import React from "react";
import { SectionTitle } from "../styles/SectionHeaders.styled";
import { doctorsData } from "../../../utils/doctorsData";
import AboutCard from "../About/AboutCard";
import { Section, SectionCards } from "../styles/Sections.styled";

const Doctors = () => {
  return (
    <Section id="about">
      <SectionTitle>Our Doctors - Health Experts</SectionTitle>
      <SectionCards>
        {doctorsData.map((about) => (
          <AboutCard key={about.id} {...about} />
        ))}
      </SectionCards>
    </Section>
  );
};

export default Doctors;
