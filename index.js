import apiKey from "./apikey.js";



const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weathericon = document.querySelector(".wicon")

async function checkWeather(city){
    const res = await fetch(apiUrl + city + `&appid=${apiKey}`);
   
    if(res.status==404){
        document.querySelector(".error").style.display ="block";
        document.querySelector(".weather").style.display ="none";
    }else{
        var data = await res.json() 

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".city").innerHTML = data.wind.speed + "km/hr";


    if(data.weather[0].main == "Clouds"){
       weathericon.src = "clouds.png"
    }
    else if(data.weather[0].main == "Clear"){
        weathericon.src = "clear.png"
    }
    else if(data.weather[0].main == "Rain"){
        weathericon.src = "rain.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        weathericon.src = "Drizzle.png"
    }
    else if(data.weather[0].main == "Mist"){
        weathericon.src = "Mist.png"
    }

    document.querySelector(".weather").style.display= "block";
    document.querySelector(".error").style.display ="none";

    }


}



searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);  //takes sbox value n executes cheWethr()
})
