import React from "react";
import {
  Benefit,
  BenefitsImage,
  BenefitsImg,
  BenefitsList,
  BenefitsLists,
  CheckIcon,
  SectionBenefits,
  BenefitsDetails,
  BenefitsImageContainer,
} from "../styles/Benefits.styled";
import {
  SectionDescription,
  SectionTitle,
} from "../styles/SectionHeaders.styled";
import { Section } from "../styles/Sections.styled";
import { healthbenefits } from "../../../utils/healthbenefits.js";
import BenefitImg from "../../../utils/images/healthy.png";

const HealthBenefits = () => {
  return (
    <Section>
      <SectionBenefits>
        <BenefitsDetails>
          <SectionTitle textDefault={true}>the benefits</SectionTitle>
          <SectionDescription textDefault={true}>
          Our physician-led physical health and fitness services provide numerous benefits.
          Join us today to experience the benefits of our top-quality physical health and fitness services!
          </SectionDescription>
          <BenefitsLists>
            {healthbenefits.map((benefit) => {
              return (
                <BenefitsList key={benefit.id}>
                  <CheckIcon />
                  <Benefit>{benefit.benefit} </Benefit>
                </BenefitsList>
              );
            })}
          </BenefitsLists>
        </BenefitsDetails>
        <BenefitsImageContainer>
          <BenefitsImage>
            <BenefitsImg src={BenefitImg} alt="benefit image" />
          </BenefitsImage>
        </BenefitsImageContainer>
      </SectionBenefits>
    </Section>
  );
};

export default HealthBenefits;
