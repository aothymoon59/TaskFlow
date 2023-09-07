import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaHome, FaUserCircle } from 'react-icons/fa'
import { MdLibraryAdd } from 'react-icons/md'
import { GoTasklist } from 'react-icons/go'
import { GrLogout } from 'react-icons/gr'
import { AiOutlineBars } from 'react-icons/ai'
import Logo from '../Components/Logo/Logo'
import useAuth from '../hooks/useAuth'

const Sidebar = () => {
    const { user } = useAuth()
    console.log(user)
    const [isActive, setActive] = useState('false')

    // Sidebar Responsive Handler
    const handleToggle = () => {
        setActive(!isActive)
    }
    return (
        <>
            {/* Small Screen Navbar */}
            <div className='bg-blue-50 text-gray-800 flex justify-between md:hidden'>
                <div>
                    <div className='block cursor-pointer p-4 font-bold'>
                        <Logo />
                    </div>
                </div>

                <button
                    onClick={handleToggle}
                    className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
                >
                    <AiOutlineBars className='h-5 w-5' />
                </button>
            </div>
            {/* Sidebar */}
            <div
                className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-blue-50 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'
                    }  md:translate-x-0  transition duration-200 ease-in-out`}
            >
                <div>
                    {/* Branding & Profile Info */}
                    <div>
                        <div className="w-full hidden md:flex py-2 justify-center items-center mx-auto">
                            <Link to="/">
                                <Logo />
                            </Link>
                        </div>
                    </div>

                    {/* Nav Items */}
                    <div className='flex flex-col justify-between flex-1 mt-6'>
                        <nav>
                            <NavLink
                                to="/"
                                aria-label="Home"
                                title="Home"
                                className={({ isActive }) =>
                                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-blue-300 text-black ${isActive ? "bg-blue-300" : "bg-transparent"}`
                                }
                            >
                                <FaHome className='w-5 h-5' />
                                <span className="mx-4 font-medium">Home</span>
                            </NavLink>
                            <NavLink
                                to="/add-task"
                                aria-label="Add Task"
                                title="Add Task"
                                className={({ isActive }) =>
                                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-blue-300 text-black ${isActive ? "bg-blue-300" : "bg-transparent"}`
                                }
                            >
                                <MdLibraryAdd className='w-5 h-5' />
                                <span className="mx-4 font-medium">Add Task</span>
                            </NavLink>
                            <NavLink
                                to="/task-board"
                                aria-label="Task Board"
                                title="Task Board"
                                className={({ isActive }) =>
                                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-blue-300 text-black ${isActive ? "bg-blue-300" : "bg-transparent"}`
                                }
                            >
                                <GoTasklist className='w-5 h-5' />
                                <span className="mx-4 font-medium">Task Board</span>
                            </NavLink>
                        </nav>
                    </div>
                </div>

                <div>
                    <hr />
                    <NavLink
                        to='/profile'
                        aria-label="Profile"
                        title="Profile"
                        className={({ isActive }) =>
                            `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-blue-300 text-black ${isActive ? "bg-blue-300" : "bg-transparent"}`
                        }
                    >
                        {
                            user ? <img src={user?.photoURL} alt={user?.displayName} className='w-8 h-8 rounded-full object-cover object-center border border-blue-300' /> : <FaUserCircle className='w-8 h-8' />
                        }

                        <span className='mx-4 font-medium'>Profile</span>
                    </NavLink>
                    <button
                        className='flex w-full items-center px-4 py-2 mt-5 text-black hover:bg-blue-300 transition-colors duration-300 transform'
                        aria-label="Logout"
                        title="Logout"
                    >
                        <GrLogout className='w-8 h-8' />

                        <span className='mx-4 font-medium'>Logout</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Sidebar
