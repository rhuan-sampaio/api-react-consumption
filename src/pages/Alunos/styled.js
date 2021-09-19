import styled from 'styled-components';

export const AlunoContainer = styled.div`
  font-size: 16px;
  margin-top: 20px;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 10px;
    transition: all 600ms;
    &:hover {
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
    }
  }
  div + div {
    border-top: 1px solid #eee;
  }
`;

export const ProfilePicture = styled.div`
  img {
    z-index: 10;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    &:hover {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
  }
`;
