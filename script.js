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
