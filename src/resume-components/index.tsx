/**
 * Meaningful components used to build a resume.
 */

import React, { ReactNode, ReactElement } from "react";
import * as components from "./components";
import { ThemeProvider, DefaultTheme } from "styled-components";

interface ExperienceProps {
  title: string;
  dateRange: string;
  description: ReactNode;
}
export function Experience({ title, dateRange, description }: ExperienceProps) {
  return (
    <div>
      <components.LeftRight>
        <components.Header.Three heavy>{title}</components.Header.Three>
        <components.Header.Three>{dateRange}</components.Header.Three>
      </components.LeftRight>
      <components.Paragraph>{description}</components.Paragraph>
    </div>
  );
}

interface SectionProps {
  title: string;
  experiences: ReactElement<ExperienceProps>[];
}
export function Section({ title, experiences }: SectionProps) {
  return (
    <components.Section>
      <components.Header.Two>{title}</components.Header.Two>
      {experiences}
    </components.Section>
  );
}

interface HeaderProps {
  name: string;
  email: string;
  phone: string;
  location: string;
}
export function Header(props: HeaderProps) {
  const { name, email, phone, location } = props;
  return (
    <components.Section>
      <components.Header.One>{name}</components.Header.One>
      <components.Paragraph>
        <a href={`mailto:${email}`}>{email}</a> · {phone} · {location}
      </components.Paragraph>
    </components.Section>
  );
}

const theme: DefaultTheme = {
  colors: {
    primary: "black",
    background: "white",
    link: "blue"
  }
};

interface ResumeProps {
  header: ReactElement<HeaderProps>;
  sections: ReactElement<SectionProps>[];
}
export default function Resume(props: ResumeProps) {
  return (
    <ThemeProvider theme={theme}>
      <components.Container>
        <>{props.header}</>
        <>{props.sections}</>
      </components.Container>
    </ThemeProvider>
  );
}
