import React from 'react';
import { Button, Container, Form, FormSection, Input, Section, Title } from './styles';


const SearchForm = props => {
    return (
        <Container >
            <FormSection>
                <Title>Insert names of the City and the Country for checking the weather!</Title>
                <Form onSubmit={props.loadweather}>
                    <Section >
                        <Input type="text" name="city" placeholder="City"></Input>
                    </Section>
                    <Section>
                        <Input type="text" name="country" placeholder="Country"></Input>
                    </Section>
                    <Section >
                        <Button >Get the Weather</Button>
                    </Section>
                </Form>
            </FormSection>
        </Container>
    )
}




export default SearchForm;