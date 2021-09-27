import styled from 'styled-components';

const media = {
  width600: '@media(max-width: 600px)',
};
export const Container = styled.div`
  p {
    margin: 20px;
  }
  font-size: 16px;
  max-width: 75%;
  background: #fff;
  border-radius: 15px;
  padding: 15px 10px;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      margin: 5px 10px;
    }
  }
  h1 {
    text-align: center;
    font-size: 36px;
    margin: 10px 0;
  }
  form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 400px;
    margin: 0 auto;
    ${media.width600} {
      grid-template-columns: 1fr;
    }
  }
  label {
    margin: 10px;
    font-size: 16px;
    font-weight: bold;
  }
  input {
    margin: 10px;
    text-align: center;
    padding: 5px 0;
    border: none;
    background: #eee;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  button {
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    background: #111;
    color: white;
    margin: 10px auto;
    cursor: pointer;
    &:hover {
      filter: brightness(80%);
    }
  }
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
`;

export const Unfocus = styled.section`
  background: rgba(0, 0, 0, 0.5);
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
