import React from 'react'
import service_main_1 from '../images/service_main_1.jpg'
import service_main_2 from '../images/service_main_2.jpg'
import service_main_3 from '../images/service_main_3.jpg'
import service_main_4 from '../images/service_main_4.jpg'
import service_main_5 from '../images/service_main_5.jpg'

const Service = () => {
    const services = [
        {
            id: 1,
            text: 'ACRYLIC FULL SET',
            image: service_main_4,
            list: [
                {
                    id: 1,
                    text: 'Full set ombré',
                    price: '£35'
                },
                {
                    id: 2,
                    text: 'Glitters with colour powder',
                    price: '£30'
                },
                {
                    id: 3,
                    text: 'Full set with shellac/gel colour',
                    price: '£33'
                },
                {
                    id: 4,
                    text: 'Full set overlay',
                    price: '£30'
                },
                {
                    id: 5,
                    text: 'Pink and white (powder cut)',
                    price: '£40'
                },
                {
                    id: 6,
                    text: 'French acrylic (white tips)',
                    price: '£35'
                },
                {
                    id: 7,
                    text: 'BIAB on natural nails with color',
                    price: '£30'
                },
                {
                    id: 8,
                    text: 'BIAB extensions with color',
                    price: '£35'
                },
                {
                    id: 9,
                    text: 'BIAB French tips',
                    price: '£35'
                },
            ]
        },
        {
            id: 2,
            text: 'ACRYLIC INFILL',
            image: service_main_5,
            list: [
                {
                    id: 1,
                    text: 'Shellac/Gel infill',
                    price: '£28'
                },
                {
                    id: 2,
                    text: 'Ombré infill',
                    price: '£30'
                }
            ]
        },
        {
            id: 3,
            text: 'MANICURE',
            image: service_main_1,
            list: [
                {
                    id: 1,
                    text: 'Shellac/Gel polish',
                    price: '£20'
                },
                {
                    id: 2,
                    text: 'Take off & Shellac/Gel on',
                    price: '£23'
                }
            ]
        },
        {
            id: 4,
            text: 'PEDICURE',
            image: service_main_2,
            list: [
                {
                    id: 1,
                    text: 'Deluxe Spa pedicure with Shellac',
                    price: '£38'
                },
                {
                    id: 2,
                    text: 'Spa pedicure with Shellac',
                    price: '£35'
                },
                {
                    id: 3,
                    text: 'Gel/shellac on toes',
                    price: '£23'
                },
                {
                    id: 4,
                    text: 'French tips on toes',
                    price: '£25'
                },
                {
                    id: 5,
                    text: 'Take off and redone Shellac/Gel',
                    price: '£25'
                },
                {
                    id: 6,
                    text: 'Full set acrylic on toes',
                    price: '£35'
                }
            ]
        },
        {
            id: 5,
            text: 'ADD ON',
            image: service_main_3,
            list: [
                {
                    id: 1,
                    text: 'Nails art designs from',
                    price: '+£5'
                },
                {
                    id: 2,
                    text: 'Take off acrylic only',
                    price: '£10'
                },
                {
                    id: 3,
                    text: 'Take off gel/shellac',
                    price: '£7'
                },
                {
                    id: 4,
                    text: 'Diamonds/gems',
                    price: '+£3'
                }
            ]
        },
    ]
    return (
        <div className='bg-service bg-center bg-cover bg-no-repeat bg-fixed relative mt-10 py-5'>
            <div className='bg-[#E1E1E1] absolute inset-0 z-0 opacity-75'>
            </div>
            <div className='mx-auto tablet:w-[100%] px-2 phone:w-[100%] w-main my-10 p-5 bg-[#fff] rounded-md relative z-1'>
                <h2 className='text-center text-[46px] text-main font-semibold'>OUR SERVICES</h2>
                <div className="tablet:grid-cols-1 px-2 phone:grid-cols-1 grid grid-cols-3 gap-5">
                    {services.map(service => (
                        <div className='flex flex-col items-center mb-4' key={service.id}>
                            <img src={service.image} alt="" className='w-[105px] h-[105px] object-cover rounded-full border-[#ced4da]' />
                            <h2 className='text-center text-[35px] text-main font-medium'>{service.text}</h2>
                            <div className='flex flex-col w-[100%]  mt-5'>
                                {service.list.map(item => (
                                    <div className='flex items-center gap-5 flex-nowrap' key={item.id}>
                                        <h4 className='text-main w-[70%]'>{item.text}</h4>
                                        <span className="w-[15%] relative before:block before:w-[100%] before:h-[1px] before:bg-[#000]"></span>
                                        <span className='w-[15%] text-main'>{item.price}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Service