import React from "react";
import styled from "styled-components";

export default function Tag(props) {
  return (
    <TextCard width={props.width}>
      <Text color={props.color}>{props.text}</Text>
    </TextCard>
  );
}

const TextCard = styled.div`
  backdrop-filter: blur(4px);
  width: ${props => props.width};
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 2px 2px 2px rgb(192,192,192, 0.4);
  margin: 2px;
`;
const Text = styled.h5`
  font-family: Poiret One;
  font-weight: bolder;
  font-size: 15px;
  color: ${props => props.color};
`;