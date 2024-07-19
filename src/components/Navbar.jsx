import { FaMugHot } from "react-icons/fa"
import { IoMenu } from "react-icons/io5"
export default function Navbar() {
    return (
        <nav
            id="navbar"
            className="hidden w-full text-white justify-between rounded-[1.2vh] gap-2 px-[20px] sm:flex"
        >
            <div id="left" className="flex items-center w-full sm:w-1/2">
                <div
                    id="logo"
                    className="hidden justify-center bg-[#e1cf97] text-black items-center w-[60px] h-[60px] mr-[10px] rounded-[10px] p-2 sm:flex"
                >
                    <FaMugHot className="flex justify-center items-center w-[50px] h-[50px] text-[2.2rem]" />
                </div>
                <div
                    id="search"
                    className="flex justify-center items-center w-full text-[1.5rem]"
                >
                    <input
                        type="text"
                        placeholder="Coffee, Arabica Coffe, American Coffe, ..."
                        className="flex w-full h-[60px] p-2 outline-none rounded-[1.5vh] bg-gray-100"
                    />
                </div>
            </div>
            <div
                id="right"
                className="flex justify-end items-center gap-[20px] sm:w-1/2"
            >
                <div
                    id="action-list"
                    className="hidden justify-center items-center gap-[20px] sm:flex"
                >
                    <button className="items-center gap-1 hover:bg-[#e1cf97] hover:text-black p-2 rounded-[1vh]">
                        <span className="text-[1.7rem]">Brands </span>
                        <i className="fa-solid fa-chevron-down text-[0.7rem]"></i>
                    </button>
                    <button className="items-center gap-1 hover:bg-[#e1cf97] hover:text-black p-2 rounded-[1vh]">
                        <span className="text-[1.7rem]">Product </span>
                        <i className="fa-solid fa-chevron-down text-[0.7rem]"></i>
                    </button>
                    <button className="items-center hover:bg-[#e1cf97] hover:text-black p-2 rounded-[1vh]">
                        <span className="text-[1.7rem]">About Us</span>
                    </button>
                    <button className="items-center hover:bg-[#e1cf97] hover:text-black p-2 rounded-[1vh]">
                        <span className="text-[1.7rem]">More</span>
                    </button>
                </div>
                <div
                    id="menu"
                    className="flex justify-center items-center w-[50px] h-[50px] p-2 bg-[#e1cf97] rounded-[10px]"
                >
                    <IoMenu className="flex justify-center items-center text-black w-[60px] h-[60px] text-[2rem]" />
                </div>
            </div>
        </nav>
    )
}