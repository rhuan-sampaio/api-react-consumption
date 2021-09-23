import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AlunoContainer = styled.div`
  font-size: 16px;
  margin-top: 20px;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 10px;
    transition: all 600ms;
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
`;

export const ProfilePicture = styled.div`
  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
`;

export const NewAluno = styled(Link)`
  display: block;
  padding: 20px 0 10px 0;
`;
