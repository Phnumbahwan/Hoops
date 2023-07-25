import { useState } from "react";
import TeamA from "../components/SETUP/teamA";
import TeamB from "../components/SETUP/teamB";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const Setup = () => {
    const [cookies, setCookie] = useCookies(['teams']);
    const navigate = useNavigate();
    const [nameA, setNameA] = useState('Team A');
    const [nameB, setNameB] = useState('Team B');
    const [membersA, setMembersA] = useState(['', '', '']);
    const [membersB, setMembersB] = useState(['', '', '']);

    const handleProceed = () => {
        const teamA = membersA.map((member) => {
            return {
                name: member,
                score: 0,
                rebound: 0,
                assist: 0,
                block: 0,
                foul: 0
            }
        })

        const teamB = membersB.map((member) => {
            return {
                name: member,
                score: 0,
                rebound: 0,
                assist: 0,
                block: 0,
                foul: 0
            }
        })

        const temp = {
            teamA: {name: nameA, members: teamA},
            teamB: {name: nameB, members: teamB}
        }

        setCookie('teams', temp);
        navigate("/game");
    }

    return (
        <div className="relative">
            <img
                src='/src/assets/create-teams.png'
                alt="Description of the image"
                className="w-[300px] object-cover absolute top-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
            <div className="grid grid-cols-2 w-screen h-screen">
                <div className="bg-white">
                    <TeamA name={nameA} setName={setNameA} members={membersA} setMembers={setMembersA} />
                </div>
                <div className="bg-primary">
                    <TeamB name={nameB} setName={setNameB} members={membersB} setMembers={setMembersB} />
                </div>
            </div>
            <button onClick={() => handleProceed()} className="bg-primary font-bold w-[250px] py-2 object-cover absolute bottom-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-white hover:border-primary hover:bg-white hover:text-primary focus:outline-none">Proceed</button>
        </div>
    );
}

export default Setup;