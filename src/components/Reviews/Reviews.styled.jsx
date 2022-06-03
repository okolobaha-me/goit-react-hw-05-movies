import styled from 'styled-components';

export const ReviewList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Review = styled.li`
  :not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const Name = styled.h3`
  margin-bottom: 10px;
`;

export const Text = styled.p``;
