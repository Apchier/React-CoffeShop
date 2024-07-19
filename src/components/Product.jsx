import gambar1 from "../img/list3.png"
import gambar2 from "../img/list1.png"
import { CiShoppingBasket } from "react-icons/ci";

export default function Product() {
    return (
        <div id="main-content" className="flex px-[20px] gap-4">
            <div
                id="left"
                className="flex flex-col w-1/2 p-2 bg-[#2B2116] rounded-[2.4vh] gap-3"
            >
                <div className="flex w-full justify-center items-center">
                    <img
                        className="rounded-[2vh]"
                        src={gambar1}
                        alt=""
                    />
                </div>
                <div className="flex flex-col pb-3">
                    <div className="flex flex-col text-[1.2rem] sm:text-[2rem]">
                        <span>Indonesian Beans</span>
                        <span className="text-[#A59B8F]">Coffee Beans</span>
                    </div>
                    <div className="flex justify-between items-center text-[1.2rem] sm:text-[2rem]">
                        <span>$235.00</span>
                        <span className="flex justify-center items-center w-[44px] h-[44px] sm:w-[54px] sm:h-[54px] bg-[#e1cf97] text-black rounded-[2vh]">
                            <CiShoppingBasket className="text-[1.5rem] sm:text-[2rem]" />
                        </span>
                    </div>
                </div>
            </div>
            <div
                id="right"
                className="flex flex-col w-1/2 p-2 bg-[#2B2116] rounded-[2.4vh] gap-3"
            >
                <div className="flex w-full justify-center items-center">
                    <img
                        className="rounded-[2vh]"
                        src={gambar2}
                        alt=""
                    />
                </div>
                <div className="flex flex-col pb-3">
                    <div className="flex flex-col text-[1.2rem] sm:text-[2rem]">
                        <span>Indonesian Beans</span>
                        <span className="text-[#A59B8F]">Coffee Beans</span>
                    </div>
                    <div className="flex justify-between items-center text-[1.2rem] sm:text-[2rem]">
                        <span>$85.00</span>
                        <span className="flex justify-center items-center w-[44px] h-[44px] sm:w-[54px] sm:h-[54px] bg-[#e1cf97] text-black rounded-[2vh]">
                            <CiShoppingBasket className="text-[1.5rem] sm:text-[2rem]" />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}