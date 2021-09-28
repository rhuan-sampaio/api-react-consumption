import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 30px;
  div {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: 20;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  span {
    z-index: 20;
  }
  .animation {
    z-index: 20;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    overflow: hidden;
  }
`;
