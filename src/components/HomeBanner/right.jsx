import { Link } from "react-router-dom";

const Right = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <Link to="/setup" relative="path">
                <button className="bg-secondary-900 hover:bg-secondary-800 text-primary font-bold py-2 px-4 rounded-full hover:border-transparent w-[250px] focus:outline-none">
                    SETUP GAME
                </button>
            </Link>
        </div>
    )
}

export default Right;