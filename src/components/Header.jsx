import { Link } from 'react-router-dom'
import logo from '../images/logo.jpg'
import Navbar from './Navbar'
import path from '../utils/path'
import { IoMenu } from 'react-icons/io5'
const Header = ({ setShowMenu }) => {
    return (
        <div className='tablet:w-[100%] phone:w-[100%] mx-auto w-main flex justify-between items-center'>
            <Link to={`/${path.HOME}`}>
                <img src={logo} alt="Logo" className='h-[100px] object-cover' />
            </Link>
            <span
                className="tablet:block laptop:hidden cursor-pointer"
                onClick={() => {
                    setShowMenu(true);
                    window.scrollTo(0, 0);
                }}
            >
                <IoMenu size={36} color='#C19847' />
            </span>
            <div className='phone:hidden tablet:hidden laptop:block'>
                <Navbar />
            </div>
            <Link to={`/`} className='py-2 px-5 bg-[#000] text-[#fff] font-semibold text-base rounded-sm phone:hidden tablet:hidden laptop:block      '>Book Now</Link>
        </div>
    )
}

export default Header