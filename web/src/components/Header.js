import React, { useState } from "react";
import clsx from "clsx";
import HeaderStyles from "../styles/HeaderStyles";
import Logo from "./Logo";
import ActionButton from "./buttons/ActionButton";
import { Link } from "gatsby";
import { AiOutlineSearch, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import { menu } from "../constants/menu";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavItemClick = () => {
    if (isNavOpen) {
      setIsNavOpen(false);
    }
  };

  return (
    <HeaderStyles>
      <div className="container">
        <div className="header__container">
          <div className="logo">
            <Logo />
          </div>
          <div className={clsx("nav__wrapper", isNavOpen && "open")}>
            <div className="mobileIcon">
              <div className="searchIcon">
                <div className="searchIcon__wrapper">
                  <AiOutlineSearch />
                </div>
              </div>
              <ActionButton
                className="mobileMenuBtn"
                onClick={() => setIsNavOpen(true)}
                onKeyDown={() => setIsNavOpen(true)}
              >
                <AiOutlineMenu />
              </ActionButton>
            </div>
            {isNavOpen && (
              <div
                aria-label="Close Menu"
                role="button"
                tabIndex={0}
                className="mobileNavBg"
                onKeyDown={() => setIsNavOpen(false)}
                onClick={() => setIsNavOpen(false)}
              />
            )}
            <nav>
              <ActionButton
                className="mobileMenuCloseBtn"
                onClick={() => setIsNavOpen(false)}
                onKeyDown={() => setIsNavOpen(false)}
              >
                <AiOutlineClose />
              </ActionButton>
              <ul>
                {menu.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path} onClick={handleNavItemClick}>
                      {item.title}
                    </Link>
                  </li>
                ))}
                <li className="searchIcon">
                  <div className="searchIcon__wrapper">
                    <AiOutlineSearch />
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </HeaderStyles>
  );
};

export default Header;
