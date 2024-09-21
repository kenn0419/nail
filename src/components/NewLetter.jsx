import React from 'react'

const NewLetter = () => {
    return (
        <div className='bg-letter bg-no-repeat bg-cover bg-center flex items-center flex-col mt-5 py-10 justify-center'>
            <h2 className='text-[46px] text-[#fff] font-semibold font-banner phone:text-[30px] tablet:text-[30px]'>Hollywood nails & Beauty</h2>
            <p className='mb-4 text-[#fff] text-[20px] font-medium phone:text-[18px] tablet:text-[18px] text-center'>Thank you for visiting our website</p>
            <p className='mb-4 text-[#fff] text-[20px] font-medium phone:text-[18px] tablet:text-[18px] text-center'>Wishing you a pleasant experience with our services</p>
            {/* <div className='flex items-center'>
                <input type="text" placeholder='Your Email' className='w-[550px] h-10 outline-none text-[#ced4da] p-3' />
                <button className='bg-main text-[#fff] outline-none h-10 px-5'>Your Email</button> */}
            {/* </div> */}
        </div >
    )
}

export default NewLetter