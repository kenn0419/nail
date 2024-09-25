import React from 'react'
import { Link } from 'react-router-dom'
import path from '../utils/path'

const Thanks = () => {
    return (
        <div className='mt-10 mb-32 flex flex-col items-center gap-10 bg-service bg-center bg-fixed bg-no-repeat h-[500px] relative'>
            <div className='absolute inset-0 z-1 bg-[#fff] opacity-70'></div>
            <div className='bg-[#fff] relative z-[5] mt-[100px] flex flex-col justify-center items-center gap-12 w-main mx-auto p-5 shadow-md tablet:w-[100%] phone:w-[100%]'>
                <h4 className='text-[36px] text-center'>Thank you for booking a service at Hollywood nails & Beauty, we have scheduled an appointment for you. Please pay attention and arrive on time. Thank you very much.</h4>
                <Link to={`/${path.HOME}`} className='px-6 py-3 bg-[#000] text-[#fff] text-[25px]'>Back To Homepage</Link>
            </div>
            <div className='mb-[200px]'></div>
        </div>
    )
}

export default Thanks