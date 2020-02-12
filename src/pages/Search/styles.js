import styled from "styled-components";

export const MainHeader = styled.header`
  height: 45px;
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
  position: relative;
  z-index: 1;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  nav,
  ul {
    display: flex;
    list-style: none;
  }

  nav ul li {
    display: flex;
    align-items: center;
    font-size: 13px;
    color: #667590;
    font-weight: bold;
    font-size: 20px;
    color: #0097f0;
    a {
      all: unset;
      display: flex;
      align-items: center;
      font-size: 13px;
      color: #667590;
      font-weight: bold;
      font-size: 20px;
      color: #0097f0;
      cursor: pointer;
    }
  }
`;