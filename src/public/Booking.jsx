import { FaCheckCircle, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
import about_2 from '../images/about_2.jpg'
import about_3 from '../images/about_3.jpg'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MdOutlineMailOutline } from 'react-icons/md'
import fb from '../images/fb-icon.png'
import insta from '../images/insta-icon.png'
import service_main_1 from '../images/service_main_1.jpg'
import service_main_2 from '../images/service_main_2.jpg'
import service_main_3 from '../images/service_main_3.jpg'
import service_main_4 from '../images/service_main_4.jpg'
import service_main_5 from '../images/service_main_5.jpg'
import { CiCircleCheck, CiCirclePlus } from 'react-icons/ci'
import clsx from 'clsx'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { addMinutes, setHours, setMinutes } from 'date-fns'
import { TimePicker } from '../components'
import path from '../utils/path'

const services = [
    {
        id: 1,
        text: 'ACRYLIC FULL SET',
        image: service_main_4,
        list: [
            {
                id: 1,
                text: 'Full set ombré',
                price: 35
            },
            {
                id: 2,
                text: 'Glitters with colour powder',
                price: 30
            },
            {
                id: 3,
                text: 'Full set with shellac/gel colour',
                price: 33
            },
            {
                id: 4,
                text: 'Full set overlay',
                price: 30
            },
            {
                id: 5,
                text: 'Pink and white (powder cut)',
                price: 40
            },
            {
                id: 6,
                text: 'French acrylic (white tips)',
                price: 35
            },
            {
                id: 7,
                text: 'BIAB on natural nails with color',
                price: 30
            },
            {
                id: 8,
                text: 'BIAB extensions with color',
                price: 35
            },
            {
                id: 9,
                text: 'BIAB French tips',
                price: 35
            },
        ]
    },
    {
        id: 2,
        text: 'ACRYLIC INFILL',
        image: service_main_5,
        list: [
            {
                id: 10,
                text: 'Shellac/Gel infill',
                price: 28
            },
            {
                id: 11,
                text: 'Ombré infill',
                price: 30
            }
        ]
    },
    {
        id: 3,
        text: 'MANICURE',
        image: service_main_1,
        list: [
            {
                id: 12,
                text: 'Shellac/Gel polish',
                price: 20
            },
            {
                id: 13,
                text: 'Take off & Shellac/Gel on',
                price: 23
            }
        ]
    },
    {
        id: 4,
        text: 'PEDICURE',
        image: service_main_2,
        list: [
            {
                id: 14,
                text: 'Deluxe Spa pedicure with Shellac',
                price: 38
            },
            {
                id: 15,
                text: 'Spa pedicure with Shellac',
                price: 35
            },
            {
                id: 16,
                text: 'Gel/shellac on toes',
                price: 23
            },
            {
                id: 17,
                text: 'French tips on toes',
                price: 25
            },
            {
                id: 18,
                text: 'Take off and redone Shellac/Gel',
                price: 25
            },
            {
                id: 19,
                text: 'Full set acrylic on toes',
                price: 35
            }
        ]
    },
    {
        id: 5,
        text: 'ADD ON',
        image: service_main_3,
        list: [
            {
                id: 20,
                text: 'Nails art designs from',
                price: 5
            },
            {
                id: 21,
                text: 'Take off acrylic only',
                price: 10
            },
            {
                id: 22,
                text: 'Take off gel/shellac',
                price: 7
            },
            {
                id: 23,
                text: 'Diamonds/gems',
                price: 3
            }
        ]
    },
]

const Booking = () => {
    const navigate = useNavigate();
    const [showContact, setShowContact] = useState(false);
    const [openServices, setOpenServices] = useState([]);
    const [choosedList, setChoosedList] = useState([]);



    const toggleService = (id) => {
        setOpenServices((prevState) =>
            prevState.includes(id) ? prevState.filter((serviceId) => serviceId !== id) : [...prevState, id]
        );
    };

    const handleAddService = (item) => {
        const check = choosedList.some(el => el.id === item.id);
        if (check) {
            const filterService = choosedList.filter(el => el.id !== item.id);
            setChoosedList(filterService);
        } else {
            setChoosedList(prev => [...prev, item]);
        }
    }

    const saveToLocalStorage = () => {
        if (choosedList.length > 0) {
            localStorage.setItem('list', JSON.stringify(choosedList));
            navigate(`/${path.PICK_DATE}`);
        }
    }
    return (
        <div className='tablet:w-[100%] px-2 phone:w-[100%] relative w-main mx-auto mt-28'>
            {/* <img src={about_2} alt="booking" className='min-w-full h-[500px] object-cover rounded-lg' /> */}
            <div className='tablet:grid-cols-1 px-2 phone:grid-cols-1 tablet:grid-rows-1 phone:grid-rows-1 tablet:gap-3 phone:gap-3 grid grid-cols-2 grid-rows-2 gap-5 mt-5'>
                <div className='tablet:w-[100%] px-2 phone:w-[100%] bg-sub-main p-5 rounded-2xl tablet:order-2 phone:order-2 col-span-1 row-span-2'>
                    <h2 className='text-2xl font-semibold text-main py-2 relative before:content-[""] before:absolute before:left-0 before:bottom-0 before:w-[50px] before:h-1 before:bg-main'>Service</h2>
                    <div className='mt-5'>
                        {services.map((service) => (
                            <div key={service.id} className="mb-5">
                                <span
                                    className='flex justify-between items-center uppercase cursor-pointer bg-gray-100 p-4 rounded-md'
                                    onClick={() => toggleService(service.id)}
                                >
                                    {service.text}
                                    {openServices.includes(service.id) ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                </span>

                                {openServices.includes(service.id) && (
                                    <div className='flex flex-col items-center mt-3'>
                                        {service.list.map((item) => (
                                            <div
                                                key={item.id}
                                                className='flex items-center justify-between w-[100%] p-2 border border-[#3d3c3c] rounded-md cursor-pointer mb-2'
                                                onClick={() => handleAddService(item)}
                                            >
                                                <div className='flex gap-3 items-center'>
                                                    <img src={service.image} alt={service.text} className='w-[48px] h-12 rounded-md' />
                                                    <div className="flex flex-col gap-1">
                                                        <span>{item.text}</span>
                                                        <span className='font-bold'>{item.price}£</span>
                                                    </div>
                                                </div>
                                                <span>
                                                    {choosedList.includes(item) ? <FaCheckCircle size={26} /> : <CiCirclePlus size={28} />}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <div className='bg-sub-main p-5 rounded-2xl'>
                    <div className={clsx('tablet:w-[100%] px-2 phone:w-[100%] tablet:order-1 phone:order-1 col-span-1 row-span-1 flex flex-col items-center mx-auto w-[350px] gap-3', showContact ? 'h-[500px]' : 'h-[400px]')}>
                        <img src={about_3} alt="" className='w-[128px] h-[128px] object-cover rounded-full' />
                        <h2 className='text-[28px] font-bold font-banner text-main'>Shine My Nails</h2>
                        <hr />
                        <span className='flex justify-center text-center'>
                            <FaMapMarkerAlt size={24} color='#C19847' />
                            Hollywood nails & Beauty, 112 E Main St, Broxburn EH52 5EQ
                        </span>
                        <span className='flex items-center gap-2 font-semibold cursor-pointer' onClick={() => setShowContact(!showContact)}>
                            Contact us
                            {showContact ? <IoIosArrowUp /> : <IoIosArrowDown />}
                        </span>
                        {showContact && <div className=''>
                            <div className='grid grid-cols-2 gap-3'>
                                <a href='tel:07493458888' className='flex items-center gap-5 px-3 py-2 rounded-3xl border-2 border-[#ccc]'>
                                    <FaPhoneAlt />
                                    Phone
                                </a>
                                <a href='mailto:Hollywoodnailsinbroxburn@gmail.com' className='flex items-center gap-5 px-3 py-2 rounded-3xl border-2 border-[#ccc]'>
                                    <MdOutlineMailOutline size={20} />
                                    Email
                                </a>
                            </div>
                            <div className='flex justify-center gap-3 mt-4'>
                                <Link to={`https://www.facebook.com/hollywoodnailsinbroxburn`}>
                                    <img className='w-6 h-6' src={fb} alt="fb" />
                                </Link>
                                <Link to={`https://www.instagram.com/hollywoodnailsinbroxburn/`}>
                                    <img className='w-6 h-6' src={insta} alt="insta" />
                                </Link>
                            </div>
                        </div>}
                    </div>
                </div>
                <div className='bg-sub-main rounded-2xl p-5 tablet:order-3 phone:order-3 col-span-1 row-span-1'>
                    <h2 className='text-[28px] font-bold font-banner text-main'>Summary</h2>
                    <div>
                        {choosedList.map(item => (
                            <div className='flex items-center justify-between mb-3' key={item.id}>
                                <h4 className='font-medium'>{item.text}</h4>
                                <span className='font-medium'>£{item.price}</span>
                            </div>
                        ))}
                        <hr />
                        <div className='flex items-center justify-between mt-3'>
                            <h4 className='font-bold'>Total to pay</h4>
                            <span className='font-bold'>£{choosedList.reduce((prev, acc) => prev + acc.price, 0)}</span>
                        </div>
                    </div>
                    <div className="mt-2 text-right">
                        <button
                            className='px-5 py-2 text-[#fff] bg-main rounded-3xl'
                            onClick={saveToLocalStorage}
                        >
                            Pick Hour
                        </button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Booking