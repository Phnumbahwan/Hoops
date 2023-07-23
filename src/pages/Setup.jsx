import TeamA from "../components/SETUP/teamA";
import TeamB from "../components/SETUP/teamB";

const Setup = () => {
    return (
        <div className="relative">
            <img
                src='/src/assets/create-teams.png'
                alt="Description of the image"
                className="w-[300px] object-cover absolute top-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
            <div className="grid grid-cols-2 w-screen h-screen">
                <div className="bg-white">
                    <TeamA />
                </div>
                <div className="bg-primary">
                    <TeamB />
                </div>
            </div>
        </div>
    );
}

export default Setup;