const celsiusElement = document.getElementById("celsius");
const fahrenheitElement = document.getElementById("fahrenheit");
const kelvinElement = document.getElementById("kelvin");

function computeTemp(event) {
    // console.log(event, event.target.name, event.target.value);

    const currentValue = +event.target.value;
    // '+' converts string to number
    // b/c sometimes the value is read as string

    switch (event.target.name) {
        case 'celsius':
            kelvinElement.value = (currentValue + 273.15).toFixed(2);
            // notes: toFixed(2) rounds to 2 decimal places
            fahrenheitElement.value = (((currentValue * 9) / 5) + 32).toFixed(2);
            break;

        case 'fahrenheit':
            celsiusElement.value = (((currentValue - 32) * 5) / 9).toFixed(2);
            // kelvinElement.value = (((currentValue - 32) * 5 / 9) + 273.15).toFixed(2);
            kelvinElement.value = celsiusElement.value + 273.15;
            break;

        case 'kelvin':
            celsiusElement.value = (currentValue - 273.15).toFixed(2);
            fahrenheitElement.value = (((currentValue - 273.15) * 9 / 5) + 32).toFixed(2);
            break;
    }
}