import { Link, NavLink, Outlet } from 'react-router-dom'
import { Footer, Header } from '../components'
import { IoMdClose } from 'react-icons/io'
import { MdKeyboardArrowDown } from 'react-icons/md'
import path from '../utils/path'
import { useState } from 'react'

const Public = ({ showMenu, setShowMenu }) => {
    const [show, setShow] = useState(false);
    return (
        <div className='relative w-[100%]'>
            {showMenu && (
                <div className="absolute inset-0 bg-black bg-opacity-50 z-20">
                    <div className="w-[300px] h-full bg-[#f3f3f3] text-[#333] py-5 px-3">
                        <span
                            className="flex justify-end"
                            onClick={() => setShowMenu(false)}
                        >
                            <IoMdClose size={24} cursor={"pointer"} />
                        </span>
                        <ul className="flex gap-8 text-lg phone:flex tablet:flex flex-col laptop:hidden">
                            <li className="transition-all delay-75">
                                <NavLink className="font-normal" to={path.HOME}>Home</NavLink>
                            </li>
                            <li className="transition-all delay-75 relative group">
                                <span className="flex items-center" onClick={() => setShow(!show)}>
                                    About Us <MdKeyboardArrowDown size={18} />
                                </span>
                                {show && <ul className="    ">
                                    <li className="p-3 transition-all delay-75 text-base">
                                        <NavLink
                                            to={`/${path.ABOUT_SERVICE}`}
                                            className="w-full block hover:text-main text-base"
                                        >
                                            Services
                                        </NavLink>
                                    </li>
                                    <li className="p-2 transition-all delay-75">
                                        <NavLink
                                            to={`/${path.ABOUT_TEAM}`}
                                            className="w-full block hover:text-main text-base"
                                        >
                                            Team
                                        </NavLink>
                                    </li>
                                </ul>}
                            </li>
                            <li className="hover:text-main transition-all delay-75">
                                <NavLink className="font-normal" to={path.SERVICE}>Services</NavLink>
                            </li>
                            <li className="hover:text-main transition-all delay-75">
                                <NavLink className="font-normal" to={path.BOOK}>Book Online</NavLink>
                            </li>
                            <li className="hover:text-main transition-all delay-75">
                                <NavLink className="font-normal" to={path.CONTACT}>Contact Us</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
            <div className='fixed top-0 left-0 right-0 bg-[#fff] z-10 shadow-md'>
                <Header setShowMenu={setShowMenu} />
            </div>
            <div className="w-[100%] mt-[100px]">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Public