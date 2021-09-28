import styled from 'styled-components';
import { iconColor } from '../../config/colors';

const media = {
  width400: '@media(max-width: 400px)',
};
export const Nav = styled.nav`
  background: linear-gradient(-45deg, #f0f2f2, #ebf5f5);
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 5px;
    color: ${iconColor};
    margin: 0 10px 0 0;
    font-weight: bold;
    font-size: 14px;
    span {
      padding: 0 3px;
      ${media.width400} {
        display: none;
      }
    }
    &:hover {
      filter: brightness(150%);
    }
  }
  .online:hover {
    filter: brightness(200%);
  }
`;
