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

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// initial call
countdown();

setInterval(countdown, 1000);