import React from 'react'

const NewLetter = () => {
    return (
        <div className='bg-letter flex items-center flex-col mt-10 py-10'>
            <h2 className='text-[46px] text-[#fff] font-semibold font-banner'>Subscribe to Our Newsletter</h2>
            <p className='mb-4 text-[#fff]'>Be the first to know about our promotions and discounts!</p>
            <div className='flex items-center'>
                <input type="text" placeholder='Your Email' className='w-[550px] h-10 outline-none text-[#ced4da] p-3' />
                <button className='bg-main text-[#fff] outline-none h-10 px-5'>Your Email</button>
            </div>
        </div>
    )
}

export default NewLetter