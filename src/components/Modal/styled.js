import styled from 'styled-components';
import * as colors from '../../config/colors';

const media = {
  width600: '@media(max-width: 600px)',
};
export const Container = styled.div`
  font-size: 16px;
  max-width: 80%;
  background: ${colors.primaryColor};
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h1 {
    text-align: center;
    font-size: 36px;
    margin: 20px 0;
  }
  form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 15px;
    margin: 0 auto;
    ${media.width600} {
      grid-template-columns: minmax(95px, 220px);
    }
  }
  label {
    display: grid;
    margin: 10px;
    font-size: 16px;
    font-weight: bold;
  }
  input {
    margin: 0 5px;
    color: white;
    margin: 10px;
    text-align: center;
    padding: 5px 5px;
    border: none;
    background: ${colors.primaryDarkColor};
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  button {
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    background: ${colors.primaryDarkColor};
    color: white;
    margin: 15px auto;
    cursor: pointer;
    &:hover {
      filter: brightness(80%);
    }
  }
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin: 0 auto;
  }
  .no-img {
    margin: 0 auto;
  }
  a {
    margin: 10px;
    color: ${colors.primaryDarkColor};
    transition: all 300ms;
    &:hover {
      filter: opacity(0.8);
    }
    span {
      padding: 0 5px;
      bottom: 5px;
      align-content: center;
    }
  }
`;

export const Unfocus = styled.section`
  background: rgba(0, 0, 0, 0.3);
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
`;
