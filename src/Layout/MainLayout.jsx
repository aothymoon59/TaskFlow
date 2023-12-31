import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'


const MainLayout = () => {
    return (
        <>
            <div className='relative min-h-screen md:flex'>
                <Sidebar />
                <div className='flex-1  md:ml-64'>
                    <div className=''>
                        <Outlet />
                    </div>
                </div>
            </div>

        </>

    )
}

export default MainLayout
