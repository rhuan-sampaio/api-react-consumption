import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';
import background from '../img/background.jpg';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
}
body {
  background-image: url(${background});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  font-family: sans-serif;
  position: relative;

  color: ${colors.primaryDarkColor};
}
html, body, #root {
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: auto;
}
button {
  cursor: pointer;
  background: ${colors.primaryDarkColor};
  padding: 10px 20px;
  border: none;
  color: #fff;
  border-radius: 4px;
  font-weight: 700;
  transition: all 300ms ease-in-out;
  &:hover{
    filter: brightness(75%);
  }
  &:disabled{
    cursor: not-allowed;
  }
}

a {
  text-decoration: none;
  color: ${colors.primaryColor};
}
ul {
  list-style: none;
}
body .Toastify .Toastify__toast-container .Toastify__toast--success {
  color: #fff;
  background: ${colors.successColor};
}body .Toastify .Toastify__toast-container .Toastify__toast--error {
  color: #fff;
  background: ${colors.errorColor};
}
`;
export const OpacityLayer = styled.div`
  position: absolute;
  width: 100%;
  height: 100% !important;
  background: rgba(0, 0, 0, 0.3);
  top: 0;
  left: 0;
  z-index: -1;
`;
export const Container = styled.section`
  max-width: 480px;
  background: ${colors.primaryColor};
  margin: 30px auto;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  h1 {
    text-align: center;
    font-size: 26px;
  }
`;
