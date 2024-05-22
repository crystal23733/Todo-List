import { weatherKEY } from "./DB/API/weatherKEY.js";
import { weather } from "./modules/selector.js";
import { tempsIcon, weatherIcon } from "./modules/KEY.js";

const locationSuccess = (position) => {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const lang = 'kr';
  const units = 'metric';
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherKEY}&lang=${lang}&units=${units}`;
  fetch(url).then(Response => Response.json())
  .then((APIweather) => {
    console.log(APIweather);
    switch(APIweather.weather[0].main){
      case 'Clouds' :
        weatherIcon.clouds.forEach((icon) => {weather.weathers.classList.add(icon)});
        break;
      case 'Snow' :
        weatherIcon.snow.forEach((icon) => {weather.weathers.classList.add(icon)});
        break;
      case 'Rain' : 
        weatherIcon.rain.forEach((icon) => {weather.weathers.classList.add(icon)});
        break;
      case 'Clear' :
        weatherIcon.clear.forEach((icon) => {weather.weathers.classList.add(icon)});
        break;
    }
    tempsIcon.forEach((icon) => {weather.tempIcon.classList.add(icon)});
    weather.tempText.innerText = `${APIweather.main.temp}도`;
    weather.locations.innerText = APIweather.name;
  });
}

const locationError = () => {
  console.log("죄송합니다. 위치 정보를 사용할 수 없습니다.");
}

navigator.geolocation.getCurrentPosition(locationSuccess, locationError);