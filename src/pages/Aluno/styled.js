import styled from 'styled-components';
import * as color from '../../config/colors';

export const Title = styled.h1`
  text-align: center;
`;

export const Paragraph = styled.p`
  font-size: 60pt;
`;

export const ProfilePicture = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0 20px;
  position: relative;
  margin-top: 30px;
  img {
    width: 130px;
    height: 130px;
    border-radius: 50%;
  }
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    position: absolute;
    bottom: 5px;
    color: #fff;
    background: ${color.primaryDarkColor};
    width: 26px;
    height: 26px;
    border-radius: 50%;
  }
`;

export const FormContainer = styled.div`
  div {
    display: flex;
    justify-content: center;
    align-items: center;

    form {
      display: flex;
      padding: 15px;
      flex-direction: column;
      div {
        display: flex;
        flex-direction: column;
        margin: 15px;

        label {
          margin: 0 auto;
          font-weight: bold;
          display: grid;
          font-size: 14px;
          color: #383636;
        }
        input {
          padding: 10px 10px 18px 10px;
          outline: none;
          border: none;
          border-bottom: 1px solid rgba(0, 0, 0, 0.4);
          border-top-left-radius: 4px;
          border-top-right-radius: 4px;
          height: 30px;
          transition: all 300ms;
          background: none;
          &::placeholder {
            text-align: center;
            color: rgba(0, 0, 0, 0.5);
          }
          &:focus {
            box-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
          }
        }
      }
      p {
        grid-column-start: 2;
        color: #f70024;
        font-size: 12px;
        text-align: center;
      }
    }
  }
`;
