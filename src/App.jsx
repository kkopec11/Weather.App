import React, { useState } from 'react';

import 'weather-icons/css/weather-icons.css';

import MainContent from './components/MainContent/MainContent';
import SearchForm from './components/SearchForm/SearchForm';
import { Container } from './styles';

const API_key = "29ec9a13086077b075b204981e1ae5d4";

const App = () => {

  const [value, SetValue] = useState({
    city: undefined,
    country: undefined,
    icon: undefined,
    main: undefined,
    celsius: undefined,
    temp_max: undefined,
    temp_min: undefined,
    description: "",
    error: false
  });

  const weatherIcon = {
    Thunderstorm: "wi-thunderstorm",
    Drizzle: "wi-sleet",
    Rain: "wi-storm-showers",
    Snow: "wi-snow",
    Atmosphere: "wi-fog",
    Clear: "wi-day-sunny",
    Clouds: "wi-day-fog"
  };


  const calCelsius = (temp) => {
    let cell = Math.floor(temp - 273.15);
    return cell;
  };

  const get_WeatherIcon = (rangeId) => {
    switch (true) {
      case rangeId >= 200 && rangeId <= 232:
        return weatherIcon.Thunderstorm
      case rangeId >= 300 && rangeId <= 321:
        return weatherIcon.Drizzle
      case rangeId >= 500 && rangeId <= 531:
        return weatherIcon.Rain
      case rangeId >= 600 && rangeId <= 622:
        return weatherIcon.Snow
      case rangeId >= 701 && rangeId <= 781:
        return weatherIcon.Atmosphere
      case rangeId === 800:
        return weatherIcon.Clear
      case rangeId >= 801 && rangeId <= 804:
        return weatherIcon.Clouds;
      default:
        return weatherIcon.Clouds
    }
  }

  const getWeather = async (e) => {

    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.city.value;


    try {
      if (city && country) {
        const api_call = await fetch(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${city},${country}$&APPID=${API_key}`);

        const response = await api_call.json();

        SetValue({
          city: `${response.name}, ${response.sys.country}`,
          celsius: calCelsius(response.main.temp),
          temp_max: calCelsius(response.main.temp_max),
          temp_min: calCelsius(response.main.temp_min),
          description: response.weather[0].description,
          icon: get_WeatherIcon(response.weather[0].id),
          error: false
        })

      } else {
        SetValue({
          error: true
        })
      }
    } catch (error) {
      SetValue({
        error: true
      })
    }
  };

  return (
    <Container align-items="center">
      <SearchForm loadweather={getWeather} />
      <MainContent
        city={value.city}
        temp_celsius={value.celsius}
        temp_max={value.temp_max}
        temp_min={value.temp_min}
        description={value.description}
        weatherIcon={value.icon}
        error={value.error}
      />
    </Container>
  );
}

export default App;
