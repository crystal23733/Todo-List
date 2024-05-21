import { weatherKEY } from "./DB/API/weatherKEY.js";
import { weather } from "./modules/selector.js";
import { tempsIcon, weatherIcon } from "./modules/KEY.js";

const locationSuccess = (position) => {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  // *한국어로 받기
  const lang = 'kr';
  // *온도 섭씨로 받기
  const units = 'metric';
  console.log(lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherKEY}&lang=${lang}&units=${units}`;
  console.log(url);
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.send();
  xhr.onload = () => {
    if(xhr.status === 200){
      const APIweather = JSON.parse(xhr.response);
      switch(APIweather.weather[0].main){
        case 'Clouds' :
          weatherIcon.clouds.forEach((icon) => {weather.weathers.classList.add(icon)});
          break;
        case 'Snow' :
          weatherIcon.snow.forEach((icon) => {weather.weathers.classList.add(icon)});
          break;
        case 'Rain' : 
          weatherIcon.rain.forEach((icon) => {weather.weathers.classList.add(icon)});
        case 'Clear' :
          weatherIcon.clear.forEach((icon) => {weather.weathers.classList.add(icon)});
      }
      tempsIcon.forEach((icon) => {weather.tempIcon.classList.add(icon)});
      weather.tempText.innerText = `${APIweather.main.temp}도`;
      weather.locations.innerText = APIweather.name;
    } else {
      console.error('Error', xhr.status, xhr.statusText);
    }
  }
}

const locationError = () => {
  console.log("죄송합니다. 위치 정보를 사용할 수 없습니다.");
}

navigator.geolocation.getCurrentPosition(locationSuccess, locationError);