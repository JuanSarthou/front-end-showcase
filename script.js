// Wait for the document to load before running scripts
document.addEventListener("DOMContentLoaded", function() {
  // Button A: Show hello message and update greeting text
  const btnA = document.getElementById('btnA');
  const greeting = document.querySelector('.greeting');
  
  btnA.addEventListener('click', function() {
    alert("Hello!");
    greeting.textContent = "Hello!";
  });

  // Button Color: Toggle between light and darker background for the message box
  const btnColor = document.getElementById('btnColor');
  
  btnColor.addEventListener('click', function() {
    const messageBox = document.querySelector('.message-box');
    messageBox.classList.toggle('darker');
  });
});
