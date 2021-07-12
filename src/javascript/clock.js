const clock = document.querySelector('h2.clock');

// show Clock
function showClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2,"0");
  const minutes = String(date.getMinutes()).padStart(2,"0");
  const seconds = String(date.getSeconds()).padStart(2,"0");

  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// 매초마다 반복해서 function 실행
showClock();
setInterval(showClock, 1000);