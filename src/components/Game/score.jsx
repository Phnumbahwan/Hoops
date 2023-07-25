import { useEffect, useState } from "react";

const Score = ({team}) => {
    const [score, setScore] = useState(0);
    const [rebound, setRebound] = useState(0);
    const [assist, setAssist] = useState(0);
    const [block, setBlock] = useState(0);
    const [foul, setFoul] = useState(0);

    useEffect(() => {
        let score = 0;
        let rebound = 0;
        let assist = 0;
        let block = 0;
        let foul = 0;
        team?.members?.forEach((member) => {
            score+=member.score;
            rebound+=member.rebound;
            assist+=member.assist;
            block+=member.block;
            foul+=member.foul;
        })
        setScore(score);
        setRebound(rebound);
        setAssist(assist);
        setBlock(block);
        setFoul(foul);
    }, [team])

    return (
        <div className="text-center text-white rounded p-3 bg-primary">
            <h1 className="font-bold text-[30px]">{team.name}</h1>
            <div className="grid grid-cols-5 gap-4 my-3">
                <p>{score}</p>
                <p>{rebound}</p>
                <p>{assist}</p>
                <p>{block}</p>
                <p>{foul}</p>
                <p className="font-bold">Score</p>
                <p className="font-bold">Rebound</p>
                <p className="font-bold">Assist</p>
                <p className="font-bold">Block</p>
                <p className="font-bold">Foul</p>
            </div>
        </div>
    )
}

export default Score;