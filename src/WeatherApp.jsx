import SearchBox from "./searchbox";
import InfoBox from "./Infobox";
import { useState } from "react";

export default function WeatherApp() {
    const[ weatherInfo, setWeatherInfo] = useState({
            city: "Mumbai",
            feelslike: 24.84,
            temp: 25.05,
            tempMin: 25.05,
            tempMax: 25,
            humidity:47,
            weather: "haze"
    });

    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    }

    return(<div style={{textAlign: "center"}}>
        <h2>Weather App</h2>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox Info={weatherInfo} />
    </div>)
}
