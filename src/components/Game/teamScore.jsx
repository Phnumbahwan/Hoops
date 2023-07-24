import Score from "./score";

const TeamScore = ({ teamA, teamB }) => {
    return (
        <div className="grid grid-cols-2 gap-2 mb-[50px]">
            <Score team={teamA} />
            <Score team={teamB} />
        </div>
    )
}

export default TeamScore;