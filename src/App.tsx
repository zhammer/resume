import React from "react";
import Resume, { Header, Section, Experience } from "./resume-components";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";

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
                        <li>Am leading </li>
                        <li>B</li>
                      </ul>
                    </>
                  }
                />,
                <Experience
                  title="Bloomberg LP · Software Engineer"
                  dateRange="June 2017 - August 2018"
                  description={
                    <ul>
                      <li>
                        Helped provide real-time market data to Bloomberg’s enterprise clients by
                        building and maintaining APIs.
                      </li>
                      <li>
                        Improved our team’s development, product, and QA workflows by building a web
                        app to easily subscribe to and view data from our services.
                      </li>
                    </ul>
                  }
                />
              ]}
            />,
            <Section
              title="Outside Work"
              experiences={[
                <Experience
                  title="Tech for Campaigns · Virginia Ads Tracker"
                  dateRange="May 2019 - Present"
                  description={
                    <>
                      I am on a small volunteer team building a web app that gives Virginia
                      Democrats insight into statewide political ad spending on Facebook. My
                      contributions so far have been:
                      <ul>
                        <li>
                          Helping kickstart development by designing a GraphQL schema based on input
                          from design, product, backend and frontend team members.
                        </li>
                        <li>
                          Facilitating deployment on AWS of the APIs and ETL pipelines built by our
                          backend engineer by using the serverless framework.
                        </li>
                        <li>
                          Building the product's web app with another frontend engineer using React,
                          Typescript and Apollo Client.
                        </li>
                      </ul>
                    </>
                  }
                />,
                <Experience
                  title="Morning CD · Personal Project"
                  dateRange="2018 - Present"
                  description={
                    <>
                      <a href="https://8bit.morningcd.com">morningcd.com</a> lets people from around
                      the world make a daily playlist of their favorite songs.
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
                  title="Adventure Anywhere · Personal Project"
                  dateRange="June 2019 - Present"
                  description={
                    <>
                      A port of the 1977 ADVENTURE game that allows for long-running game sessions
                      peristed amongst multiple players.
                    </>
                  }
                />
              ]}
            />
          ]}
        />
      </Page>
    </>
  );
}
