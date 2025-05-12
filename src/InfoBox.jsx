import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox ({Info}) {
    const INIT_URL = "https://images.unsplash.com/photo-1673191898695-8252d409d82c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const HOT_URL="https://images.unsplash.com/photo-1419833173245-f59e1b93f9ee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VubnklMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    const COLD_URL="https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL="https://images.unsplash.com/photo-1610741083757-1ae88e1a17f7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFpbnklMjBzZWFzb258ZW58MHx8MHx8fDA%3D";
    
    return( 
        <div className="InfoBox">
    <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={Info.humidity > 80 ? RAIN_URL : Info.temp > 15 ? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {Info.city}{" "}
          {Info.humidity > 80 ? <ThunderstormIcon/> : Info.temp > 15 ? <WbSunnyIcon/> : <AcUnitIcon/>}

        </Typography>
        <Typography variant="body2" color= "text.secondary" component={"span"}>
         <div> Temperature = {Info.temp}&deg;C </div>
         <div> Humidity = {Info.humidity}</div>
         <div> Min Temp = {Info.tempMin}</div>
         <div> Max Temp = {Info.tempMax}</div>
         <div>The weather can be described as<i> {Info.weather}</i> and feels like {Info.feelslike}&deg;C</div>
        </Typography>
      </CardContent>  
     </Card>
    </div>
        </div>
    )
}