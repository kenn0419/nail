import React from 'react'
import { AboutComponent, Banner, Contact, Feedback, NewLetter, Service } from '../components'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='w-[100%]'>
            <Banner />
            <AboutComponent showImage={true} />
            <Service />
            <div className='bg-main h-[600px] flex flex-col justify-center items-center py-3'>
                <Feedback />
                <Link to={`https://www.google.com/maps/place/Hollywood+nails/@55.934233,-3.470223,464m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4887db4a36eafa61:0xcaff735c2ae41d80!8m2!3d55.93423!4d-3.4676481!16s%2Fg%2F11fd5738jg?entry=ttu&g_ep=EgoyMDI0MDkxNi4wIKXMDSoASAFQAw%3D%3D`} className='bg-button px-5 py-3 rounded-lg text-[#000] font-semibold uppercase'>See on Google</Link>
            </div>
            {/* <Contact /> */}
            <NewLetter />
        </div>
    )
}

export default Home