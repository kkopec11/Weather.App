import styled from 'styled-components';

export const Container = styled.div`
display: grid;
grid-template-columns: 10rem 1fr 10rem;
grid-template-rows: 20rem 1fr;

@media ${(props) => props.theme.breakpoints.sm} {
  display: grid;
  grid-template-columns:  1fr ;
  grid-template-rows: 70rem 1fr;    
  flex-direction: column;
  width: 100%;
  }
`;
