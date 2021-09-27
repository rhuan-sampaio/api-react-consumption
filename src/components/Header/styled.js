import styled from 'styled-components';
import { primaryColor, iconColor } from '../../config/colors';

export const Nav = styled.nav`
  background: ${primaryColor};
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    color: ${iconColor};
    margin: 0 10px 0 0;
    font-weight: bold;
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
