import styled from 'styled-components';

export const FeedbackList = styled.ul`
  width: 200px;
  display: flex;
  justify-content: space-evenly;
  margin-top: 20px;
`;

export const FeedbackButton = styled.button`
  background-color: blue;
  border: 1px solid blue;
  border-radius: 4px;
  width: 60px;
  height: 20px;
  color: black;
  transition: color 1s, background-color 0.5s;

  :hover {
    background-color: blue;
    color: white;
  }
`;
