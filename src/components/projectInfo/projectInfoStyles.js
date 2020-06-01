import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
`;
export const Card = styled.div`
  margin-top: 2vh;
  border-radius: 12px;
  width: 380px;
  max-height: 600px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  text-align: justify;
  box-shadow: 5px 2px 5px rgba(0, 0, 0, 0.08), 2px 5px 5px rgb(147, 163, 175, 4);
  background-color: rgb(229, 229, 229, 0.1);
  @media (max-width: 600px) {
    width: 330px;
    max-height: 500px;
  }
  @media (min-width: 600px) and (max-width: 800px) {
    width: 460px;
    max-height: 600px;
    font-size: 20px;
  }
  @media (min-width: 800px) and (max-width: 1024px) {
    margin-left: 40px;
    width: 450px;
    height: 600px;
    font-size: 22px;
  }
`;

export const Title = styled.div`
  margin-top: 3vh;
  font-size: 25px;
  justify-content: center;
  display: flex;
  background: linear-gradient(to right, #40e0d0, #ff8c00, #ff0080);
  background-clip: text;
  text-fill-color: rgba(255, 255, 255, 0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: rgba(255, 255, 255, 0);
`;

export const List = styled.ul`
  list-style-type: circle;
`;

export const Content = styled.div`
  flex: 1;
  overflow: scroll;
`;

export const Paragraph = styled.p`
  color: #ffffff;
  line-height: 1.5;
  margin-top: 5vh;
`;
