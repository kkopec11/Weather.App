import axios from "axios";

const CORS_URL = "https://cors-anywhere.herokuapp.com/";
const API_URL = "http://api.openweathermap.org/data/2.5/weather?";
const API_KEY = "29ec9a13086077b075b204981e1ae5d4";

const getValuesFromApi = (city, country) => {
    return axios.get(CORS_URL + API_URL + "q=" + city + "," + country + "$&APPID=" + API_KEY);
};

export default {
    getValuesFromApi,
};
