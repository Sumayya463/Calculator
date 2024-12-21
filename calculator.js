    let previousValue = '';  // Store the first number
    let currentValue = '';   // Store the second number
    let operator = '';       // Store the operator

    // Function to append a number to the input field
    function appendNumber(number) {
        currentValue += number;  // Append the clicked number to the current value
        document.getElementById('input').value = currentValue; // Display it in the input field
    }

    // Function to append a decimal point
    function appendDecimal() {
        if (!currentValue.includes('.')) {  // Prevent multiple decimals
            currentValue += '.';  // Append decimal
            document.getElementById('input').value = currentValue;
        }
    }

    // Function to set the operator
    function setOperator(op) {
        previousValue = currentValue;  // Store the current value as previous value
        operator = op;  // Store the selected operator
        currentValue = '';  // Reset the current value to enter the next number
        document.getElementById('input').value = '';  // Clear the input field for the next number
    }

    // Function to perform the calculation
    function calculate() {
        let result;
        let prev = parseFloat(previousValue);  // Convert previous value to a number
        let current = parseFloat(currentValue); // Convert current value to a number

        // Perform the operation based on the operator
        if (operator === '+') {
            result = prev + current;
        } else if (operator === '-') {
            result = prev - current;
        } else if (operator === '*') {
            result = prev * current;
        } else if (operator === '/') {
            result = prev / current;
        }else if (operator === '%') {
            result = prev % current;
        }

        // Display the result in the input field
        document.getElementById('input').value = result;
        previousValue = result;  // Store the result as the previous value for further calculations
        currentValue = '';  // Reset current value for next input
    }       
    // Function to clear the input field
    function clearInput() {
        currentValue = '';  // Reset the current value
        previousValue = '';  // Reset the previous value
        operator = '';  // Reset the operator
        document.getElementById('input').value = '';  // Clear the input field
    }