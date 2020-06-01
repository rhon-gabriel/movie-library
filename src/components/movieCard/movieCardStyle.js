import styled from "styled-components";
import { Grid } from "@material-ui/core";

export const Wrapper = styled(Grid)({
  display: "flex",
  justifyContent: "center",
});

export const Card = styled.a`
    display: flex;
    height: 290px;
    width: 200px;
    flex-direction: column;
    border-radius: 10px;
    position: relative;
    cursor: pointer;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3), 3px 3px 3px rgb(147, 163, 175, 4);
    transition: width 1s;
    &:hover {
      width: 230px;
      }
    }`;

export const CircularBarContainer = styled.div`
  width: 35px;
  height: 35px;
  padding: 2px;
  float: left;
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 1000;
`;
export const TagContainer = styled.div`
  position: absolute;
  top: 3px;
  left: 5px;
  z-index: 1000;
`;

export const Poster = styled.img`
  width: 100%;
  border-radius: 10px;
`;
