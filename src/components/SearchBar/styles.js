import styled from "styled-components";

export const MainHeader = styled.header`
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


`;

export const BannerForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    padding: 10px;
    font-size: 14px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 500px;
  padding: 10px;

  input {
    text-align: center;
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 12px;
    border-radius: 4px 0px 0px 4px;
    font-size: 16px;
  }
`;

export const SubmitButton = styled.button.attrs({
  type: 'submit',
})`
  background: #7159c1;
  border: 0;
  padding: 0 15px;
  border-radius: 0px 4px 4px 0px;

  display: flex;
  justify-content: center;
  align-items: center;
`;