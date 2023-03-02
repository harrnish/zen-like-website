import styled from "styled-components";

export default styled.header`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  overflow: hidden;
  padding: 1rem 0;

  /* .container {
    width: 95% !important;
  } */

  .header__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* background: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1); */
    /* border-radius: 2em; */
    /* overflow: hidden; */
    /* padding: 0.8em !important; */
  }
  .nav__wrapper {
    ul {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      li {
        a {
          color: #fff;
          display: inline-block;
          text-decoration: none;
          font-size: 1.5rem;
          padding: 0.4em 0.8em;
        }
      }
    }
  }

  .searchIcon {
    cursor: pointer;
    .searchIcon__wrapper {
      font-size: 1.5rem;
      padding: 0.4em 0.8em;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
