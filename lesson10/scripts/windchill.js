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