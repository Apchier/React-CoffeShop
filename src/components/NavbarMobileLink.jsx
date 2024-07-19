import { IoMdHome } from "react-icons/io"
import { FaHeart } from "react-icons/fa"
import { FaEnvelope } from "react-icons/fa"
import { PiNotepadFill } from "react-icons/pi"
import { FaShoppingBag } from "react-icons/fa"


export default function NavbarMobile() {
    return (
        <nav className="flex justify-between items-center w-full bg-[#1a120f] text-[1.5rem] p-4 px-[30px] border-t-2 border-[#e1cf97] fixed bottom-0 sm:hidden">
            <span className="flex flex-col justify-center items-center hover:text-[#e1cf97] gap-1">
                < IoMdHome className="text-[2rem]" />
                <p className="text-[0.9rem]">Home</p>
            </span>
            <span className="flex flex-col justify-center items-center hover:text-[#e1cf97] gap-1">
                < FaHeart className="text-[1.5rem]" />
                <p className="text-[0.9rem]">Favourite</p>
            </span>
            <span className="flex flex-col justify-center items-center hover:text-[#e1cf97] gap-1">
                < FaEnvelope className="text-[1.5rem]" />
                <p className="text-[0.9rem]">Inbox</p>
            </span>
            <span className="flex flex-col justify-center items-center hover:text-[#e1cf97] gap-1">
                < PiNotepadFill className="text-[2rem]" />
                <p className="text-[0.9rem]">Order</p>
            </span>
            <span className="flex flex-col justify-center items-center hover:text-[#e1cf97] gap-1">
                < FaShoppingBag className="text-[1.5rem]" />
                <p className="text-[0.9rem]">Bag</p>
            </span>
        </nav>
    )
}