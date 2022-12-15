const forecast = document.querySelector('#forecast');
// const forecastDay2 = document.querySelector('#forecast2');
// const forecastDay3 = document.querySelector('#forecast3');


const url = 'https://api.openweathermap.org/data/2.5/weather?lat=33.15&lon=-117.35&appid=6fb4d249dd7e2566d64282138222e545&units=imperial'

async function apiFetchForecast() {
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

  function displayResults(forecastData) {
    // const forecastDate = forecastData[list].dt;
    // const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    // const today = new Date();
    // let day1 = weekday.getDay(forecastDate) + 1;
    // let day2 = today.getDay() + 2;
    // let day3 = today.getDay() + 3;
    // day1.setDate(day1.getDate() + 1);
    // day2.setDate(day2.getDate() + 2);
    // day3.setDate(day3.getDate() + 3);
    
    // forecastData.innerHTML = `<strong>${day1.setDate(day1.getDate() + 1)} ${weatherData[1].main.temp.toFixed(2)}</strong>`;
    // forecastDay2.innerHTML = `<strong>${day2.setDate(day2.getDate() + 2)} ${weatherData[2].main.temp.toFixed(2)}</strong>`; 
    // forecastDay3.innerHTML = `<strong>${day3.setDate(day3.getDate() + 3)} ${weatherData[3].main.temp.toFixed(2)}</strong>`;
    // forecastData.innerHTML = `<strong>${weatherData[1].main.temp.toFixed(2)}</strong>`;

    // forecast.innerHTML = `<strong>${day1}: ${forecastData.list[1].main.temp.toFixed(2)}</strong><br>
    // <strong>${day2}: ${forecastData.list[2].main.temp.toFixed(2)}</strong><br>
    // <strong>${day3}: ${forecastData.list[3].main.temp.toFixed(2)}</strong>`;

    forecast.innerHTML = `<strong>1 Day Forecast: ${forecastData.list[1].main.temp.toFixed(2)}</strong><br>
    <strong>2 Day Forecast: ${forecastData.list[2].main.temp.toFixed(2)}</strong><br>
    <strong>3 Day Forecast: ${forecastData.list[3].main.temp.toFixed(2)}</strong>`;

  }


  apiFetchForecast();