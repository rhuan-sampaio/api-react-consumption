import styled from 'styled-components';
import { iconColor } from '../../config/colors';

export const Nav = styled.nav`
  background: #fff;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);

  a {
    color: ${iconColor};
    margin: 0 10px 0 0;
    font-weight: bold;
    &:hover {
      filter: brightness(150%);
    }
  }
  .online {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #66ff33;
    cursor: default;
    transition: all 300ms;
  }
  .online:hover {
    filter: brightness(200%);
  }
`;
