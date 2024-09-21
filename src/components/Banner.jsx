import { Link } from 'react-router-dom'
import path from '../utils/path'

const Banner = () => {
    return (
        <div className='bg-banner tablet:bg-center phone:bg-center  h-[450px] bg-right w-[100%] bg-no-repeat'>
            <div className="tablet:w-[100%] phone:w-[100%] tablet:flex phone:flex tablet:items-center phone:items-center laptop:w-main h-full">
                <div className="rounded-lg blur-tab tablet:ml-1 phone:ml-1 tablet:px-3 phone:px-3 tablet:h-4/5 phone:h-4/5 ml-[100px] h-2/3 tablet:w-[90%] phone:w-[90%] laptop:w-[460px] flex flex-col justify-center py-3">
                    <h2 className='text-[46px] text-main font-semibold font-banner'>Let’s be nail Friends</h2>
                    <p className='my-4'>
                        Welcome to Hollywood nails & Beauty. We specialise in top-quality nail care, offering a wide range of services from elegant manicures to creative nail art. Pop in today and let us make your nails shine!
                    </p>
                    <div className='mt-3'>
                        <Link to={`/${path.BOOK}`} className='py-2 px-5 bg-main text-[#fff] font-bold text-base rounded-sm'>Book Now!</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner