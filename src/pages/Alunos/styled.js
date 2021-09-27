import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { primaryDarkColor } from '../../config/colors';

const media = {
  width400: '@media(max-width: 400px)',
};
export const AlunoContainer = styled.div`
  font-size: 14px;
  margin-top: 20px;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 10px;
    transition: all 600ms;
    span {
      padding: 0 5px;
    }
    div a {
      padding: 3px;
    }
    ${media.width400} {
      padding: 5px 5px;
      justify-content: center;
      flex-wrap: wrap;
      span::last-child {
        padding: 0 70px;
      }
      a {
        margin: 0 5px;
        display: block;
        flex-wrap: wrap;
      }
    }
    .confirmbtn {
      margin: 0 5px;
    }
  }
  .aluno-div:hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  }
  div + div {
    border-top: 1px solid #eee;
  }
  .transition:hover {
    filter: brightness(80%);
  }
  button {
    font-size: 10px;
    padding: 5px;
    text-align: center;
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
  div {
    position: relative;
    top: 5px;
    background: ${primaryDarkColor};
    border-radius: 4px;
    width: 120px;
    height: 50px;
    display: flex;
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
