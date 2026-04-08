import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";

export default function InfoBox({ info }) {

  const INIT_URL =
    "https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?w=600&auto=format&fit=crop&q=60";
  const HOT_URL="https://images.unsplash.com/photo-1610557013547-dc7a52d44709?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const COLD_URL="https://images.unsplash.com/photo-1477468572316-36979010099d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q09MRHxlbnwwfHwwfHx8MA%3D%3D";
  const RAINY_URL="https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UkFJTll8ZW58MHx8MHx8fDA%3D";
  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          
          <CardMedia
            sx={{ height: 140 }}
            image={info.humidity>80?RAINY_URL:info.temp>15?HOT_URL:COLD_URL}
            title="weather image"
          />

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
            </Typography>

            <Typography variant="body2" sx={{ color: "text.secondary" }} component="div">
              <p>Temperature: {info.temp}&deg;C</p>
              <p>Humidity: {info.humidity}</p>
              <p>Min Temp: {info.tempMin}&deg;C</p>
              <p>Max Temp: {info.tempMax}&deg;C</p>
              <p>
                The Weather can be described as <i>{info.weather}</i> and feels like{" "}
                {info.feelslike}&deg;C
              </p>
            </Typography>

          </CardContent>
        </Card>
      </div>
    </div>
  );
}