/* -----
        Start Countdown Timer
                             ------------- */

// The End of the year date to Countdown To
// 1000 ms = 1 second
let countdownDate = new Date("Dec 31, 2024 23:59:59").getTime();

let counter = setInterval(() => {
  // Get Date Now
  let dateNow = new Date().getTime();

  // Find the Date Difference between Now and Countdown Date
  let dateDiff = countdownDate - dateNow;

  // Get Time Units
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;

  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);
/* -----
        End Countdown Timer
                            ------------- */

/* Animate Width On Scrolling to progress bar in  skills section */

let section = document.querySelector(".our-skills");
let progressSpans = document.querySelectorAll(".the-progress span");

// ************* start animate the numbers after scroll in stats section**************

let statsSection = document.querySelector(".stats");
let nums = document.querySelectorAll(".stats .number");
let started = false; // Function started ? No

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 250) {
    progressSpans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
  // Stats Section
  if (window.scrollY >= statsSection.offsetTop) {
    if (!started) {
      nums.forEach((num) => {
        startCount(num);
      });
    }
    started = true;
  }
};


function startCount(element) {
  // select the number of the span that i but in a data-goal
  let goal = element.dataset.goal;
  let count = setInterval(() => {
    element.textContent++;
    if (element.textContent == goal) {
      clearInterval(count);
    }
  }, (2000 / goal));
}
