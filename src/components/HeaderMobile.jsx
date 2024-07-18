import profil from "../img/mek.jpg"
import { FaMagnifyingGlass } from "react-icons/fa6"

export default function HeaderMobile() {
    return (
        <header className="flex justify-between px-[20px] sm:hidden">
            <div id="profile" className="flex gap-3">
                <div className="w-[60px]">
                    <img src={profil} alt="profile" className="rounded-[3vh] border-2 border-white"/>
                </div>
                <div className="flex flex-col justify-center">
                    <span className="font-bold text-[1.3rem]">Rafi Andrea</span>
                    <span className="text-[1rem]">Welcome Back.</span>
                </div>
            </div>
            <div id="icon" className="flex justify-center items-center w-[60px] h-[60px] bg-white text-black rounded-[3vh]">
                <FaMagnifyingGlass className="text-[2rem]"/>
            </div>
        </header>
    )
}