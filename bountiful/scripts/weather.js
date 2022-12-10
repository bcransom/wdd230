const currentTemp = document.querySelector('#temperature');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const condition = document.querySelector('#condition-description');
const humidity = document.querySelector('#humidity');


const url = 'https://api.openweathermap.org/data/2.5/weather?lat=33.15&lon=-117.35&appid=8aa00bcb7d9ef8664ead98d54b36ceda&units=imperial'


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
    condition.innerHTML = `<strong>${weatherData.weather[0].description}</strong>`;
    humidity.innerHTML = `<strong>${weatherData.main.humidity}</strong>`;

}

  apiFetch();


