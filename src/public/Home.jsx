import React from 'react'
import { About, Banner, Contact, NewLetter, Service } from '../components'

const Home = () => {
    return (
        <div className='w-full'>
            <Banner />
            <About />
            <Service />
            <Contact />
            <NewLetter />
        </div>
    )
}

export default Home