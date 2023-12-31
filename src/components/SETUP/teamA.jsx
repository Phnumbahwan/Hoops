import { useState } from "react";
import toast from 'react-hot-toast';

const TeamA = ({name, setName, members, setMembers}) => {
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
        if(members.length > 1) {
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
                                        <img
                                            onClick={() => setEditTeam(!editTeam)}
                                            src='https://ucarecdn.com/820c9e91-dda3-49db-82c6-de996e088e35/tick.png'
                                            alt="Description of the image"
                                            className="w-full object-cover cursor-pointer"
                                        />
                                    </div>
                                )
                            }
                        </div>
                    ) :
                        (
                            <div className="flex">
                                <p onClick={handleEditTeam} className="text-primary text-lg font-bold">{name}</p>
                                {
                                    canEdit && (
                                        <div className="w-4">
                                            <img
                                                onClick={handleEditTeam}
                                                src='https://ucarecdn.com/f4788a1b-9a11-41fd-b14d-806b7f7944db/pencil.png'
                                                alt="Description of the image"
                                                className="object-cover mx-2"
                                            />
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
                <div className="flex justify-center mt-5">
                    <img
                        onClick={handleAddMember}
                        src='https://ucarecdn.com/866d5860-ca44-4792-8a93-93e0e91f7887/plus.png'
                        alt="Description of the image"
                        className="w-5 object-cover mx-2 cursor-pointer"
                    />
                    <img
                        onClick={handleRemoveMember}
                        src='https://ucarecdn.com/6d9bb855-efa8-45ab-bf98-0209ba6c2693/minus.png'
                        alt="Description of the image"
                        className="w-4 object-cover mx-2 cursor-pointer"
                    />
                </div>
            </div>
        </div>
    )
}

export default TeamA;