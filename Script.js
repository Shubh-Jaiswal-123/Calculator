// Send message to trig_log.html
function sendMessage(message) {
    window.postMessage(message, '*');
  }
  
  // Receive result from trig_log.html
  window.addEventListener('message', function(event) {
    if (event.origin !== window.location.origin) return; // Ensure message is from same origin
    document.getElementById('result-display').value = event.data;
  });
  
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
      sendMessage(input); // Send input expression to trig_log.html
    } catch (error) {
      document.getElementById('result-display').value = 'Error';
    }
  }
  
  function goToTrigLogPage() {
    window.open('trig_log.html', '_blank'); // Open trig_log.html in a new tab
  }
