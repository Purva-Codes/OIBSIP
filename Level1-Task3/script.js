const degree = document.getElementById('degree');
const inputType = document.getElementById('inputType');
const resultType = document.getElementById('resultType');
const resultValue = document.getElementById('resultValue');
const convertBtn = document.getElementById('convertBtn');

// Listener for the button click
convertBtn.addEventListener('click', (e) => {
    e.preventDefault();
    convertTemperature();
});

function convertTemperature() {
    // 1. Get the value from the input
    let inputValue = parseFloat(degree.value);
    
    // 2. Validate: Is it a real number?
    if (isNaN(inputValue)) {
        resultValue.innerText = "Please enter a valid number!";
        return; // Stop the function if input is bad
    }

    // 3. Get the selected units
    let fromUnit = inputType.value;
    let toUnit = resultType.value;
    let result;

    // 4. The Logic (If 'from' and 'to' are same, just show the same value)
    if (fromUnit === toUnit) {
        result = inputValue;
    } 
    // Celsius Logic
    else if (fromUnit === "celsius") {
        if (toUnit === "fahrenheit") {
            result = (inputValue * 9/5) + 32;
        } else if (toUnit === "kelvin") {
            result = inputValue + 273.15;
        }
    } 
    // Fahrenheit Logic
    else if (fromUnit === "fahrenheit") {
        if (toUnit === "celsius") {
            result = (inputValue - 32) * 5/9;
        } else if (toUnit === "kelvin") {
            result = (inputValue - 32) * 5/9 + 273.15;
        }
    } 
    // Kelvin Logic (Extra Challenge!)
    else if (fromUnit === "kelvin") {
        if (toUnit === "celsius") {
            result = inputValue - 273.15;
        } else if (toUnit === "fahrenheit") {
            result = (inputValue - 273.15) * 9/5 + 32;
        }
    }

    // 5. Update the display (limit to 2 decimal places)
    resultValue.innerText = `${result.toFixed(2)} ${getUnitSymbol(toUnit)}`;
}

// Helper function to get the correct symbol
function getUnitSymbol(unit) {
    if (unit === "celsius") return "°C";
    if (unit === "fahrenheit") return "°F";
    if (unit === "kelvin") return "K";
}