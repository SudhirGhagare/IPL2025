const countdown = document.getElementById("timer");
const eventDate = new Date("March 22, 2025 18:00:00").getTime();

setInterval(() => {
    const now = new Date().getTime();
    const diff = eventDate - now;
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);

function createFirework() {
    let firework = document.createElement("div");
    firework.classList.add("firework");
    fireworksContainer.appendChild(firework);

    firework.style.left = `${Math.random() * 100}%`;
    firework.style.top = `${Math.random() * 100}%`;

    //setTimeout(() => firework.remove(), 1500);
}

setInterval(createFirework, 500);