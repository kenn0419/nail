import React from 'react'
import AboutComponent from '../components/About'
import { Link } from 'react-router-dom'
import about_1 from '../images/about_1.jpg'
import about_2 from '../images/about_2.jpg'
import about_3 from '../images/about_3.jpg'
import about_4 from '../images/about_4.jpg'
import about_5 from '../images/about_5.jpg'
import about_6 from '../images/about_6.jpg'
import about_7 from '../images/about_7.jpg'
import about_8 from '../images/about_8.jpg'
const About = () => {
    return (
        <div>
            <AboutComponent showImage={false} />
            <div className='mt-5'>
                <div className="grid grid-cols-2 gap-1">
                    <img src={about_1} alt="Image 1" className="w-[100%] h-[718px]" />
                    <img src={about_2} alt="Image 2" className="w-[100%] h-[718px]" />
                </div>

                <div className="grid grid-cols-2 gap-1 mt-1">
                    <img src={about_3} alt="Image 3" className="w-[100%] h-[718px]" />
                    <img src={about_4} alt="Image 4" className="w-[100%] h-[718px]" />
                </div>

                <div className="grid grid-cols-4 gap-1 mt-1">
                    <img src={about_5} alt="Image 5" className="w-full h-[500px]" />
                    <img src={about_6} alt="Image 6" className="w-full h-[500px]" />
                    <img src={about_7} alt="Image 7" className="w-full h-[500px]" />
                    <img src={about_8} alt="Image 8" className="w-full h-[500px]" />
                </div>
            </div>
            <div className='mx-auto w-main flex justify-center flex-col items-center mt-4 gap-5'>
                <h4 className='text-[28px]'>Gift Voucher Available</h4>
                <Link className='px-4 py-2 bg-[#000] outline-none font-semibold text-[#fff] uppercase text-sm'>Book Appointment</Link>
            </div>
        </div>
    )
}

export default About