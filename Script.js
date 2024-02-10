function appendToDisplay(value) {
  document.getElementById('input-display').value += value;
}

function clearDisplay() {
  document.getElementById('input-display').value = '';
  document.getElementById('result-display').value = '';
}

function calculate() {
  try {
    let input = document.getElementById('input-display').value;
    input = input.replace('^', '**'); // Replace caret with double asterisk for exponentiation

    // Replace trigonometric functions in degrees with JavaScript equivalents
    input = input.replace(/sin\(/g, 'Math.sin(');
    input = input.replace(/cos\(/g, 'Math.cos(');
    input = input.replace(/tan\(/g, 'Math.tan(');

    // Replace logarithmic functions with JavaScript equivalents
    input = input.replace(/log\(/g, 'Math.log(');

    // Custom evaluation of trigonometric functions in degrees
    input = input.replace(/sin\(([^)]+)\)/g, function(match, degree) {
      const radians = parseFloat(degree) * (Math.PI / 180); // Convert degrees to radians
      return Math.sin(radians);
    });

    input = input.replace(/cos\(([^)]+)\)/g, function(match, degree) {
      const radians = parseFloat(degree) * (Math.PI / 180); // Convert degrees to radians
      return Math.cos(radians);
    });

    input = input.replace(/tan\(([^)]+)\)/g, function(match, degree) {
      const radians = parseFloat(degree) * (Math.PI / 180); // Convert degrees to radians
      return Math.tan(radians);
    });

    // Evaluate the expression
    let result = eval(input);

    // Check if result is NaN (Not a Number)
    if (isNaN(result)) {
      throw new Error('Invalid input');
    }

    document.getElementById('result-display').value = result;
  } catch (error) {
    document.getElementById('result-display').value = 'Error';
  }
}


function toggleTrigLog() {
  var panel = document.getElementById('trig-log-panel');
  panel.style.display = (panel.style.display === 'none') ? 'block' : 'none';
}
