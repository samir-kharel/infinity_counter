// variables
let started = false;
const counter_display = document.getElementById("counter");
let total_count = 0;

document.addEventListener("DOMContentLoaded", function () {
  console.log("Everything has loaded");
});

document.getElementById("start_button").addEventListener("click", function () {
  if (!started) {
    started = true;
    console.log(started);

    setInterval(() => {
      total_count += Math.floor(Math.random() * 100) + 1;
      counter_display.innerHTML = total_count;
    }, 500);
  } else {
    alert('Counter is already running. Website now refreshing.')
    location.reload()
  }
});
