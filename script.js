const DaysEl = document.getElementById("Days");
const HoursEl = document.getElementById("Hours");
const MinutesEl = document.getElementById("Minutes");
const SecondsEl = document.getElementById("Seconds");

const newYears = "27 Feb 2026";

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const Days = Math.floor(totalSeconds / 3600 / 24);
    const Hours = Math.floor(totalSeconds / 3600) % 24;
    const Minutes = Math.floor(totalSeconds / 60) % 60;
    const Seconds = Math.floor(totalSeconds) % 60;

    DaysEl.innerHTML = Days;
    HoursEl.innerHTML = formatTime(Hours);
    MinutesEl.innerHTML = formatTime(Minutes);
    SecondsEl.innerHTML = formatTime(Seconds);


// Assuming you have a target date defined somewhere, e.g.:
const targetDate = new Date('2026-02-27T12:59:59').getTime();  // Replace with your actual target date

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft <= 0) {
        // Countdown is over: Hide the countdown and show the message
        document.getElementById('countdown-container').style.display = 'none';
        document.getElementById('confession-message').style.display = 'block';
        // Optional: Clear the interval to stop updating
        clearInterval(countdownInterval);
        return;  // Exit the function early
    }

    // Normal countdown logic (calculate days, hours, etc.)
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Update the DOM elements
    document.getElementById('Days').innerText = days;
    document.getElementById('Hours').innerText = hours;
    document.getElementById('Minutes').innerText = minutes;
    document.getElementById('Seconds').innerText = seconds;
}

// Start the countdown (assuming this is how you set it up)
const countdownInterval = setInterval(updateCountdown, 1000);  // Update every second
updateCountdown();  // Call immediately to avoid delay
}

document.addEventListener('DOMContentLoaded', function() {
  const audio = document.getElementById('background-music');
  const toggleButton = document.getElementById('music-toggle');
  
  // Function to toggle play/pause
  function toggleMusic() {
    if (audio.paused) {
      audio.play();
      toggleButton.textContent = 'Mute Music';
    } else {
      audio.pause();
      toggleButton.textContent = 'Play Music';
    }
  }
  
  // Add click event to button
  toggleButton.addEventListener('click', toggleMusic);
  
  // Optional: Try to autoplay on load, but handle errors
  audio.play().catch(function(error) {
    console.log('Autoplay blocked:', error);
    // If blocked, show the button
    toggleButton.style.display = 'block';
  });
});

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// initial call
countdown();

setInterval(countdown, 1000);
