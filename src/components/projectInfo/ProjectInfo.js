import React from "react";
import { Wrapper, Card, Content, Title, Paragraph, List } from './projectInfoStyles'
const techStack = [
  "React",
  "Redux",
  "React Router Dom",
  "Axios",
  "Styled Components",
  "Material Io",
  "React-Spinners",
  "React-Circular-Progressbar",
];

export default function ProjectInfo() {
  return (
    <Wrapper>
      <Card>
        <Content>
          <Title>Project Info</Title>
          <Paragraph>
            This web application, using {" "}
            <a
              href="https://developers.themoviedb.org/3"
              style={{ color: "#ff748c", textDecoration: "none" }}
            >
              the Movie Database API
            </a>,
            aims to show a simple list of popular
            movies on which users can get information about release date, user
            score, sypnosis, runtime and genres.
          </Paragraph>
          <Paragraph>
            Tech Stack:
            <List>
              {techStack.map((el) => {
                return <li>{el}</li>;
              })}
            </List>
          </Paragraph>
        </Content>
      </Card>
    </Wrapper>
  );
}