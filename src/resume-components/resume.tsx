import React from "react";
import { Container, Header, Paragraph, Section, LeftRight } from "./components";
import { ThemeProvider, DefaultTheme } from "styled-components";

interface Experience {
  name: string;
  date: string;
  description: string;
}

interface Section {
  title: string;
  experiences: Experience[];
}

export interface ResumeDetails {
  owner: {
    name: string;
    email: string;
    phone: string;
    location: string;
  };
  sections: Section[];
}

interface Props {
  className?: string;
  details: ResumeDetails;
}

const theme: DefaultTheme = {
  colors: {
    primary: "black",
    background: "white",
    link: "blue"
  }
};

export default function Resume(props: Props) {
  const {
    className,
    details: { owner, sections }
  } = props;
  return (
    <ThemeProvider theme={theme}>
      <Container className={className}>
        <Section>
          <Header.One>{owner.name}</Header.One>
          <Paragraph>
            <a href={`mailto:${owner.email}`}>{owner.email}</a> · {owner.phone} · {owner.location}
          </Paragraph>
        </Section>
        {sections.map(section => (
          <Section>
            <Header.Two>{section.title}</Header.Two>
            {section.experiences.map(experience => (
              <div>
                <LeftRight>
                  <Header.Three heavy>{experience.name}</Header.Three>
                  <Header.Three>{experience.date}</Header.Three>
                </LeftRight>
                <Paragraph>{experience.description}</Paragraph>
              </div>
            ))}
          </Section>
        ))}
      </Container>
    </ThemeProvider>
  );
}
