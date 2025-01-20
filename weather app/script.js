


const apikey= "99c3df48061950d0ab6187a7e4f8f495";

// const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric";


const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const search_city = document.querySelector(".input input");
const search_button = document.querySelector(".search button");

const weathericon = document.querySelector(".weather_icon");

    // async function checkweather(city) {
    //     const response = await fetch(apiUrl+ city +`&appid=${apikey}`);

    // const data = await response.json();

   

    // document.querySelector(".city").innerHTML=data.name;
    // document.querySelector(".temp").innerHTML=data.main.temp +"°C";

    // document.querySelector(".humidity").innerHTML=data.main.humidity+"%";

    // document.querySelector(".wind").innerHTML=data.wind.speed + "km/h";

    // }


    async function checkweather(city) {
    try {
        const response = await fetch(apiUrl + city + `&appid=${apikey}`);
        if (!response.ok) throw new Error("City not found");
        const data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = data.main.temp + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + "km/h";
    
    
    
    if(data.weather[0].main== "Clouds"){
     weathericon.src=("elements/cloud.webp")
    }
     else if(data.weather[0].main == "Rain"){
        weathericon.src=("elements/rain.webp")  
     }
     else if(data.weather[0].main == "Clear"){
        weathericon.src=("elements/sun-309025_640.webp")  
     }
     else if(data.weather[0].main == "Drizzle"){
        weathericon.src=("elements/rainwithsun.png.")  
     }
     else if(data.weather[0].main == "Mist"){
        weathericon.src=("elements/mist.png")  
    }
    else if (data.weather[0].main == "Snow") {
         weathericon.src=("elements/snow.webp")  

     }
    else if (data.weather[0].main == "Thunderstrom") {
         weathericon.src=("elements/thunder.webp")  

     }
    
     else{
        weathericon.src=("elements/sunny.webp")
     }

        
     document.querySelector(".invalid").style.display = "none";


    } catch (error) {
        document.querySelector(".invalid").style.display = "block"; 
    }
        
    
}


    search_button.addEventListener("click", ()=>{
        checkweather(search_city.value);
    })
