import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function Weather() {

  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelslike: 24.84,
    temp: 25.5,
    tempMin: 25.05,
    tempMax: 25.05,
    humidity: 47,
    weather: "haze",
  });

  // receives data from SearchBox
  const updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div className="Weather">
      <h2>Weather App</h2>

      <SearchBox updateInfo={updateInfo} />

      <InfoBox info={weatherInfo} />
    </div>
  );
}