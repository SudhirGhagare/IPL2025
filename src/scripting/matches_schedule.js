document.addEventListener("DOMContentLoaded", () => {
    fetch("../../assets/json/matches.json")
        .then(response => response.json())
        .then(data => loadSchedule(data))
        .catch(error => console.error("Error loading schedule:", error));
});

const teamMap = {
    "Chennai Super Kings": "csk",
    "Mumbai Indians": "mi",
    "Royal Challengers Bengaluru": "rcb",
    "Kolkata Knight Riders": "kkr",
    "Delhi Capitals": "dc",
    "Punjab Kings": "pbks",
    "Rajasthan Royals": "rr",
    "Sunrisers Hyderabad": "srh",
    "Gujarat Titans": "gt",
    "Lucknow Super Giants": "lsg"
};

function loadSchedule(matches) {
    const schedule = document.getElementById("match-container");
    schedule.innerHTML = "";

    matches.forEach(match => {
        const matchDiv = document.createElement("div");
        matchDiv.classList.add("match-card");

        const matchTime = match.Time;
        const hour = parseInt(matchTime.split(":")[0], 10);
        const timeIcon = hour >= 18 ? "🌙" : "☀️";

        matchDiv.innerHTML = `
            <div class="match-left">
                <div class="match-number-box">MATCH ${match["Match Number"]}</div>
                <div class="timeline">
                    <div class="dot"></div>
                    <div class="line"></div>
                </div>
                <div class="match-date-time">
                    <div class="match-date">${match.Date}</div>
                    <div class="match-time">
                        ${timeIcon} ${match.Time} IST
                    </div>
                </div>
            </div>

            <div class="match-right">
                <div class="venue">${match.Venue}</div>
                <div class="teams">
                    <div class="team">
                        <img class="team-logo" src="../../assets/icon/teams-icon/team_${teamMap[match["Home Team"]]}.avif" alt="${match["Home Team"]}">
                        <div class="team-name">${match["Home Team"]}</div>
                    </div>
                    <div class="vs">vs</div>
                    <div class="team">
                        <img class="team-logo" src="../../assets/icon/teams-icon/team_${teamMap[match["Away Team"]]}.avif" alt="${match["Away Team"]}">
                        <div class="team-name">${match["Away Team"]}</div>
                    </div>
                </div>
            </div>
        `;

        schedule.appendChild(matchDiv);
    });
}

function toggleNav() {
    let drawer = document.getElementById("nav-drawer");
    if (window.matchMedia("(max-width: 700px), (max-height: 700px)").matches) {
        drawer.classList.toggle("open");
    }
}

function toggleTab(clickedTab){
    document.querySelector(".active").classList.remove("active");
    clickedTab.classList.add("active");
}
