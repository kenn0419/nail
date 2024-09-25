import { Link } from 'react-router-dom'
import about from '../images/about.jpg'
import path from '../utils/path'
import clsx from 'clsx'

const About = ({ showImage }) => {
    return (
        <div className='tablet:flex-col phone:flex-col flex tablet:w-[100%] phone:w-[100%] laptop:w-main gap-20 mt-20 items-center mx-auto'>
            {showImage && <div className='tablet:w-[100%] px-2 phone:w-[100%] w-[50%]'>
                <img src={about} alt='about' className='w-[100%] h-[400px] object-cover' />
            </div>}
            <div className={clsx('flex flex-col items-center tablet:w-[100%] px-2 phone:w-[100%]', showImage ? 'w-[50%]' : 'w-[960px] mx-auto')}>
                <h2 className='font-banner text-main font-semibold text-[35px] tablet:whitespace-normal tablet:text-center phone:whitespace-normal phone:text-center whitespace-nowrap'>WHERE BEAUTY MEET RELAXATION!</h2>
                <p className='text-[15px] justify-center leading-7 text-[#585e66] tablet:text-center phone:text-center'>Hollywood nails & Beauty - Premier Nail Salon in West Lothian & Edinburgh</p>
                <span className='mt-10 text-center leading-7 text-[#585e66]'>
                    Here, we combine expert craftsmanship with a welcoming atmosphere to deliver nail services that stand out. Our passionate team is dedicated to bringing your nail vision to life, whether you're drawn to timeless styles like a classic manicure or seeking unique, customized nail art. At Hollywood nails & Beauty, your hands and feet are in the best care.
                </span>
                <span className='mt-10 text-center leading-7 text-[#585e66]'>Trust us with your next nail experience, and discover why Hollywood nails & Beauty is quickly becoming a top choice in West Lothian & Edinburgh. Our comprehensive range of services is designed to leave your nails looking flawless and feeling healthy every time you visit.</span>
                {showImage && <Link to={`/${path.BOOK}`} className='mt-4 py-2 px-5 bg-main text-[#fff] font-semibold text-base rounded-sm'>Book Now</Link>}
            </div>
        </div>
    )
}

export default About