const teams = [
    { name: "CSK", played: 0, won: 0, lost: 0, nr: 0, nrr: "0.000", for: "0/0", against: "0/0", points: 0 },
    { name: "DC", played: 0, won: 0, lost: 0, nr: 0, nrr: "0.000", for: "0/0", against: "0/0", points: 0 },
    { name: "GT", played: 0, won: 0, lost: 0, nr: 0, nrr: "0.000", for: "0/0", against: "0/0", points: 0 },
    { name: "KKR", played: 0, won: 0, lost: 0, nr: 0, nrr: "0.000", for: "0/0", against: "0/0", points: 0 },
    { name: "LSG", played: 0, won: 0, lost: 0, nr: 0, nrr: "0.000", for: "0/0", against: "0/0", points: 0 },
    { name: "MI", played: 0, won: 0, lost: 0, nr: 0, nrr: "0.000", for: "0/0", against: "0/0", points: 0 },
    { name: "PBKS", played: 0, won: 0, lost: 0, nr: 0, nrr: "0.000", for: "0/0", against: "0/0", points: 0 },
    { name: "RR", played: 0, won: 0, lost: 0, nr: 0, nrr: "0.000", for: "0/0", against: "0/0", points: 0 },
];

const teamMap = {
    "CSK": "csk",
    "MI": "mi",
    "RCB": "rcb",
    "KKR": "kkr",
    "DC": "dc",
    "PBKS": "pbks",
    "RR": "rr",
    "SRH": "srh",
    "GT": "gt",
    "LSG": "lsg",
  };

const tableBody = document.getElementById("pointsTable");

function renderTable() {
    tableBody.innerHTML = "";
    teams.forEach(team => {
        const logo = `../../assets/icon/teams-icon/team_${teamMap[team.name]}.avif`
        const row = `<tr>
            <td><img src = ${logo} width = 38dp height = 38dp></img></td>
            <td>${team.played}</td>
            <td>${team.won}</td>
            <td>${team.lost}</td>
            <td>${team.nr}</td>
            <td>${team.nrr}</td>
            <td>${team.for}</td>
            <td>${team.against}</td>
            <td>${team.points}</td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}

renderTable();
