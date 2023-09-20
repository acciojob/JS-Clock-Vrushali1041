//your code 

setInterval(()=>{
let hour = new Date().getHours();
let min = new Date().getMinutes();
let sec = new Date().getSeconds();

let hourHand = ((30*hour) + (min/2) + 90);
let minHand = (6 * min + 90);
let secHand = (6 * sec);

document.getElementsByClassName("hour-hand")[0].style.transform = `rotate(${hourHand}deg)`;
document.getElementsByClassName("min-hand")[0].style.transform = `rotate(${minHand}deg)`;
document.getElementsByClassName("second-hand")[0].style.transform = `rotate(${secHand}deg)`;
},1000);
