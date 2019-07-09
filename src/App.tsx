import React from "react";
import Resume, { Header, Section, Experience } from "./resume-components";

export default function App() {
  return (
    <Resume
      header={
        <Header
          name="Zach Hammer"
          email="zachary_hammer@alumni.brown.edu"
          phone="516.780.1556"
          location="NYC"
        />
      }
      sections={[
        <Section
          title="Experience"
          experiences={[
            <Experience
              title="Software Engineer @ SeatGeek"
              dateRange="September 2018 - Present"
              description="I make money moves on the commerce team."
            />
          ]}
        />,
        <Section
          title="Projects"
          experiences={[
            <Experience
              title="Tech for Campaign Ads Tracker (Full-Stack Engineer)"
              dateRange="May 2019 - Present"
              description={
                <>
                  I'm working with a small Tech for Campaigns team to give Virginia Democrats better
                  insight into statewide political ad spending on Facebook. My main contributions so
                  far have been:
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
            />
          ]}
        />
      ]}
    />
  );
}
