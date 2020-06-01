import styled from "styled-components";
import { Link } from "react-router-dom";
import LiveTvIcon from "@material-ui/icons/LiveTv";

export const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  background-color: rgb(229, 229, 229, .1);
`

export const StyledLinkLogo = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: row;
`
export const StyledLink = styled(Link)`
  text-decoration: none;
`

export const Icon = styled(LiveTvIcon)`
  margin-top: 5vh;
  color: red;
  font-size: 28px;
`

export const FirstTextLogo = styled.h1`
  font-family: Poiret One;
  font-size: 30px;
  background: linear-gradient(to right, #ff7e5f, #feb47b);
  background-clip: text;
  text-fill-color: rgba(255, 255, 255, 0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: rgba(255, 255, 255, 0);
`;
export const SecondTextLogo = styled.h1`
  font-family: Caveat;
  margin-top: 5vh;
  margin-right: 5px;
  font-size: 24px;
  background: linear-gradient(to right, #fffbd5, #b20a2c);
  background-clip: text;
  text-fill-color: rgba(255, 255, 255, 0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: rgba(255, 255, 255, 0);
`;

export const Text = styled.h1`
  font-weight: bolder;
  font-size: 16px;
  background: linear-gradient(to right, #eecda3, #ef629f);
  background-clip: text;
  text-fill-color: rgba(255, 255, 255, 0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: rgba(255, 255, 255, 0);
`;
