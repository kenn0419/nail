import React from 'react'
import { AboutComponent, Banner, Contact, NewLetter, Service } from '../components'

const Home = () => {
    return (
        <div className='w-full'>
            <Banner />
            <AboutComponent showImage={true} />
            <Service />
            <Contact />
            <NewLetter />
        </div>
    )
}

export default Home