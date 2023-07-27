import { useEffect, useState } from "react";
import Score from "./score";

const TeamScore = ({ teamA, teamB, end }) => {
    const [overallScoreA, setOverallScoreA] = useState(0);
    const [overallScoreB, setOverallScoreB] = useState(0);
    const [winner, setWinner] = useState('');

    useEffect(() => {
        if(overallScoreA > overallScoreB) {
            setWinner(teamA.name);
        }else if(overallScoreA < overallScoreB) {
            setWinner(teamB.name);
        }else{
            setWinner('draw');
        }

        if(!end) {
            setWinner('');
        }
    }, [end])

    return (
        <div className="grid grid-cols-2 gap-2 mb-[50px]">
            <Score team={teamA} winner={winner} setOverallScore={setOverallScoreA} />
            <Score team={teamB} winner={winner} setOverallScore={setOverallScoreB} />
        </div>
    )
}

export default TeamScore;