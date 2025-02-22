document.addEventListener("DOMContentLoaded", () => {
    fetch("../../assets/json/matches.json")
        .then(response => response.json())
        .then(data => loadSchedule(data))
        .catch(error => console.error("Error loading schedule:", error));
});

function loadSchedule(matches) {
    const schedule = document.getElementById("match-container");
    schedule.innerHTML = "";

    matches.forEach(match => {
        const matchDiv = document.createElement("div");
        matchDiv.classList.add("match");
        matchDiv.innerHTML = `
            <div class="match-number">MATCH ${match["Match Number"]}</div>
                    <div class="match-date">${match.Date} - ${match.Time}</div>
                    
                    <div class="venue">${match.Venue}</div>
                    <div class="teams">
                        <span>${match["Home Team"]}</span> 
                        <strong>VS</strong> 
                        <span>${match["Away Team"]}</span>
                    </div>             
        `;

        schedule.appendChild(matchDiv);
    }
    );
}