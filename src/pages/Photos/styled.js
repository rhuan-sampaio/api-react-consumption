import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Title = styled.h1`
  text-align: center;
`;

export const Form = styled.form`
  label {
    width: 180px;
    height: 180px;
    border: 5px dashed ${colors.primaryColor};
    border-radius: 50%;
    display: flex;
    margin: 30px auto;
    background-color: #eee;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    img {
      width: 180px;
      height: 180px;
    }
  }
  input {
    display: none;
  }
`;
