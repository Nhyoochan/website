// script.js

// Function to dynamically set a greeting based on the time of day
function setGreeting() {
  const now = new Date();
  const hours = now.getHours();
  let greeting = '';

  if (hours < 12) {
    greeting = 'Good Morning!';
  } else if (hours < 18) {
    greeting = 'Good Afternoon!';
  } else {
    greeting = 'Good Evening!';
  }

  document.getElementById('greeting').textContent = greeting;
}

// Call the function on page load
window.onload = setGreeting;
