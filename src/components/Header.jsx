import { Link } from 'react-router-dom'
import logo from '../images/logo.jpg'
import Navbar from './Navbar'
import path from '../utils/path'
const Header = () => {
    return (
        <div className='mx-auto w-main flex justify-between items-center'>
            <Link to={`/${path.HOME}`}>
                <img src={logo} alt="Logo" className='h-[100px] object-cover' />
            </Link>
            <Navbar />
            <Link to={`/${path.BOOK}`} className='py-2 px-5 bg-main text-[#fff] font-semibold text-base rounded-sm'>Book Now</Link>
        </div>
    )
}

export default Header