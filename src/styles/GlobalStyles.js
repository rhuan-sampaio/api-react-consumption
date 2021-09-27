import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
}
body {
  background-color: #262524;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='125' height='125' viewBox='0 0 120 120'%3E%3Cpolygon fill='%23FAE7FF' fill-opacity='0.01' points='120 0 120 60 90 30 60 0 0 0 0 0 60 60 0 120 60 120 90 90 120 60 120 0'/%3E%3C/svg%3E");
  font-family: sans-serif;
  color: ${colors.primaryDarkColor};
}
html, body, #root {
  height: 100%;
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
  background: ${colors.successColor};
}body .Toastify .Toastify__toast-container .Toastify__toast--error {
  background: ${colors.errorColor};
}
`;

export const Container = styled.section`
  max-width: 480px;
  background: #fff;
  margin: 30px auto;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  h1 {
    text-align: center;
    font-size: 26px;
  }
`;
