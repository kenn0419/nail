import { Link } from 'react-router-dom'
import logo from '../images/logo.jpg'
import path from '../utils/path'
import { FaFacebook, FaMapMarkerAlt, FaPhoneVolume } from 'react-icons/fa'


const Footer = () => {
    return (
        <div className='w-main mx-auto flex justify-between mt-10 pb-10'>
            <Link to={`/${path.HOME}`}>
                <img src={logo} alt="Logo" className='h-[150px] object-cover' />
            </Link>
            <div className='w[40%]'>
                <h2 className='
                    text-[#222] text-2xl py-2 
                    relative before:content-[""] 
                    before:absolute before:bottom-0 before:left-0 
                    before:w-[50%] before:h-[3px] before:bg-main'
                >
                    Opening Hours
                </h2>
                <ul className='flex flex-col justify-between'>
                    <li className='my-3'>
                        <div className='flex justify-between gap-16'>
                            <span>Monday</span>
                            <span>08:00 - 20:00</span>
                        </div>
                    </li>
                    <li className='my-3'>
                        <div className='flex justify-between gap-16'>
                            <span>Tuesday</span>
                            <span>08:00 - 20:00</span>
                        </div>
                    </li>
                    <li className='my-3'>
                        <div className='flex justify-between gap-16'>
                            <span>Wednesday</span>
                            <span>08:00 - 20:00</span>
                        </div>
                    </li>
                    <li className='my-3'>
                        <div className='flex justify-between gap-16'>
                            <span>Thursday</span>
                            <span>08:00 - 20:00</span>
                        </div>
                    </li>
                    <li className='my-3'>
                        <div className='flex justify-between gap-16'>
                            <span>Friday</span>
                            <span>08:00 - 20:00</span>
                        </div>
                    </li>
                    <li className='my-3'>
                        <div className='flex justify-between gap-16'>
                            <span>Saturday</span>
                            <span>08:00 - 20:00</span>
                        </div>
                    </li>
                    <li className='my-3'>
                        <div className='flex justify-between gap-16'>
                            <span>Sunday</span>
                            <span>08:00 - 20:00</span>
                        </div>
                    </li>
                </ul>
            </div>
            <div>
                <h2 className='
                    text-[#222] text-2xl py-2 
                    relative before:content-[""] 
                    before:absolute before:bottom-0 before:left-0 
                    before:w-[50%] before:h-[3px] before:bg-main'
                >
                    Contact infomation
                </h2>
                <div>
                    <div className='flex gap-3 items-center py-3'>
                        <FaMapMarkerAlt size={30} color='#C19847' />
                        Hollywood nails & Beauty, 112 E Main St, Broxburn EH52 5EQ
                    </div>
                    <div className='flex gap-3 items-center py-3'>
                        <FaPhoneVolume size={30} color='#C19847' />
                        <a href="tel: 07493458888" className='no-underline'>07493458888</a>
                    </div>
                    <div className='flex gap-3 items-center py-3'>
                        <FaFacebook size={30} color='#C19847' />
                        <a href="https://www.facebook.com/hollywoodnailsinbroxburn" className='no-underline'>Hollywoodnailsinbroxburn</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer