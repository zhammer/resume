/**
 * Lower level style components used for resume.
 */

import styled, { css } from "styled-components";

const withUnderline = css`
  position: relative;
  &::after {
    position: absolute;
    content: "\\2014";
    left: 0;
    bottom: -0.5em;
    font-size: 0.7em;
  }
`;

export const Container = styled.div`
  & * {
    color: ${props => props.theme.colors.primary};
    margin: 0;
    font-weight: 300;
  }
  & a {
    color: ${props => props.theme.colors.link};
  }
  background-color: ${props => props.theme.colors.background};
  font-family: "Oswald", sans-serif;
  padding: 2em;
`;

export const Header = {
  One: styled.h1`
    font-size: 3rem;
    ${withUnderline};
  `,
  Two: styled.h2`
    font-size: 2rem;
    ${withUnderline};
  `,
  Three: styled.h2<{ heavy?: boolean }>`
    font-size: 1.2rem;
    font-weight: ${props => (props.heavy ? 400 : 300)};
  `
};

export const Paragraph = styled.p`
  font-family: "Roboto Slab", serif;
  font-weight: 300;
  padding-top: 0.5em;
  font-size: 0.9rem;

  & > ul {
    list-style: none;
    padding-left: 0;
    margin-top: 0;
  }

  & > ul > li::before {
    content: "• ";
  }
`;

export const Section = styled.div`
  & + & {
    margin-top: 1em;
  }
  & > div {
    margin-top: 0.5em;
  }
  & > div + & > div {
    margin-top: 1em;
  }
`;

export const LeftRight = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
