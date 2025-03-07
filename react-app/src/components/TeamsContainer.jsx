import React from 'react'
import '../App.css'

export const TeamsContainer = ({matchType, venue, homeTeam, awayTeam, time,date}) => {

  const getTeamLogo = (teamKey) => `/teams-icon/${teamKey}.avif`;
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
    "Lucknow Super Giants": "lsg",
    TBD: "tbd",
  };

  return (
    <div className="border-2 border-solid rounded-[12px]  border-[#15185f] h-45 w-75 shadow-xl">

          {/* Matches type and venue start */}
          <strong className="flex justify-center p-1.4 rounded-t-[10px] font-sans bg-[#202384] text-white text-[18px] font-light">
            {matchType}
          </strong>

          <text className="flex text-[14px] text-center p-2 text-[#68686a]">
            {venue}
          </text>

          {/* Matches type and venue end */}

          {/* Teams info container start */}
          <div className="grid grid-cols-3 items-center">

            <img
              className="h-15 w-15 ml-8"
              src={getTeamLogo("team_" + teamMap[homeTeam])}
            />

            <span className="flex items-center justify-center bg-[#ff5722] ml-8 text-white font-bold h-[40px] w-[40px] rounded-[28px]">
              VS
            </span>

            <img
              className="h-15 w-15 ml-4"
              src={getTeamLogo("team_" + teamMap[awayTeam])}
            />

          </div>
          {/* Teams info container end */}

          {/* Date & Time container start */}

          <div className="flex justify-center text-[14px] text-center p-2 text-[#68686a]">{date} |  {time}</div>

        </div>
  )
}
