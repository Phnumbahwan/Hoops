import Header from "../components/Game/header";
import TeamScore from "../components/Game/teamScore";
import Table from "../components/Game/table";
import { useState } from "react";
import { useNavigate } from "react-router";

const Game = () => {
    const navigate = useNavigate();
    const [teamA, setTeamA] = useState(JSON.parse(Cookies.get('teamA')));
    const [teamB, setTeamB] = useState(JSON.parse(Cookies.get('teamB')));
    const [end, setEnd] = useState(false);

    const handleEndGame = () => {
        setEnd(true);
    }

    const handleContinue = () => {
        setEnd(false);
    }

    const handleSetup = () => {
        Cookies.remove('teamA');
        Cookies.remove('teamB');
        navigate('/setup');
    }

    return (
        <div className="bg-white text-black h-screen px-10 pb-5">
            <Header />
            <TeamScore teamA={teamA} teamB={teamB} end={end} />
            <Table t={'teamA'} team={teamA} setTeam={setTeamA} />
            <Table t={'teamB'} team={teamB} setTeam={setTeamB} />
            {
                end ? (
                    <div className="text-center mt-[30px]">
                        <button className="text-white bg-primary font-bold w-[300px] py-3 object-cover border-2 border-white hover:border-primary hover:bg-white hover:text-primary focus:outline-none">SCREENSHOT</button>
                        <button onClick={() => handleContinue()} className="text-white bg-primary font-bold w-[300px] py-3 object-cover border-2 border-white hover:border-primary hover:bg-white hover:text-primary focus:outline-none">CONTINUE GAME</button>
                        <button onClick={() => handleSetup()} className="text-white bg-primary font-bold w-[300px] py-3 object-cover border-2 border-white hover:border-primary hover:bg-white hover:text-primary focus:outline-none">SETUP GAME</button>
                    </div>
                ) : (
                    <div className="text-center mt-[30px]">
                        <button onClick={() => handleEndGame()} className="text-white bg-primary font-bold w-[300px] py-3 object-cover border-2 border-white hover:border-primary hover:bg-white hover:text-primary focus:outline-none">END GAME</button>
                    </div>
                )
            }
        </div>
    )
}

export default Game;