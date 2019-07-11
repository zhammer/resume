import React from "react";
import Resume, { Header, Section, Experience } from "./resume-components";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import GithubCorner from "react-github-corner";

const Page = styled.div`
  background-color: #eee;
  display: flex;
  justify-content: center;

  & > div {
    max-width: 40em;
  }
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <GithubCorner href="https://github.com/zhammer/resume" />
      <Page>
        <Resume
          header={
            <Header
              name="Zach Hammer"
              email="zachary_hammer@alumni.brown.edu"
              phone="516.780.1556"
              location="NYC"
              profession="Software Engineer"
              education="Brown University 2017"
            />
          }
          sections={[
            <Section
              title="Experience"
              experiences={[
                <Experience
                  title="SeatGeek · Software Engineer"
                  dateRange="Sept 2018 - Present"
                  description={
                    <>
                      I work on SeatGeek's commerce team, where I:
                      <ul>
                        <li>
                          Own SeatGeek's new seller verification project to process seller identity
                          verification and sanctions regulations in-house.
                        </li>
                        <li>
                          Help build SeatGeek's core checkout systems and internal tools for
                          processing payments and payouts to users in both our primary and resale
                          marketplaces.
                        </li>
                        <li>
                          Connected and collaborated with React NYC to host the React Week 2019
                          Hackathon at SeatGeek's office.
                        </li>
                      </ul>
                    </>
                  }
                />,
                <Experience
                  title="Bloomberg LP · Software Engineer"
                  dateRange="June 2017 - August 2018"
                  description={
                    <>
                      I worked on Bloomberg's real-time data services team, where I improved our
                      team’s development, product, and QA workflows by building a web app to easily
                      subscribe to and view data from our market data APIs.
                    </>
                  }
                />
              ]}
            />,
            <Section
              title="Outside Work"
              experiences={[
                <Experience
                  title="Morning CD · Personal Project"
                  viewUrl="https://8bit.morningcd.com"
                  githubUrl="https://github.com/zhammer/morning-cd"
                  dateRange="2018 - Present"
                  description={
                    <>
                      I built <a href="https://8bit.morningcd.com">morningcd.com</a> - a site that
                      lets people from around the world make a daily playlist of their favorite
                      songs.
                      <ul>
                        <li>
                          30 for 30 host Jody Avirgan occasionally{" "}
                          <a href="https://twitter.com/jodyavirgan/status/1079027426909450240">
                            tweets
                          </a>{" "}
                          it to his followers.
                        </li>
                      </ul>
                    </>
                  }
                />,
                <Experience
                  title="Tech for Campaigns · Virginia Ads Tracker"
                  dateRange="May 2019 - Present"
                  description={
                    <>
                      I am on a small volunteer team building a web app that gives Virginia
                      Democrats insight into statewide political ad spending on Facebook, where I:
                      <ul>
                        <li>
                          Helped kickstart development by designing a GraphQL schema based on input
                          from design, product, backend and frontend team members.
                        </li>
                        <li>
                          Facilitate deployment on AWS of our APIs and ETL pipelines using the
                          serverless framework.
                        </li>
                        <li>
                          Build our website with another frontend engineer using React, Typescript
                          and Apollo Client.
                        </li>
                      </ul>
                    </>
                  }
                />,
                <Experience
                  title="Green Oasis Community Garden · Event Organizer"
                  dateRange="2017 - Present"
                  description={<>I organize free jazz concerts at my local community garden.</>}
                />
              ]}
            />
          ]}
        />
      </Page>
    </>
  );
}

// I built a wrapper around Brandon Rhodes' python port of the 1977 ADVENTURE game to provide functionality for long-running hosted game sessions amongst multiple users.
