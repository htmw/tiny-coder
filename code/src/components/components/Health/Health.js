import React from "react";
import {
  SectionDescription,
  SectionTitle,
} from "../styles/SectionHeaders.styled";
import { HealthData } from "../../../utils/HealthData";
import ProgramCard from "../Programs/ProgramCard";
import { Section, SectionCards } from "../styles/Sections.styled";

const Program = () => {
  return (
    <Section id="programs">
      <SectionTitle>Our Health Programs</SectionTitle>
      <SectionDescription>
        {" "}
        Redefine Me's physician-led physical health services provide expert 
        guidance and personalized fitness plans to optimize your well-being. Join us today!
      </SectionDescription>
      <SectionCards>
        {HealthData.map((program) => (
          <ProgramCard key={program.id} {...program} />
        ))}
      </SectionCards>
    </Section>
  );
};

export default Program;
