/**
 * Meaningful components used to build a resume.
 */

import React, { ReactNode, ReactElement } from "react";
import * as components from "./components";
import { ThemeProvider, DefaultTheme } from "styled-components";
import { HyperLink, Github } from "./icons";

interface ExperienceProps {
  title: string;
  viewUrl?: string;
  githubUrl?: string;
  dateRange: string;
  description: ReactNode;
}
export function Experience({ title, dateRange, description, viewUrl, githubUrl }: ExperienceProps) {
  return (
    <div>
      <components.LeftRight>
        <components.Header.Three heavy>
          {title}
          {viewUrl && (
            <>
              {" "}
              <a href={viewUrl} title="View in browser" target="_blank" rel="noopener noreferrer">
                <HyperLink
                  style={{ height: "1.25em", verticalAlign: "bottom", paddingBottom: ".05em" }}
                />
              </a>
            </>
          )}
          {githubUrl && (
            <>
              {" "}
              <a href={githubUrl} title="View on Github" target="_blank" rel="noopener noreferrer">
                <Github
                  style={{ height: "1.25em", verticalAlign: "bottom", paddingBottom: ".05em" }}
                />
              </a>
            </>
          )}
        </components.Header.Three>
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
  profession: string;
  education: string;
}
export function Header({ name, email, phone, location, profession, education }: HeaderProps) {
  return (
    <components.Section>
      <components.Header.One>{name}</components.Header.One>
      <components.Paragraph heavy>
        {profession}. {education}.
      </components.Paragraph>
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
export default function Resume({ header, sections }: ResumeProps) {
  return (
    <ThemeProvider theme={theme}>
      <components.Container>
        <>{header}</>
        <>{sections}</>
      </components.Container>
    </ThemeProvider>
  );
}
