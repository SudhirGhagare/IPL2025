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


let container = document.getElementById("container");

        // Create and append 4 divs
        for (let i = 1; i <= 4; i++) {
            let div = document.createElement("div");
            div.className = "box";
            container.appendChild(div);
        }

setInterval(createFirework, 500);