console.log("api started");
const API_key = "ddef4b51e5e4a9d7e8d18130ed2a9be4";

// get temp using city name
async function myweather() {

    try {
        let city_name = "indore";
        // let city_name = "ratlam";
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_key}&units=metric`);
        // const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=ratlam&appid=ddef4b51e5e4a9d7e8d18130ed2a9be4`);
        const data = await response.json();
    
        // to display on console
        console.log("weather data :-" , data);
    
        // to show on web page
        let newPara = document.createElement('p');
        newPara.textContent = `${data?.main?.temp.toFixed(2)} ^C`
        document.body.appendChild(newPara);
    } catch (error) {
        console.log("error occured", error);
    }
  
}
console.log("api call ended");

// get my location using latitude and longitude
// best practice
async function fetchweather() {
try {
 
    // let lon = 17.6333;
    // let lat =  18.3333;
    let lat = 22.7179;
    let lon =  75.8333;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`);
    const data = await response.json();
    showWeather(data);
} catch (error) {
    console.log("error occured", error);
}
}

// to display 
function showWeather(data){
    console.log("weather data :-" , data);
    let newPara = document.createElement('p');
    newPara.textContent = `${data?.name} city`
    document.body.appendChild(newPara);
}

// get my location
function getMyLocation(){
    if(navigator.geolocation){// check if it supports geolocation
        navigator.geolocation.getCurrentPosition(showPosition);
    }else{
        console.log("no geological support");
    }
}

function showPosition(position){
let lat = position.coords.latitude;
let lon = position.coords.longitude;
locationName(lon, lat);
console.log(lat);
console.log(lon);
}

async function locationName(lon, lat){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`);
    const data = await response.json();
        showMyWeather(data);
}

function showMyWeather(data){
    console.log("weather data :-" , data);
    let newPara = document.createElement('p');
    newPara.textContent = `${data?.name} is my city`
    document.body.appendChild(newPara);
}