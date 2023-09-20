//your code 

setInterval(() => {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();

  const hourRotation = (30 * hour) + (0.5 * minute) + 90;
  const minuteRotation = (6 * minute) + 90;
  const secondRotation = 6 * second;

  const hourHand = document.querySelector(".hour-hand");
  const minuteHand = document.querySelector(".min-hand");
  const secondHand = document.querySelector(".second-hand");

  hourHand.style.transform = `rotate(${hourRotation}deg)`;
  minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
  secondHand.style.transform = `rotate(${secondRotation}deg)`;
}, 1000);

