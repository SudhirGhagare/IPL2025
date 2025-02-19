const countdown = document.getElementById("timer-container");
const eventDate = new Date("March 22, 2025 19:30:00").getTime();
const now = new Date().getTime();
const diff = eventDate - now;
const days = Math.floor(diff / (1000 * 60 * 60 * 24));
const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((diff % (1000 * 60)) / 1000);
const time = [days, hours, minutes, seconds]
let container = document.getElementById("container");
let timeDivs = [];
let timerStringArray = ["Days", "Hours", "Minutes", "Seconds"];

for (let i = 0; i < 4; i++) {
    let div = document.createElement("div");
    div.className = "box";
   // div.innerText = time[i]
    container.appendChild(div);
    timeDivs.push(div);
}
console.log(timeDivs)
function updateCountdown() {

    const now = new Date().getTime();
    const diff = eventDate - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    const timeArray = [days, hours, minutes, seconds];

    timeDivs.forEach((div, index) => {
        div.innerText = `${timerStringArray[index]} \n\n ${timeArray[index]} `;
       // div.innerText = `${timeArray[index]} `;
    });

}

updateCountdown()
setInterval(updateCountdown, 1000);
        