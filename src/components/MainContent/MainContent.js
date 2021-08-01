import React from "react";
import { Section } from "./styles";


const MainContent = (props) => {
    return (
        <Section >
            <div  >
                <div>{props.error ? error() : null}</div>
                <h1>
                    {props.city}
                </h1>
                <h5 >
                    <i className={`wi ${props.weatherIcon} display-1`}></i>
                </h5>

                {props.temp_celsius ? (<h1 >{props.temp_celsius}&deg;</h1>) : null}

                {/** show max and min temp */}
                {minmaxTemp(props.temp_min, props.temp_max)}

                <h4 className="py-3">{props.description}</h4>
            </div>
        </Section>
    );
};

function minmaxTemp(min, max) {
    if (min && max) {
        return (
            <h3>
                <span >{min}&deg;</span>
                <span >{max}&deg;</span>

            </h3>
        );
    }

}

function error() {
    return (
        <div >
            Please Enter City and Country
        </div>
    )
}

export default MainContent;