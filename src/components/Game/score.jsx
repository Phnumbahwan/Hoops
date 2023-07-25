const Score = ({team}) => {
    return (
        <div className="text-center text-white rounded p-3 bg-primary">
            <h1 className="font-bold text-[30px]">{team.name}</h1>
            <div className="grid grid-cols-5 gap-4 my-3">
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
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