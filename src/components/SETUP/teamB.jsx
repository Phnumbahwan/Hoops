import { useState } from "react";
import toast from 'react-hot-toast';

const TeamB = ({ name, setName, members, setMembers }) => {
    const [errName, setErrName] = useState(false);
    const [canEdit, setCanEdit] = useState(false);
    const [editTeam, setEditTeam] = useState(false);

    const handleEdit = () => {
        setCanEdit(!canEdit);
    }

    const handleAddMember = () => {
        setMembers(prevState => [...prevState, ''])
    }

    const handleRemoveMember = () => {
        if (members.length > 1) {
            setMembers(prevState => prevState.slice(0, -1))
        }
    }

    const handleEditTeam = () => {
        setEditTeam(!editTeam);
    }

    const handleChangeName = (e) => {
        if (e.target.value === '') {
            toast.error("Please add Team's name.")
        }
        setErrName(e.target.value === '');
        setName(e.target.value);
    }

    const handleMember = (name, index) => {
        const updatedMembers = [...members];
        updatedMembers[index] = name;
        setMembers(updatedMembers);
    }

    return (
        <div className="flex flex-col justify-center items-center mt-[150px]">
            <div className="mb-5 flex cursor-pointer" onMouseEnter={handleEdit} onMouseLeave={handleEdit}>
                {
                    editTeam ? (
                        <div className="flex h-10">
                            <input value={name} onChange={(e) => handleChangeName(e)} type="text" className={`rounded text-black focus:ring-0 ${errName ? 'focus:border-rose-700 border-rose-700' : 'focus:border-emerald-400 border-emerald-400'}`} />
                            {
                                name.length > 0 && (
                                    <div className="w-5 mx-2 my-auto">
                                        <svg onClick={() => setEditTeam(!editTeam)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 text-green-400">
                                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                )
                            }
                        </div>
                    ) :
                        (
                            <div className="flex">
                                <p onClick={handleEditTeam} className="text-white text-lg font-bold">{name}</p>
                                {
                                    canEdit && (
                                        <div className="w-4">
                                            <svg onClick={handleEditTeam} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 text-white">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                                            </svg>
                                        </div>
                                    )
                                }
                            </div>
                        )
                }
            </div>
            <div>
                <div className="flex flex-col gap-3">
                    {
                        members.map((name, index) => (
                            <input key={index} value={name} onChange={(e) => handleMember(e.target.value, index)} type="text" placeholder="Enter player's name" className="text-black rounded-full bg-secondary-900 border-transparent w-96 focus:border-primary focus:ring-0" />
                        ))
                    }
                </div>
                <div className="flex justify-center gap-5 mt-5">
                    <svg onClick={handleAddMember} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 text-white hover:bg-gray-100 hover:text-primary rounded-full">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    <svg onClick={handleRemoveMember} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 text-white hover:bg-gray-100 hover:text-primary rounded-full">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default TeamB;