// Wait for the document to load before running scripts
document.addEventListener("DOMContentLoaded", function() {
  // Button A: Show hello message and update greeting text
  const btnA = document.getElementById('btnA');
  const greeting = document.querySelector('.greeting');
  
  btnA.addEventListener('click', function() {
    alert("Greetings dear user!!");
    greeting.textContent = "Hello user!!!!";
  });

  // Button Color: Toggle between light and darker background for the message box
  const btnColor = document.getElementById('btnColor');
  
  btnColor.addEventListener('click', function() {
    const messageBox = document.querySelector('.message-box');
    messageBox.classList.toggle('darker');
  });
});

const headContent = `
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <link rel="icon" href="favicon.ico" type="image/x-icon">
    
    <!-- Security Headers -->
    <meta http-equiv="Content-Security-Policy" content="default-src 'self'; img-src 'self' https:;">
    
    <!-- Choose one X-Frame-Options policy: SAMEORIGIN or DENY -->
    <meta http-equiv="X-Frame-Options" content="DENY">
    
    <meta http-equiv="Strict-Transport-Security" content="max-age=31536000; includeSubDomains; preload">
    
    <meta http-equiv="X-Content-Type-Options" content="nosniff">
    
    <meta http-equiv="Referrer-Policy" content="no-referrer">
    
    <!-- Optional: Enable XSS Protection for older browsers -->
    <!-- <meta http-equiv="X-XSS-Protection" content="1; mode=block"> -->
    
    <!-- Optional: Permissions Policy (adjust as needed) -->
    <!-- <meta http-equiv="Permissions-Policy" content="geolocation=(), microphone=(), camera=()"> -->
`;
document.head.innerHTML += headContent;
