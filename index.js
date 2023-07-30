const searchBox = document.querySelector(".search-box input");
const searchBtn = document.querySelector(".search-box button");
const weatherIcon = document.querySelector(".weather-icon");

const apiKey = "cd4563ce937eeef0d9e1bad7c397e209";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".precipitation").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    const icon = data.weather[0].icon;
    const imgURL = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
    weatherIcon.src = imgURL;
    document.querySelector(".description").innerHTML = data.weather[0].description;
    document.querySelector(".error").style.display = "none";
    document.querySelector(".weather").style.display = "block";

    

}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
