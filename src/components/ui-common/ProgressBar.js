import React from "react";
import styled from "styled-components";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function ProgressBar(props) {
  const { text, score } = props;
  return (
    <CircularProgressbarWithChildren
      value={score * 10}
      background
      styles={buildStyles({
        backgroundColor: "rgb(255,0,0, 0.8)",
        pathColor: "gold",
        trailColor: "rgb(60,179,113)",
      })}
    >
      <ContainerText margin={props.margin}>
        {text && <Text>{text}</Text>}
        <Score fontSize={props.fontSize}>{score * 10}%</Score>
      </ContainerText>
    </CircularProgressbarWithChildren>
  );
}

const ContainerText = styled.div`
  color: #ffd700;
  font-size: 16px;
  margin-top: ${(props) => props.margin};
`;

const Text = styled.div`
  color: gold;
  margin: 0;
`;

const Score = styled.div`
  text-align: center;
  font-size: ${(props) => props.fontSize};
`;
