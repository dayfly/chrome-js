const weather = document.querySelector(".js-weather");
const API_KEY = "0c578d2a9ce95070461470b26b773c98";
const COOSRDS = 'coords';

function getWeather(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    .then(function(response){
       return response.json();
    })
    .then(function(json) {
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} / ${place}`;
    });
}

function saveObj(coordsObj) {
    localStorage.setItem(COOSRDS, JSON.stringify(coordsObj));
}


function handleGeoSuccession(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = { 
        latitude: latitude,
        longitude: longitude
    };
    saveObj(coordsObj);
    getWeather(latitude,longitude);
}

function handleGeoError() { 
    console.log('Cant access geo location');
}

function askForcoords() { 
    navigator.geolocation.getCurrentPosition(handleGeoSuccession, handleGeoError);
}

function lodeCoords() { 
    const lodeCoords = localStorage.getItem(COOSRDS);
    if(lodeCoords === null) { 
        askForcoords();
    }else { 
        //getWeather
        const parseCoords = JSON.parse(lodeCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init() {
    lodeCoords();
}

init ()