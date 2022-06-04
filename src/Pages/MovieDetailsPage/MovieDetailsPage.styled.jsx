import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  display: flex;
`;

export const Image = styled.img`
  display: block;
  width: 300px;
  height: 100%;
  margin-right: 30px;
`;

export const DataWrapper = styled.div``;

export const FilmTitle = styled.h2``;

export const Data = styled.p``;

export const DataTitle = styled.h3``;

export const Options = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 10px;
  color: blue;
  margin-bottom: 20px;
`;

export const OptionLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  :visited {
    color: inherit;
  }
`;

export const Option = styled.li``;
