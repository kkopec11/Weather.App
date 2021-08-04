import styled from 'styled-components';

export const Section = styled.div`
grid-area: 2 / 2 / 3 / 3;
width: 100%;
height: 100%;
color: white;
align-content: center;
flex-direction: column;

@media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 2 / 2 / 3 / 3;
  }

`;

export const Div = styled.div`
display: grid;
justify-content: center;
text-align: center;
font-size: 1.3rem;

@media ${(props) => props.theme.breakpoints.sm} {
  font-size: 1rem;

  }
`;