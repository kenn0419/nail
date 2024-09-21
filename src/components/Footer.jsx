import { Link } from 'react-router-dom'
import logo from '../images/logo.jpg'
import path from '../utils/path'
import { FaFacebook, FaMapMarkerAlt, FaPhoneVolume } from 'react-icons/fa'
import { GrInstagram } from 'react-icons/gr'


const Footer = () => {
    return (
        <div className='px-3 tablet:w-[100%] phone:w-[100%] tablet:flex-col phone:flex-col tablet:items-center phone:items-center w-main mx-auto flex justify-between mt-10 gap-16 pb-10'>
            <Link to={`/${path.HOME}`}>
                <img src={logo} alt="Logo" className='h-[150px] object-cover' />
            </Link>
            <div className='w-[40%] tablet:w-[100%] phone:w-[100%]'>
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
                            <span>09:00 - 18:30</span>
                        </div>
                    </li>
                    <li className='my-3'>
                        <div className='flex justify-between gap-16'>
                            <span>Tuesday</span>
                            <span>09:00 - 18:30</span>
                        </div>
                    </li>
                    <li className='my-3'>
                        <div className='flex justify-between gap-16'>
                            <span>Wednesday</span>
                            <span>09:00 - 18:30</span>
                        </div>
                    </li>
                    <li className='my-3'>
                        <div className='flex justify-between gap-16'>
                            <span>Thursday</span>
                            <span>09:00 - 18:30</span>
                        </div>
                    </li>
                    <li className='my-3'>
                        <div className='flex justify-between gap-16'>
                            <span>Friday</span>
                            <span>09:00 - 18:30</span>
                        </div>
                    </li>
                    <li className='my-3'>
                        <div className='flex justify-between gap-16'>
                            <span>Saturday</span>
                            <span>09:00 - 18:30</span>
                        </div>
                    </li>
                    <li className='my-3'>
                        <div className='flex justify-between gap-16'>
                            <span>Sunday</span>
                            <span>Off</span>
                        </div>
                    </li>
                </ul>
            </div>
            <div className='w-[40%] tablet:w-[100%] phone:w-[100%] '>
                <h2 className='
                    text-[#222] text-2xl py-2 
                    relative before:content-[""] 
                    before:absolute before:bottom-0 before:left-0 
                    before:w-[50%] before:h-[3px] before:bg-main'
                >
                    Contact infomation
                </h2>
                <div className='w-[100%]'>
                    <div className='flex gap-3 items-center py-3 w-[100%]'>
                        <FaMapMarkerAlt size={30} color='#C19847' />
                        <Link className='w-[100%]' to={`https://www.google.com/maps/place/Hollywood+nails/@55.934233,-3.470223,464m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4887db4a36eafa61:0xcaff735c2ae41d80!8m2!3d55.93423!4d-3.4676481!16s%2Fg%2F11fd5738jg?entry=ttu&g_ep=EgoyMDI0MDkxNi4wIKXMDSoASAFQAw%3D%3D`}>Hollywood nails & Beauty, 112 E Main St, Broxburn EH52 5EQ</Link>
                    </div>
                    <div className='flex gap-3 items-center py-3'>
                        <FaPhoneVolume size={30} color='#C19847' />
                        <a href="tel: 07493458888" className='no-underline'>07493458888</a>
                    </div>
                    <div className='flex gap-3 items-center py-3'>
                        <FaFacebook size={30} color='#C19847' />
                        <a href="https://www.facebook.com/hollywoodnailsinbroxburn" className='no-underline'>Hollywoodnailsinbroxburn</a>
                    </div>
                    <div className='flex gap-3 items-center py-3'>
                        <GrInstagram size={30} color='#C19847' />
                        <a href="https://www.instagram.com/hollywoodnailsinbroxburn/" className='no-underline'>Hollywoodnailsinbroxburn</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer