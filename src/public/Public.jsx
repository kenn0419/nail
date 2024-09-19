import { Outlet } from 'react-router-dom'
import { Footer, Header } from '../components'

const Public = () => {
    return (
        <div className='max-h-screen overflow-y-auto'>
            <Header />
            <div className="w-full">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Public