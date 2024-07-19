import list1 from "../img/list1.png"
import list2 from "../img/list4.png"
import list3 from "../img/list2.png"

export default function ListProduct() {
    return (
        <div id="sm-category" className="flex flex-col px-[20px] gap-4">
            <div id="recomended" className="flex flex-col w-full gap-3">
                <div id="title" className="flex text-[1.3rem] justify-between ">
                    <span className="font-bold">Recommended</span>
                    <span className="text-[#A59B8F]">View all</span>
                </div>
                <div id="content" className="flex items-center gap-3">
                    <div className="flex w-[180px]">
                        <img
                            className="rounded-[2vh]"
                            src={list1}
                            alt=""
                        />
                    </div>
                    <div className="flex flex-col text-[1.2rem] sm:text-[2rem]">
                        <span>Indonesian Beans</span>
                        <span className="text-[#A59B8F]">Coffee Beans</span>
                        <span>$235.00</span>
                        <span>Rating : 4.9 ⭐</span>
                    </div>
                </div>
            </div>
            <div id="popular" className="flex flex-col w-full gap-3">
                <div id="title" className="flex text-[1.3rem] justify-between ">
                    <span className="font-bold">Popular</span>
                    <span className="text-[#A59B8F]">View all</span>
                </div>
                <div id="content" className="flex items-center gap-3">
                    <div className="flex w-[180px]">
                        <img
                            className="rounded-[2vh]"
                            src={list2}
                            alt=""
                        />
                    </div>
                    <div className="flex flex-col text-[1.2rem] sm:text-[2rem]">
                        <span>Indonesian Beans</span>
                        <span className="text-[#A59B8F]">Coffee Beans</span>
                        <span>$97.00</span>
                        <span>Rating : 4.9 ⭐</span>
                    </div>
                </div>
            </div>
            <div id="newest" className="flex flex-col w-full gap-3">
                <div id="title" className="flex text-[1.3rem] justify-between ">
                    <span className="font-bold">Newest</span>
                    <span className="text-[#A59B8F]">View all</span>
                </div>
                <div id="content" className="flex items-center gap-3">
                    <div className="flex w-[180px]">
                        <img
                            className="rounded-[2vh]"
                            src={list3}
                            alt=""
                        />
                    </div>
                    <div className="flex flex-col text-[1.2rem] sm:text-[2rem]">
                        <span>Indonesian Beans</span>
                        <span className="text-[#A59B8F]">Coffee Beans</span>
                        <span>$85.00</span>
                        <span>Rating : 4.9 ⭐</span>
                    </div>
                </div>
            </div>
        </div>
    )
}