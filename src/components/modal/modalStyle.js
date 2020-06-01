import styled from "styled-components";

export const ModalWrapper = styled.div`
  background-color: rgb(32, 32, 32, 0.9);
  width: 65%;
  position: absolute;
  top: 50%;
  left: 18%;
  transform: translate(0, -50%);
  overflow-y: auto;
  outline: none;
  border-radius: 12px;
  height: 500px;
  @media (max-width: 600px) {
    width: 350px;
    left: 3%;
    flex-direction: column;
  }
`;

export const Containter = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
export const LeftBox = styled.div`
  margin: 10px;
  text-justify: inter-word;
  color: #ffffff;
  width: 70%;
  @media (max-width: 800px) {
    width: 90%;
  }
`;

export const LeftHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const RightBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 30%;
  @media (max-width: 800px) {
    width: 90%;
  }
`;

export const Title = styled.div`
  @media (max-width: 600px) {
    width: 280px;
  }
`;

export const LeftContentBottom = styled.div`
  width: 100%;
  height: 30%;
  margin-top: 5vh;
`;
export const LeftContentTop = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  @media (max-width: 800px) {
    display: none;
  }
`;

export const P = styled.p`
  text-align: justify;
  text-justify: inter-word;
  margin-top: 2vh;
  line-height: 1.6;
`;

export const QuotesContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const Tagline = styled.q`
  font-size: 32px;
  font-family: "Allura", cursive;
  text-align: center;
  margin: auto;
  background: linear-gradient(to right, #ff7e5f, #feb47b);
  background-clip: text;
  text-fill-color: rgba(255, 255, 255, 0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: rgba(255, 255, 255, 0);
`;

export const TagContainer = styled.div`
  flex-direction: row;
  display: flex;
  width: 100%;
`;

export const Poster = styled.img`
  width: 250px;
  height: 350px;
  border-radius: 18px;
  position: fixed;
  top: 0;
  margin-top: 5px;
  @media (max-width: 850px) {
    display: none;
  }
  @media (min-width: 850px) and (max-width: 1024px) {
    width: 180px;
    height: 280px;
  }
`;

export const CircularBarContainer = styled.div`
  width: 100px;
  height: 100px;
`;

export const TextRow = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Text = styled.div`
  font-size: 15px;
  color: #ffff;
  display: flex;
  margin: 8px 0 0 10px;
`;

export const Logo = styled.img`
  width: 40px;
  height: 40px;
  position: fixed;
  bottom: 0;
  margin-bottom: 10px;
  @media (max-width: 800px) {
    display: none;
  }
`;
