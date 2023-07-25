import { useState } from "react";
import Header from "../components/Game/header";
import TeamScore from "../components/Game/teamScore";
import Table from "../components/Game/table";
import { useCookies } from "react-cookie";

const Game = () => {
    const [cookies, setCookie] = useCookies(['teams']);

    return (
        <div className="bg-white text-black px-10 h-screen pb-5">
            <Header/>
            <TeamScore teamA={cookies.teams.teamA} teamB={cookies.teams.teamB} />
            <Table team={cookies.teams.teamA} />
            <Table team={cookies.teams.teamB} />
        </div>
    )
}

export default Game;