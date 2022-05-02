const API_KEY = "8d3c5bd2ba83b81d7c983cd8b81b8219";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const log = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response
        .json()).then(data => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.textContent = data.name;
            weather.textContent = `${data.weather[0].main} / ${data.main.temp}`;
            if(data.weather[0].main === "Clouds"){
                weather.classList.add("fas","fa-cloud");
            }else if(data.weather[0].main === "Rain"){
                weather.classList.add("fas","fa-cloud-rain");
            }else if(data.weather[0].main === "Clear"){
                weather.classList.add("fas","fa-sun");
            }
    });
}
function onGeoError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);