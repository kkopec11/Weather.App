import styled from 'styled-components';

export const Container = styled.div`
margin-top: 4rem;
grid-area: 1 / 2 / 2 / 3;
`;

export const FormSection = styled.div`
display: grid;
grid-template-rows: 2fr 1fr 1fr;
width: 100%;
height: 100%;
`;

export const Form = styled.form`
display: flex;
justify-content: center;
flex-direction: row;
align-items: center;
`;

export const Title = styled.h1`
font-weight: 800;
font-size: 2.5rem;
line-height:56px;
width: max-content;
max-width: 100%;
background: linear-gradient(121.57deg, #fd1d1d   , #fcb045);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`;

export const Section = styled.div`
margin: 1rem;
`;

export const Input = styled.input`
font-size: 1rem; 
padding: 0.5rem 0.7rem;
border: 3px solid ;
border-radius: 3px;
width: 22rem;
height: 1.5rem;
box-shadow: 3px 3px 20px #ff2e00;
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
    opacity: 1;
    cursor: pointer;
}
`;