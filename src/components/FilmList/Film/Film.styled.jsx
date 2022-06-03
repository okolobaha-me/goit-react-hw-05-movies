import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  padding: 10px;
  line-height: 1;
  text-decoration: none;
  display: inline-block;
  width: 100%;
  color: inherit;

  :visited {
    color: inherit;
  }
`;

export const Item = styled.li`
  padding: 0;
  border-radius: 18px;

  :nth-child(2n) {
    background-color: #cdceff;
  }

  :nth-child(2n + 1) {
    background-color: #bcbdff;
  }
`;
