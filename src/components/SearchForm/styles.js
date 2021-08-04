import styled from 'styled-components';

export const Container = styled.div`
margin-top: 4rem;
grid-area: 1 / 2 / 2 / 3;

@media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 2rem;
    grid-area: 1 / 2 / 2 / 2;

  }
`;

export const FormSection = styled.div`
/* display: grid;
grid-template-rows: 2fr 1fr 1fr; */

justify-content: center;
width: 100%;
height: 100%;
@media ${(props) => props.theme.breakpoints.sm} {

  }
`;

export const Form = styled.form`
display: flex;
justify-content: center;
flex-direction: row;
align-items: center;

@media ${(props) => props.theme.breakpoints.sm} {
  flex-direction: column;

}
`;

export const Title = styled.h1`
font-weight: 800;
font-size: 2.8rem;
line-height:56px;
background: linear-gradient(121.57deg, #fd1d1d   , #fcb045);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;

@media ${(props) => props.theme.breakpoints.sm} {
  max-width: 50rem;
  font-size: 5rem;
  line-height:106px;
  margin-left: 2rem;
}

@media ${(props) => props.theme.breakpoints.md} {
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;
 width: 70rem;
}

`;

export const Section = styled.div`
margin: 1rem;

@media ${(props) => props.theme.breakpoints.sm} {
  margin: 3rem;
}
`;

export const Input = styled.input`
font-size: 1rem; 
padding: 0.5rem 0.7rem;
border: 3px solid ;
border-radius: 3px;
width: 22rem;
height: 1.5rem;
box-shadow: 3px 3px 20px #ff2e00;
transition: .3s ease;

&:hover {
    box-shadow: 3px 3px 20px #00ff10;
    cursor: pointer;
}

@media ${(props) => props.theme.breakpoints.sm} {
  width: 40rem;
  height: 4rem;
  font-size: 3rem; 
  padding: 0.5rem 0.7rem;

}
`;

export const Button = styled.button`
font-size: 1.1rem;
font-weight: 550;
padding: 0.5rem 0.7rem;
border: 3px solid ;
border-radius: 3px;
width: 22rem;
height: 2.8rem;
background: linear-gradient(121.57deg, #fd1d1d   , #fcb045);
box-shadow: 3px 3px 20px #ff2e00;
transition: .3s ease;

&:hover {
    color: rgba(255, 255, 255, 0.75);
    box-shadow: 3px 3px 20px rgba(255, 255, 255, 0.75);
    opacity: 1;
    cursor: pointer;
}

@media ${(props) => props.theme.breakpoints.sm} {
  width: 41rem;
  height: 6rem;
  font-size: 3rem; 
  padding: 0.5rem 0.7rem;

}
`;