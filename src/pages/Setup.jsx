import { useState } from "react";
import TeamA from "../components/SETUP/teamA";
import TeamB from "../components/SETUP/teamB";

const Setup = () => {
    const [teamA, setTeamA] = useState();
    
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
            <button className="bg-primary font-bold w-[250px] py-2 object-cover absolute bottom-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-white hover:border-primary hover:bg-white hover:text-primary focus:outline-none">Proceed</button>
        </div>
    );
}

export default Setup;