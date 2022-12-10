const forecast = document.querySelector('#forecast');
// const forecastDay2 = document.querySelector('#forecast2');
// const forecastDay3 = document.querySelector('#forecast3');


const urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?lat=33.15&lon=-117.35&appid=8aa00bcb7d9ef8664ead98d54b36ceda&units=imperial'

async function apiFetchForecast() {
    try {
      const response = await fetch(urlForecast);
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

  function displayResults(forecastData) {
    // const today = new Date();
    // const day1 = new Date(today);
    // const day2 = new Date(today);
    // const day3 = new Date(today);
    // day1.setDate(day1.getDate() + 1);
    // day2.setDate(day2.getDate() + 2);
    // day3.setDate(day3.getDate() + 3);

    // forecastData.innerHTML = `<strong>${day1.setDate(day1.getDate() + 1)} ${weatherData[1].main.temp.toFixed(2)}</strong>`;
    // forecastDay2.innerHTML = `<strong>${day2.setDate(day2.getDate() + 2)} ${weatherData[2].main.temp.toFixed(2)}</strong>`; 
    // forecastDay3.innerHTML = `<strong>${day3.setDate(day3.getDate() + 3)} ${weatherData[3].main.temp.toFixed(2)}</strong>`;
    // forecastData.innerHTML = `<strong>${weatherData[1].main.temp.toFixed(2)}</strong>`;

    forecast.innerHTML = `<strong>${forecastData[1].main.temp.toFixed(2)}</strong>`;

  }


  apiFetchForecast();