import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcons(props) {
  const codeMapping = {
    "clear-sky-day": "CLEAR_DAY",
    "clear-sky-night": "CLEAR_NIGHT",
    "few-clouds-night": "PARTLY_CLOUDY_NIGHT",
    "few-clouds-day": "PARTLY_CLOUDY_DAY",
    "snow-day": "SNOW",
    "snow-night": "SNOW",
    "broken-clouds-day": "CLOUDY",
    "broken-clouds-night": "CLOUDY",
    "scattered-clouds-day": "CLOUDY",
    "scattered-clouds-night": "CLOUDY",
    "shower-rain-day": "RAIN",
    "shower-rain-night": "RAIN",
    "rain-day": "RAIN",
    "rain-night": "RAIN",
    "mist-day": "FOG",
    "mist-night": "FOG",
    "thunderstorm-day": "WIND",
    "thunderstorm-night": "WIND",
  };

  return (
    <ReactAnimatedWeather
      icon={codeMapping[props.source]}
      color="#1e1e1e"
      size={props.size}
      animate={true}
    />
  );
}
