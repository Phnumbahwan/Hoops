import { useState } from "react";
import Header from "../components/Game/header";
import TeamScore from "../components/Game/teamScore";
import Table from "../components/Game/table";

const Game = () => {
    const [teamA, setTeamA] = useState({
        name: 'Team A',
        members: [
            { name: 'Gil', score: 1, rebound: 1, assist: 1, block: 1, foul: 1 },
            { name: 'Aldrin', score: 1, rebound: 1, assist: 2, block: 1, foul: 1 },
            { name: 'Al', score: 1, rebound: 1, assist: 1, block: 1, foul: 1 },
        ]
    });

    const [teamB, setTeamB] = useState({
        name: 'Team B',
        members: [
            { name: 'Gil', score: 1, rebound: 1, assist: 1, block: 1, foul: 1 },
            { name: 'Aldrin', score: 1, rebound: 1, assist: 2, block: 1, foul: 1 },
            { name: 'Al', score: 1, rebound: 1, assist: 1, block: 1, foul: 1 },
        ]
    });

    return (
        <div className="bg-white text-black px-10 h-screen pb-5">
            <Header/>
            <TeamScore teamA={teamA} teamB={teamB} />
            <Table team={teamA} />
            <Table team={teamB} />
        </div>
    )
}

export default Game;