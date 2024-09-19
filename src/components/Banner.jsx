import { Link } from 'react-router-dom'
import path from '../utils/path'

const Banner = () => {
    return (
        <div className='bg-banner h-[450px] bg-right min-w-full bg-no-repeat'>
            <div className="w-main h-full">
                <div className="ml-[100px] h-2/3 w-[460px] flex flex-col justify-center">
                    <h2 className='text-[46px] text-main font-semibold font-banner'>Let’s be nail Friends</h2>
                    <p className='my-4'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.</p>
                    <div className='mt-3'>
                        <Link to={`/${path.BOOK}`} className='py-2 px-5 bg-main text-[#fff] font-bold text-base rounded-sm'>Book Now!</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner