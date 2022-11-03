//get the two input values of temperature and wind-speed,
//check to make sure they meet the specification limits  
//(<=50°F and >3.0mph) allowed to officially calculate the wind chill, and
//either calculate and display the wind chill factor value or 
//display "N/A" (not applicable) if the input values did not 
//meet the requirements.

//f = 35.74 + .6215t - 35.75s(0.16power) + 0.4275ts(.16)
//f = wind chill factor in farenheit 
//t = air average temperature in farenheit
//s = wind speed in miles per hour
//--------------------

// const temperature = document.querySelector('#temperature').textContent;
// const windSpeed = document.querySelector('#wind-speed').textContent;
// const windOutput = document.querySelector('#wind-chill').textContent;

//let x = parseFloat(temperature.textContent);
//let y = parseFloat(windSpeed.textContent);
//console.log(`Temperature is ${x} and Wind Speed is ${y}`);

//const windChill = 35.74 + .6215 * temperature - 35.75 * windSpeed ** .16 + .4275 * temperature * windSpeed ** .16;

//let result = "N/A";
// if (temperature <=50 && windSpeed > 3.0) {
//     result = windChill;
// } else {
//     result = `N/A`;
// }

// windOutput.innerHTML = `${result}`;

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