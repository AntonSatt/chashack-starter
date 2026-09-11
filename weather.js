const link = 'https://api.open-meteo.com/v1/forecast?latitude=59.3293&longitude=18.0686&current=temperature_2m,wind_speed_10m,relative_humidity_2m';
const temp = document.querySelector('.temp');
const wind = document.querySelector('.wind');
const humid = document.querySelector('.humid');

console.log(temp.textContent, wind, humid)

fetch(link)
    .then(response => response.json())
    .then(data => {
        const units = data.current_units
        const currentTemp = ` ${data.current.temperature_2m} ${units.temperature_2m}`;
        const currentWind = ` ${data.current.wind_speed_10m} ${units.wind_speed_10m}`;
        const currentHumid = ` ${data.current.relative_humidity_2m} ${units.relative_humidity_2m}`;

        temp.textContent += currentTemp;
        wind.textContent += currentWind;
        humid.textContent += currentWind;
    });