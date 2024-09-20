import { Outlet } from 'react-router-dom'
import { Footer, Header } from '../components'

const Public = () => {
    return (
        <div className='max-h-screen overflow-y-auto relative'>
            <div className='fixed top-0 left-0 right-0 bg-[#fff] z-[5] shadow-md'>
                <Header />
            </div>
            <div className="w-full mt-[120px]">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Public