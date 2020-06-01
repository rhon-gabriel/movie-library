import React from "react";
import {
  HeaderBox,
  StyledLinkLogo,
  FirstTextLogo,
  SecondTextLogo,
  Icon,
  StyledLink,
  Text,
} from "./headerStyle";

function Header() {
  return (
    <HeaderBox>
      <StyledLinkLogo to="/">
        <FirstTextLogo>Popular</FirstTextLogo>
        <SecondTextLogo>Movies</SecondTextLogo>
        <Icon />
      </StyledLinkLogo>
      <StyledLink to="/project">
        <Text>Project Info</Text>
      </StyledLink>
    </HeaderBox>
  );
}

export default Header;
