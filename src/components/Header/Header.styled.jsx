import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding-top: 10px;
`;

export const Head = styled.header`
  margin-bottom: 10px;
`;

export const Link = styled(NavLink)`
  margin-right: 10px;
  text-decoration: none;

  :visited {
    color: inherit;
  }

  &.active {
    color: blue;
  }
`;
