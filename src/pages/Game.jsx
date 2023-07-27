import Header from "../components/Game/header";
import TeamScore from "../components/Game/teamScore";
import Table from "../components/Game/table";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { useScreenshot, createFileName } from "usescreenshot-react";

const Game = () => {
    const navigate = useNavigate();
    const [teamA, setTeamA] = useState(JSON.parse(Cookies.get('teamA')));
    const [teamB, setTeamB] = useState(JSON.parse(Cookies.get('teamB')));
    const [end, setEnd] = useState(false);

    const { image, takeScreenshot, isLoading, isError } = useScreenshot();
    const ref = useRef()

    useEffect(() => {
        if (image) {
            const link = document.createElement('a');
            link.href = image;
            link.download = 'game_stat.png';
            link.click();
        }
    }, [image])

    const getImage = () => {
        if (!ref.current) {
            return
        }
        takeScreenshot(ref.current, {
            backgroundColor: '#fff',
            logging: false,
        }).catch(console.log);
    }

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
            <div ref={ref}>
                <TeamScore teamA={teamA} teamB={teamB} end={end} />
                <Table t={'teamA'} team={teamA} setTeam={setTeamA} />
                <Table t={'teamB'} team={teamB} setTeam={setTeamB} />
            </div>
            {
                end ? (
                    <div className="text-center mt-[50px]">
                        <button onClick={getImage} className="text-white bg-primary font-bold w-[300px] py-3 object-cover border-2 border-white hover:border-primary hover:bg-white hover:text-primary focus:outline-none">SCREENSHOT</button>
                        <button onClick={() => handleContinue()} className="text-white bg-primary font-bold w-[300px] py-3 object-cover border-2 border-white hover:border-primary hover:bg-white hover:text-primary focus:outline-none">CONTINUE GAME</button>
                        <button onClick={() => handleSetup()} className="text-white bg-primary font-bold w-[300px] py-3 object-cover border-2 border-white hover:border-primary hover:bg-white hover:text-primary focus:outline-none">SETUP GAME</button>
                    </div>
                ) : (
                    <div className="text-center mt-[50px]">
                        <button onClick={() => handleEndGame()} className="text-white bg-primary font-bold w-[300px] py-3 object-cover border-2 border-white hover:border-primary hover:bg-white hover:text-primary focus:outline-none">END GAME</button>
                    </div>
                )
            }
        </div>
    )
}

export default Game;