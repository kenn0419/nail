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
import about_9 from '../images/about_9.jpg'
import about_10 from '../images/about_10.jpg'

const About = () => {
    return (
        <div className='w-[100%]'>
            <AboutComponent showImage={false} />
            <div className='mt-5'>
                <div className="grid grid-cols-2 gap-1 phone:px-2 tablet:px-2">
                    <img src={about_1} alt="Image 1" className="w-[100%] h-[718px] phone:h-[340px] tablet:h-[340px]" />
                    <img src={about_2} alt="Image 2" className="w-[100%] h-[718px] phone:h-[340px] tablet:h-[340px]" />
                </div>

                <div className="grid grid-cols-2 gap-1 mt-1 phone:px-2 tablet:px-2">
                    <img src={about_3} alt="Image 3" className="w-[100%] h-[718px] phone:h-[340px] tablet:h-[340px]" />
                    <img src={about_4} alt="Image 4" className="w-[100%] h-[718px] phone:h-[340px] tablet:h-[340px]" />
                </div>

                <div className="grid grid-cols-2 gap-1 mt-1 phone:px-2 tablet:px-2">
                    <img src={about_9} alt="Image 3" className="w-[100%] h-[718px] phone:h-[340px] tablet:h-[340px]" />
                    <img src={about_10} alt="Image 4" className="w-[100%] h-[718px] phone:h-[340px] tablet:h-[340px]" />
                </div>


                <div className="grid grid-cols-4 gap-1 mt-1 phone:px-2 tablet:px-2">
                    <img src={about_5} alt="Image 5" className="w-full h-[500px] phone:h-[200px] tablet:h-[200px]" />
                    <img src={about_6} alt="Image 6" className="w-full h-[500px] phone:h-[200px] tablet:h-[200px]" />
                    <img src={about_7} alt="Image 7" className="w-full h-[500px] phone:h-[200px] tablet:h-[200px]" />
                    <img src={about_8} alt="Image 8" className="w-full h-[500px] phone:h-[200px] tablet:h-[200px]" />
                </div>
            </div>
            <div className='tablet:w-[100%] px-2 phone:w-[100%] mx-auto w-main flex justify-center flex-col items-center mt-4 gap-5'>
                <h4 className='text-[28px]'>See More...</h4>
                <Link to={`https://www.instagram.com/hollywoodnailsinbroxburn/`} className='bg-[#000] outline-none text-sm bg-button px-7 py-3 rounded-lg text-[#000] font-bold uppercase block'>SEE</Link>
            </div>
        </div>
    )
}

export default About