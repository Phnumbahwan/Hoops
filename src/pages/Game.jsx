import Header from "../components/Game/header";
import TeamScore from "../components/Game/teamScore";
import Table from "../components/Game/table";
import { useState } from "react";

const Game = () => {
    const [teamA, setTeamA] = useState(JSON.parse(Cookies.get('teamA')));
    const [teamB, setTeamB] = useState(JSON.parse(Cookies.get('teamB')));

    return (
        <div className="bg-white text-black px-10 h-screen pb-5">
            <Header/>
            <TeamScore teamA={teamA} teamB={teamB} />
            <Table t={'teamA'} team={teamA} setTeam={setTeamA} />
            <Table t={'teamB'} team={teamB} setTeam={setTeamB} />
        </div>
    )
}

export default Game;