const currentTemp = document.querySelector('#temperature');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const windSpeed = document.querySelector('#wind-speed');


const url = 'https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&appid=8aa00bcb7d9ef8664ead98d54b36ceda&units=imperial'

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }

  function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(2)}</strong>`;
    windSpeed.innerHTML = `<strong>${weatherData.wind.speed}</strong>`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;

}

  apiFetch();


function windOutput(){
    let message = "";
    const temperature = document.querySelector('#temperature').textContent;
    const windSpeed = document.querySelector('#wind-speed').textContent;
    const windChill = 35.74 + .6215 * temperature - 35.75 * windSpeed ** .16 + .4275 * temperature * windSpeed ** .16;
    if (temperature <= 50 && windSpeed > 3.0) {
        message = `${windChill.toFixed(2)}`;
    } else {
        message = "N/A";
    }
    document.querySelector('#wind-chill').innerHTML = message;
}
windOutput();