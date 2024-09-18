import { NavLink } from "react-router-dom"
import path from "../utils/path"

const Navbar = () => {
    return (
        <div>
            <ul className="flex gap-8 text-lg">
                <li className="hover:text-main transition-all delay-75">
                    <NavLink className="font-normal" to={path.HOME}>Home</NavLink>
                </li>
                <li className="hover:text-main transition-all delay-75">
                    <NavLink className="font-normal" to={path.ABOUT}>About Us</NavLink>
                </li>
                <li className="hover:text-main transition-all delay-75">
                    <NavLink className="font-normal" to={path.SERVICE}>Services</NavLink>
                </li>
                <li className="hover:text-main transition-all delay-75">
                    <NavLink className="font-normal" to={path.BOOK}>Book Online</NavLink>
                </li>
                <li className="hover:text-main transition-all delay-75">
                    <NavLink className="font-normal" to={path.HOME}>Contact Us</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navbar