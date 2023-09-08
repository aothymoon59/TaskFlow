import { Link } from "react-router-dom";
import Greeting from "../../Components/Greeting/Greeting";
import useAuth from "../../hooks/useAuth";
import { MdLibraryAdd } from "react-icons/md";
import { HiPencilAlt } from "react-icons/hi";

const Home = () => {
    const { user } = useAuth()

    return (
        <div className="p-6 min-h-screen flex justify-center items-center">
            <div className="bg-blue-50 w-full max-w-2xl mx-auto rounded-sm p-5 text-center">
                <p className="text-sm font-semibold">Hello, <span className="text-[#2896FF]">{user ? user?.displayName : "user"}</span></p>
                <div className="text-sm font-semibold text-[#2896FF]">
                    <Greeting />
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold mt-4">Welcome to <span className="text-[#2896FF]">TaskFlow</span></h2>
                <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center items-center">
                    <Link to='/add-task' className="common-btn text-sm md:text-xl flex gap-1 items-center w-fit">Add Task <MdLibraryAdd /></Link>
                    <button className="common-btn text-sm md:text-xl flex gap-1 items-center w-fit">Create Team <HiPencilAlt /></button>
                </div>
            </div>
        </div>
    );
};

export default Home;