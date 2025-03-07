import { TeamsContainer } from "./components/TeamsContainer";
import "./App.css";
import matches from "./assets/knock-out.json";
import trophy from "../../assets/icon/trophy.png"

function App() {

  return (
    <div className="grid h-full  grid-cols-4  gap-4 ml-[152px] mt-[80px]">

      <div className="grid grid-rows-2 gap-2 w-full h-[450px]">

        {/* Qualifier 1 container start */}
        <TeamsContainer 
        matchType={matches[0]["Match Number"]} 
        homeTeam={matches[0]["Home Team"]}
        awayTeam={matches[0]["Away Team"]}
        date={matches[0]["Date"]} time={matches[0]['Time']}
        venue={matches[0]["Venue"]} />
        {/* Qualifier 1 container end */}

        <TeamsContainer 
        matchType={matches[1]["Match Number"]} 
        homeTeam={matches[1]["Home Team"]}
        awayTeam={matches[1]["Away Team"]}
        date={matches[1]["Date"]} time={matches[1]['Time']}
        venue={matches[1]["Venue"]} />
        
      </div>

      <div className="grid grid-cols-1 mt-24">
      <TeamsContainer 
        matchType={matches[2]["Match Number"]} 
        homeTeam={matches[2]["Home Team"]}
        awayTeam={matches[2]["Away Team"]}
        date={matches[2]["Date"]} time={matches[1]['Time']}
        venue={matches[2]["Venue"]} />
      </div>

      <div className="grid grid-cols-1 mt-24">
      <TeamsContainer 
        matchType={matches[3]["Match Number"]} 
        homeTeam={matches[3]["Home Team"]}
        awayTeam={matches[3]["Away Team"]}
        date={matches[3]["Date"]} time={matches[3]['Time']}
        venue={matches[3]["Venue"]} />
      </div>

      <img src = {trophy} className=" h-[150px] mt-[103px]"/>

    </div>
  );
}

export default App;
