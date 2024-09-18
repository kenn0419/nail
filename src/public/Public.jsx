import { Outlet } from 'react-router-dom'
import { Footer, Header } from '../components'

const Public = () => {
    return (
        <div className='max-h-screen overflow-y-auto flex flex-col items-center'>
            <Header />
            <div className="w-full flex items-center justify-center flex-col">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Public