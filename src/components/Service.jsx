import service_1 from '../images/service_1.png'
import service_2 from '../images/service_2.png'
import service_3 from '../images/service_3.png'
import service_4 from '../images/service_4.png'
import service_banner from '../images/service_banner.jpg'

const Service = () => {
    const services = [
        {
            id: 1,
            title: 'Manucire',
            desc: 'Each set of nails is a work of art, where your beauty shines from the smallest details',
            image: service_1
        },
        {
            id: 2,
            title: 'Pedicure',
            desc: 'Come and experience the perfect nail care and spa service, bringing absolute relaxation and lasting beauty',
            image: service_2
        },
        {
            id: 3,
            title: 'SNS Nail',
            desc: 'More than just nail care, we create your own style to help you feel more confident every day',
            image: service_3
        },
        {
            id: 4,
            title: 'Add-on',
            desc: 'New experience services at Hollywood nails & Beauty  ',
            image: service_4
        },
    ]
    return (
        <div className="bg-sub-main my-20 py-10 relative service flex flex-col items-center">
            <h2 className='font-banner text-main font-semibold text-[46px]'>About us</h2>
            {/* <p className='text-[15px] font-poppins phone:text-center tablet:text-center'>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
            </p> */}
            <div className='tablet:w-[100%] phone:w-[100%] tablet:flex-col  phone:flex-col  w-main mx-auto flex items-center gap-20 mt-5'>
                <div className='grid grid-cols-2 gap-10 tablet:order-2 phone:order-2 tablet:px-3 phone:px-3'>
                    {services.map(service => (
                        <div key={service.id}>
                            <img src={service.image} alt="service_1" className='mx-auto' />
                            <h2 className='font-banner text-main font-semibold text-lg text-center my-3'>{service.title}</h2>
                            <p className='text-center'>{service.desc}</p>
                        </div>
                    ))}
                </div>
                <img src={service_banner} alt="service banner" className='phone:order-1  tablet:order-1 phone:px-3  tablet:px-3  rounded-lg hover:scale-110 cursor-pointer transition-all delay-300' />
            </div>
        </div>
    )
}

export default Service