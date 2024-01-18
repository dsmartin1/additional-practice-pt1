
function temperatureConverter() {
    //note: Requires html file for prompt.
    const tempFarenheit = prompt("Enter degrees Farenheit: ");

    const tempCelsius = Math.floor((tempFarenheit - 32) * (5/9));
    console.log(`${tempFarenheit} degrees Farenheit is ${tempCelsius} in Celsius, rouned down.`);

    const tempKelvin = tempCelsius + 273.15;
    console.log(`${tempCelsius} degrees Celsius is ${tempKelvin} in Kelvin.`);

    let todaysForecast = `The current temperature outside is ${tempFarenheit} degrees Fahrenheit, ${tempCelsius} degrees Celcius, and ${tempKelvin} degrees Kelvin.`;
    console.log(todaysForecast);
}
