import styled from 'styled-components';
import * as color from '../../config/colors';

export const Title = styled.h1`
  text-align: center;
`;

export const Paragraph = styled.p`
  font-size: 60pt;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
  input {
    height: 40px;
    font-size: 18px;
    border: 1px solid #ddd;
    padding: 0 10px;
    border-radius: 4px;
    margin-top: 5px;
    &:focus {
      box-shadow: 0 0 3px ${color.primaryColor};
    }
  }
  p {
    color: red;
    font-size: 12px;
    margin-top: 2px;
  }
  button {
    margin-top: 20px;
  }
`;

export const ProfilePicture = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0 20px;
  position: relative;
  margin-top: 30px;
  img {
    width: 180px;
    height: 180px;
    border-radius: 50%;
  }
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    position: absolute;
    bottom: 0;
    color: #fff;
    background: ${color.primaryDarkColor};
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
`;
