import React from 'react'
import { AboutComponent, Banner, Contact, Feedback, NewLetter, Service } from '../components'

const Home = () => {
    return (
        <div className='w-[100%]'>
            <Banner />
            <AboutComponent showImage={true} />
            <Service />
            <div className='bg-main h-[500px] flex justify-center items-center'>
                <Feedback />
            </div>
            {/* <Contact /> */}
            <NewLetter />
        </div>
    )
}

export default Home