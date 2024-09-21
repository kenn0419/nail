import { NavLink } from "react-router-dom"
import path from "../utils/path"
import { IoIosArrowDown } from "react-icons/io"
import { MdKeyboardArrowDown } from "react-icons/md"

const Navbar = () => {
    return (
        <div>
            <ul className="flex gap-8 text-lg">
                <li className="transition-all delay-75">
                    <NavLink className="font-normal" to={path.HOME}>Home</NavLink>
                </li>
                <li className="transition-all delay-75 relative group">
                    <span className="flex items-center justify-center">
                        About Us <MdKeyboardArrowDown size={18} />
                    </span>
                    <ul className="hidden absolute left-0 top-[80%] w-[220px] z-10 mt-2 group-hover:block bg-[#fff] shadow-lg text-sm">
                        <li className="p-3 transition-all delay-75">
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
                    </ul>
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
    )
}

export default Navbar