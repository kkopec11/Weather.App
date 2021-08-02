import React from "react";
import { Section, Div } from "./styles";


const MainContent = (props) => {
    return (
        <Section >
            <Div>
                {props.error && (<div> Please Enter City and Country </div>)}
                <h1>
                    {props.city}
                </h1>
                <h1 >
                    <i className={`wi ${props.weatherIcon} display-1`}></i>
                </h1>
                {props.temp_celsius ? (<h1 >{props.temp_celsius}&deg;</h1>) : null}
                {minmaxTemp(props.temp_min, props.temp_max)}
                <h2>{props.description}</h2>
            </Div>
        </Section>
    );
};

function minmaxTemp(min, max) {
    if (min && max) {
        return (
            <h3 >
                <span >min {min}&deg; </span>
                <span >max {max}&deg;</span>
            </h3>
        );
    }

}

export default MainContent;