import React, { useState } from "react";
import axios from "axios";
import styles from "./styles.css";

export default function SearchEngine() {
    let [city, setCity] = useState(" ");
    let [weather, setWeather] = useState({});
    let [loaded, setLoaded] = useState(false);

    function displayWeather(response) {
        setLoaded(true);
        setWeather({
            temperature: response.data.main.temp,
            wind: response.data.wind.speed,
            humidity: response.data.main.humidity,
            icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
            description: response.data.weather[0].description,
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        let apiKey = "0f8bc384a7c31b717a18cfe38a95ae06";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(displayWeather);
    }

    function updateCity(event) {
        setCity(event.target.value);
    }

    let form = (
        <form onSubmit={handleSubmit}>
            <input
                type="search"
                placeholder="Enter a city.."
                className="search-bar"
                onChange={updateCity}
            />
            <button type="Submit" className="submit">
                Search
            </button>
        </form>
    );

    if (loaded) {
        return (
            <div>
                {form}
                <br />
                Temperature: {Math.round(weather.temperature)}°C
                <br />
                Description: {weather.description}
                <br />
                Humidity: {weather.humidity}%
                <br />
                Wind: {weather.wind}km/h
                <br />
                <img src={weather.icon} alt={weather.description} />
                <br />
            </div>
        );
    } else {
        return form;
    }
}

