const forecast1 = document.querySelector('#forecast1');
const forecast2 = document.querySelector('#forecast2');
const forecast3 = document.querySelector('#forecast3');


const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=33.15&lon=-117.35&appid=8aa00bcb7d9ef8664ead98d54b36ceda&units=imperial'

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
    const d = new Date(weatherData.weather[1].dt_text)
    let day = d.getDay();

    forecast1.innerHTML = `<strong>${day} ${weatherData[1].main.temp.toFixed(2)}</strong>`;



  }


  apiFetch();