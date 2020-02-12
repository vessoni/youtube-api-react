import styled from 'styled-components';

export const StyleVideoGalery = styled.div`
  margin: 0.5vw;
  font-size: 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;

  a {
    box-flex: auto;
    flex: auto;
    width: 300px;
    margin: 0.3vw;
    display: flex;
    text-decoration:none;

    img {
      width: 100%;
      height: auto;
      border-radius: 5px;
    }
  }
`;

export const PageActions = styled.div`
  padding-top: 15px;
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;

  button {
    transition: opacity 0.25s ease-out;
    border-radius: 20px;
    outline: 0;
    border: 0;
    padding: 15px;
    margin: 15px;
    width: 100px;
    background-color: #0097f0;
    color: #fff;

    &:disabled {
      opacity: 0.35;
      cursor: not-allowed;
    }
  }
`;
