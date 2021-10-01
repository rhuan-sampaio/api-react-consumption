import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { primaryDarkColor } from '../../config/colors';

const media = {
  width1100: '@media(max-width: 1100px)',
};
export const AlunoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  div + div {
    border-top: 1px solid rgba(225, 225, 225, 0.8);
  }

  div {
    display: grid;
    grid-template-columns: 56px minmax(80px, 1fr) minmax(200px, 1fr) 120px;
    align-items: center;
    padding: 10px;
    border-radius: 4px;
    transition: all 300ms ease-in-out;

    ${media.width1100} {
      grid-template-columns: 56px max(80px);
      span {
        padding: 10px;
      }
      .email {
        grid-auto-flow: dense;
        grid-column-start: 1;
        grid-column-end: 3;
        @media (max-width: 650px) {
          display: none;
        }
      }
      button {
        margin: auto;
        grid-column-start: 1;
        grid-column-end: 3;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
      }
    }
    button {
      font-size: 12px;
      width: 110px;
      height: 30px;
    }
  }
  .aluno-div:hover {
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
  }
`;

export const ProfilePicture = styled.div`
  img {
    position: relative;
    left: 0;
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
`;

export const NewAluno = styled(Link)`
  button {
    background: ${primaryDarkColor};
    border-radius: 4px;
    width: 90%;
    height: 45px;
    display: flex;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    transition: all 300ms ease-in-out;
    &:hover {
      filter: brightness(80%);
    }
  }
  color: white;
  display: block;
  padding: 10px 0 10px 0;
`;
