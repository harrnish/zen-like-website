import React from "react";
import LogoStyles from "../styles/LogoStyles";
import { AiOutlineLink } from "react-icons/ai";

const Logo = () => {
  return (
    <LogoStyles to="/">
      <AiOutlineLink />
    </LogoStyles>
  );
};

export default Logo;
