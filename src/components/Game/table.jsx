import { useState } from "react";

const Table = ({t, team, setTeam}) => {

    const handleIncrease = (name, type) => {
        const members = [...team.members];
        const updated =  members.map((member) => {
            if(member.name === name) {
                if(type === 'score') {
                    member.score++;
                }else if(type === 'rebound') {
                    member.rebound++;
                }else if(type === 'assist') {
                    member.assist++;
                }else if(type === 'block') {
                    member.block++;
                }else if(type === 'foul') {
                    member.foul++;
                }
            }
            return member;
        })
        setTeam({name: team.name, members: updated});
        Cookies.set(t, JSON.stringify({name: team.name, members: updated}));
    }

    const handleDecrease = (name, type) => {
        const members = [...team.members];
        const updated =  members.map((member) => {
            if(member.name === name) {
                if(type === 'score') {
                    if(member.score > 0) member.score--;
                }else if(type === 'rebound') {
                    if(member.rebound > 0) member.rebound--;
                }else if(type === 'assist') {
                    if(member.assist > 0) member.assist--;
                }else if(type === 'block') {
                    if(member.block > 0) member.block--;
                }else if(type === 'foul') {
                    if(member.foul > 0) member.foul--;
                }
            }
            return member;
        })
        setTeam({name: team.name, members: updated});
        Cookies.set(t, JSON.stringify({name: team.name, members: updated}));
    }

    return (
        <table className="table-fixed w-full">
            <thead className="text-primary">
                <tr>
                    <th align="left">{team.name}</th>
                    <th>Score</th>
                    <th>Rebound</th>
                    <th>Assist</th>
                    <th>Block</th>
                    <th>Foul</th>
                </tr>
            </thead>
            <tbody>
                {
                    team.members.map((member, index) => (
                        <tr key={index}>
                            <td className="">{member.name.toUpperCase()}</td>
                            <td className="text-center">
                                <div className="flex justify-center">
                                    <div onClick={() => handleDecrease(member.name, 'score')} className="w-[20px]">
                                        <img
                                            src='https://ucarecdn.com/5da9275d-cc57-4c68-8952-7dbe147922bf/back.png'
                                            alt="Description of the image"
                                            className="w-full object-cover mx-auto py-3 cursor-pointer"
                                        />
                                    </div>
                                    <p className="mx-5 my-auto">{member.score}</p>
                                    <div onClick={() => handleIncrease(member.name, 'score')} className="w-[20px]">
                                        <img
                                            src='https://ucarecdn.com/3240abae-e330-412b-9f0e-dbb7a8767e80/next.png'
                                            alt="Description of the image"
                                            className="w-full object-cover mx-auto py-3 cursor-pointer"
                                        />
                                    </div>
                                </div>
                            </td>
                            <td className="text-center">
                                <div className="flex justify-center">
                                    <div onClick={() => handleDecrease(member.name, 'rebound')} className="w-[20px]">
                                        <img
                                            src='https://ucarecdn.com/5da9275d-cc57-4c68-8952-7dbe147922bf/back.png'
                                            alt="Description of the image"
                                            className="w-full object-cover mx-auto py-3 cursor-pointer"
                                        />
                                    </div>
                                    <p className="mx-5 my-auto">{member.rebound}</p>
                                    <div onClick={() => handleIncrease(member.name, 'rebound')} className="w-[20px]">
                                        <img
                                            src='https://ucarecdn.com/3240abae-e330-412b-9f0e-dbb7a8767e80/next.png'
                                            alt="Description of the image"
                                            className="w-full object-cover mx-auto py-3 cursor-pointer"
                                        />
                                    </div>
                                </div>
                            </td>
                            <td className="text-center">
                                <div className="flex justify-center">
                                    <div onClick={() => handleDecrease(member.name, 'assist')} className="w-[20px]">
                                        <img
                                            src='https://ucarecdn.com/5da9275d-cc57-4c68-8952-7dbe147922bf/back.png'
                                            alt="Description of the image"
                                            className="w-full object-cover mx-auto py-3 cursor-pointer"
                                        />
                                    </div>
                                    <p className="mx-5 my-auto">{member.assist}</p>
                                    <div onClick={() => handleIncrease(member.name, 'assist')} className="w-[20px]">
                                        <img
                                            src='https://ucarecdn.com/3240abae-e330-412b-9f0e-dbb7a8767e80/next.png'
                                            alt="Description of the image"
                                            className="w-full object-cover mx-auto py-3 cursor-pointer"
                                        />
                                    </div>
                                </div>
                            </td>
                            <td className="text-center">
                                <div className="flex justify-center">
                                    <div onClick={() => handleDecrease(member.name, 'block')} className="w-[20px]">
                                        <img
                                            src='https://ucarecdn.com/5da9275d-cc57-4c68-8952-7dbe147922bf/back.png'
                                            alt="Description of the image"
                                            className="w-full object-cover mx-auto py-3 cursor-pointer"
                                        />
                                    </div>
                                    <p className="mx-5 my-auto">{member.block}</p>
                                    <div onClick={() => handleIncrease(member.name, 'block')} className="w-[20px]">
                                        <img
                                            src='https://ucarecdn.com/3240abae-e330-412b-9f0e-dbb7a8767e80/next.png'
                                            alt="Description of the image"
                                            className="w-full object-cover mx-auto py-3 cursor-pointer"
                                        />
                                    </div>
                                </div>
                            </td>
                            <td className="text-center">
                                <div className="flex justify-center">
                                    <div onClick={() => handleDecrease(member.name, 'foul')} className="w-[20px]">
                                        <img
                                            src='https://ucarecdn.com/5da9275d-cc57-4c68-8952-7dbe147922bf/back.png'
                                            alt="Description of the image"
                                            className="w-full object-cover mx-auto py-3 cursor-pointer"
                                        />
                                    </div>
                                    <p className="mx-5 my-auto">{member.foul}</p>
                                    <div onClick={() => handleIncrease(member.name, 'foul')} className="w-[20px]">
                                        <img
                                            src='https://ucarecdn.com/3240abae-e330-412b-9f0e-dbb7a8767e80/next.png'
                                            alt="Description of the image"
                                            className="w-full object-cover mx-auto py-3 cursor-pointer"
                                        />
                                    </div>
                                </div>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default Table;