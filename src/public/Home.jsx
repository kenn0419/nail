import React from 'react'
import { AboutComponent, Banner, Contact, NewLetter, Service } from '../components'

const Home = () => {
    return (
        <div className='w-[100%]'>
            <Banner />
            <AboutComponent showImage={true} />
            <Service />
            {/* <Contact /> */}
            <NewLetter />
        </div>
    )
}

export default Home