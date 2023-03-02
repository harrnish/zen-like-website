import React, { useState } from "react";
import clsx from "clsx";
import HeaderStyles from "../styles/HeaderStyles";
import Logo from "./Logo";
import { Link } from "gatsby";

import { menu } from "../constants/menu";

const Header = () => {
  return (
    <HeaderStyles>
      <div className="container">
        <div className="header__container">
          <div className="logo">
            <Logo />
          </div>
          <div className="nav__wrapper">
            <nav>
              <ul>
                <li className="searchIcon">
                  <div className="searchIcon__wrapper">Search</div>
                </li>
                {menu.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </HeaderStyles>
  );
};

export default Header;
