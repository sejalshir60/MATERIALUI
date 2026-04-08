import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "1cdebd083e92655f4783ff08676f574f";

  const [city, setCity] = useState("");
  const [error, setError] = useState(false);   // ⭐ error state

  // fetch weather
  const getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );

      let jsonResponse = await response.json();

      // ✅ check invalid city
      if (jsonResponse.cod !== 200) {
        throw new Error("City not found");
      }

      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelslike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };

      return result;

    } catch (err) {
      setError(true);
      return null;
    }
  };

  const handleChange = (evt) => {
    setCity(evt.target.value);
    setError(false); // remove error while typing
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    let newInfo = await getWeatherInfo();

    if (newInfo) {
      updateInfo(newInfo);
      setCity("");
      setError(false);
    }
  };

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />

        <br />

        <Button variant="contained" type="submit">
          Search
        </Button>

        {/* ⭐ Error Message */}
        {error && (
          <p style={{ color: "red", marginTop: "10px" }}>
            City is not in our API
          </p>
        )}
      </form>
    </div>
  );
}