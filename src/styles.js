import styled from 'styled-components';

export const Container = styled.div`
display: grid;
grid-template-columns: 10rem 1fr 10rem;
grid-template-rows: 20rem 1fr;

@media ${(props) => props.theme.breakpoints.sm} {
  padding-left: 0.8rem;
  display: grid;
  grid-template-columns:  1fr ;
  grid-template-rows: 30rem 1fr;    
  flex-direction: column;
  width: 100%;
  }
`;
