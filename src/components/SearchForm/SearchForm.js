import React from 'react';
import { Button, Container, Form, FormSection, Input, Section } from './styles';


const SearchForm = props => {
    return (
        <Container >
            <div>
                <Form onSubmit={props.loadweather}>
                    <h1>Insert the name of the City and the Country for checking the weather!</h1>
                    <Section >
                        <Input type="text" name="city" placeholder="City"></Input>
                    </Section>
                    <Section>
                        <Input type="text" name="country" placeholder="Country"></Input>
                    </Section>
                    <Section >
                        <Button >Get Weather</Button>
                    </Section>
                </Form>
            </div>
        </Container>
    )
}




export default SearchForm;