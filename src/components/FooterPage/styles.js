import styled from 'styled-components';

export const FooterPage = styled.footer`
  height: 60px;
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
    text-align: center;
    font-size: 13px;
    color: #667590;
    font-weight: bold;
    margin-left: 30px;
    &:first-child {
      color: #0097f0;
    }
    &:last-child {
      margin-right: 15px;
    }
  }
`;