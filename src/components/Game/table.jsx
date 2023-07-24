const Table = ({team}) => {
    return (
        <table class="table-fixed w-full">
            <thead className="text-primary">
                <tr>
                    <th>{team.name}</th>
                    <th>Score</th>
                    <th>Rebound</th>
                    <th>Assist</th>
                    <th>Block</th>
                    <th>Foul</th>
                </tr>
            </thead>
            <tbody>
                {
                    team.members.map((member) => (
                        <tr>
                            <td>{member.name}</td>
                            <td className="text-center">
                                <div className="flex justify-center">
                                    <div className="w-[30px]">
                                        <img
                                            src='/src/assets/back.png'
                                            alt="Description of the image"
                                            className="w-full object-cover mx-auto py-3 cursor-pointer"
                                        />
                                    </div>
                                    <p className="mx-5 my-auto">{member.score}</p>
                                    <div className="w-[30px]">
                                        <img
                                            src='/src/assets/next.png'
                                            alt="Description of the image"
                                            className="w-full object-cover mx-auto py-3 cursor-pointer"
                                        />
                                    </div>
                                </div>
                            </td>
                            <td className="text-center">
                                <div className="flex justify-center">
                                    <div className="w-[30px]">
                                        <img
                                            src='/src/assets/back.png'
                                            alt="Description of the image"
                                            className="w-full object-cover mx-auto py-3 cursor-pointer"
                                        />
                                    </div>
                                    <p className="mx-5 my-auto">{member.rebound}</p>
                                    <div className="w-[30px]">
                                        <img
                                            src='/src/assets/next.png'
                                            alt="Description of the image"
                                            className="w-full object-cover mx-auto py-3 cursor-pointer"
                                        />
                                    </div>
                                </div>
                            </td>
                            <td className="text-center">
                                <div className="flex justify-center">
                                    <div className="w-[30px]">
                                        <img
                                            src='/src/assets/back.png'
                                            alt="Description of the image"
                                            className="w-full object-cover mx-auto py-3 cursor-pointer"
                                        />
                                    </div>
                                    <p className="mx-5 my-auto">{member.assist}</p>
                                    <div className="w-[30px]">
                                        <img
                                            src='/src/assets/next.png'
                                            alt="Description of the image"
                                            className="w-full object-cover mx-auto py-3 cursor-pointer"
                                        />
                                    </div>
                                </div>
                            </td>
                            <td className="text-center">
                                <div className="flex justify-center">
                                    <div className="w-[30px]">
                                        <img
                                            src='/src/assets/back.png'
                                            alt="Description of the image"
                                            className="w-full object-cover mx-auto py-3 cursor-pointer"
                                        />
                                    </div>
                                    <p className="mx-5 my-auto">{member.block}</p>
                                    <div className="w-[30px]">
                                        <img
                                            src='/src/assets/next.png'
                                            alt="Description of the image"
                                            className="w-full object-cover mx-auto py-3 cursor-pointer"
                                        />
                                    </div>
                                </div>
                            </td>
                            <td className="text-center">
                                <div className="flex justify-center">
                                    <div className="w-[30px]">
                                        <img
                                            src='/src/assets/back.png'
                                            alt="Description of the image"
                                            className="w-full object-cover mx-auto py-3 cursor-pointer"
                                        />
                                    </div>
                                    <p className="mx-5 my-auto">{member.foul}</p>
                                    <div className="w-[30px]">
                                        <img
                                            src='/src/assets/next.png'
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