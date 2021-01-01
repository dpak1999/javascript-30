const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegree = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegree}deg)`;

  const mins = now.getMinutes();
  const minsDegree = (mins / 60) * 360 + 90;
  hourHand.style.transform = `rotate(${minsDegree}deg)`;

  const hour = now.getMinutes();
  const hoursDegree = (hour / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hoursDegree}deg)`;
}

setInterval(setDate, 1000);
