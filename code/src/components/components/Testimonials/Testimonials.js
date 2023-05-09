import React from "react";
import {
  SectionDescription,
  SectionTitle,
} from "../styles/SectionHeaders.styled";
import { Section } from "../styles/Sections.styled";
import {
  ArrowNext,
  ArrowPrev,
  AttestantDetails,
  Avatar,
  AvatarContainer,
  TestimonialArrows,
  TestimonialAvatars,
  TestimonialCard,
  TestimonialCardContainer,
  TestimonialDetails,
  TestimonialDetailsCTA,
  TestimonialQuoteIcon,
  TestimonialReviewCount,
  TestimonialSection,
  TestimonialText,
  AttestantAvatarImage,
  AttestantAvatar,
  AttestantName,
  AttestantInformation,
  AttestantSubName,
} from "../styles/Testimonials.styed";
import { avatar1, avatar2, avatar3, avatar4, avatar5 } from "./avatars";
import { IconContext } from "react-icons";
import attestantAvatar from "../../../utils/assets/program1-img.png";

const Testimonials = () => {
  const iconStyle = {
    color: "#fff",
    size: "1.25rem",
  };

  return (
    <Section id="testimonials">
      <TestimonialSection>
        <TestimonialDetails>
          <SectionTitle textDefault={true}>testimonials</SectionTitle>
          <SectionDescription textDefault={true}>
            Here are various testimonials from some of our members spread all
            over the world.
          </SectionDescription>
          <TestimonialDetailsCTA>
            <TestimonialAvatars>
              <AvatarContainer>
                <Avatar src={avatar1} />
                <Avatar src={avatar2} />
                <Avatar src={avatar3} />
                <Avatar src={avatar4} />
                <Avatar src={avatar5} />
              </AvatarContainer>
              <TestimonialReviewCount>3,041 reviews</TestimonialReviewCount>
            </TestimonialAvatars>
            <TestimonialArrows>
              <IconContext.Provider value={iconStyle}>
                <ArrowPrev />
                <ArrowNext />
              </IconContext.Provider>
            </TestimonialArrows>
          </TestimonialDetailsCTA>
        </TestimonialDetails>
        <TestimonialCardContainer>
          <TestimonialCard>
            <TestimonialQuoteIcon />
            <TestimonialText>
              I am now much stronger and my balance has improved 100%. I like
              the challenge that Steven provides me at every training session.
              Steven introduces each new exercise to me by doing it himself.
            </TestimonialText>
            <AttestantDetails>
              <AttestantAvatarImage>
                <AttestantAvatar src={attestantAvatar} alt="attestant" />
              </AttestantAvatarImage>
              <AttestantInformation>
                <AttestantName>Janice Thompson</AttestantName>
                <AttestantSubName>Athelete</AttestantSubName>
              </AttestantInformation>
            </AttestantDetails>
          </TestimonialCard>
        </TestimonialCardContainer>
      </TestimonialSection>
    </Section>
  );
};

export default Testimonials;
