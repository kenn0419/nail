import { Link } from 'react-router-dom'
import fb from '../images/fb-icon.png'
import insta from '../images/insta-icon.png'
import path from '../utils/path'

const Contact = () => {
    return (
        <div className='mx-auto w-main flex flex-col items-center'>
            <h4>If you have questions, comments, or other feedback related to our services, please contact us to discuss.</h4>
            <div className="flex justify-center gap-20 my-5 w-[100%]">
                <div className='flex flex-col items-center gap-3'>
                    <h5 className='text-[35px] font-semibold'>Contact Details</h5>
                    <span>Hollywood nails & Beauty, 112 E Main St, Broxburn EH52 5EQ</span>
                    <span>07493458888</span>
                    <div className='flex items-center gap-3'>
                        <Link to={`https://www.facebook.com/hollywoodnailsinbroxburn`}>
                            <img className='w-8 h-8' src={fb} alt="fb" />
                        </Link>
                        <Link to={`https://www.instagram.com/hollywoodnailsinbroxburn/`}>
                            <img className='w-8 h-8' src={insta} alt="insta" />
                        </Link>
                    </div>
                    <Link to={`/${path.BOOK}`} className='bg-button px-5 py-3 rounded-lg text-[#000] font-semibold'>Book Now</Link>
                </div>
                <div className='flex flex-col items-center gap-3'>
                    <h5 className='text-[35px] font-semibold'>Opening Hours</h5>
                    <span>MONDAY - SATURDAY</span>
                    <span>09:00 - 18:30</span>
                    <div className='flex items-center gap-3'>
                        If you enjoyed your visit please kindly leave us a review. Thank you!
                    </div>
                    <Link to={`https://www.google.com/maps/place/Hollywood+nails/@55.934233,-3.470223,464m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4887db4a36eafa61:0xcaff735c2ae41d80!8m2!3d55.93423!4d-3.4676481!16s%2Fg%2F11fd5738jg?entry=ttu&g_ep=EgoyMDI0MDkxNi4wIKXMDSoASAFQAw%3D%3D`} className='bg-button px-5 py-3 rounded-lg text-[#000] font-semibold uppercase'>Review US on Google</Link>
                </div>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2234.8735497000303!2d-3.4676481!3d55.93423000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4887daff871b1f17%3A0x4225d599718c6f13!2sHollywood%20nails%20%26%20Beauty%2C%20112%20E%20Main%20St%2C%20Broxburn%20EH52%205EQ%2C%20V%C6%B0%C6%A1ng%20Qu%E1%BB%91c%20Anh!5e0!3m2!1svi!2s!4v1726738063281!5m2!1svi!2s" width="1000" height="700" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}

export default Contact