import gambar1 from "../img/list1.png"
import gambar2 from "../img/list2.png"
import gambar3 from "../img/list3.png"
import gambar4 from "../img/list4.png"
import { CiShoppingBasket } from "react-icons/ci";
import ProductBadge from "./elements/ProductBadge";

export default function Product() {
    return (
        <div id="main-content" className="flex px-[20px] gap-4 overflow-scroll sm:overflow-hidden">
            <div
                className="flex flex-col w-1/2 p-2 bg-[#2B2116] rounded-[2.4vh] gap-3"
            >
                <div className="flex w-full justify-center items-center">
                    <img
                        className="rounded-[2vh]"
                        src={gambar1}
                        alt=""
                    />
                </div>
                <ProductBadge>
                    <ProductBadge.description title="Rating : 4.9 ⭐" desc="Indonesian Beans" />
                    <ProductBadge.price price="235.00" icon={<CiShoppingBasket className="text-[1.5rem] sm:text-[2rem]" />} />
                </ProductBadge>
            </div>
            <div
                className="flex flex-col w-1/2 p-2 bg-[#2B2116] rounded-[2.4vh] gap-3"
            >
                <div className="flex w-full justify-center items-center">
                    <img
                        className="rounded-[2vh]"
                        src={gambar2}
                        alt=""
                    />
                </div>
                <ProductBadge>
                    <ProductBadge.description title="Rating : 4.9 ⭐" desc="Indonesian Beans" />
                    <ProductBadge.price price="235.00" icon={<CiShoppingBasket className="text-[1.5rem] sm:text-[2rem]" />} />
                </ProductBadge>
            </div>
            <div
                className="flex flex-col w-1/2 p-2 bg-[#2B2116] rounded-[2.4vh] gap-3"
            >
                <div className="flex w-full justify-center items-center">
                    <img
                        className="rounded-[2vh]"
                        src={gambar3}
                        alt=""
                    />
                </div>
                <ProductBadge>
                    <ProductBadge.description title="Rating : 4.9 ⭐" desc="Indonesian Beans" />
                    <ProductBadge.price price="235.00" icon={<CiShoppingBasket className="text-[1.5rem] sm:text-[2rem]" />} />
                </ProductBadge>
            </div>
            <div
                className="flex flex-col w-1/2 p-2 bg-[#2B2116] rounded-[2.4vh] gap-3"
            >
                <div className="flex w-full justify-center items-center">
                    <img
                        className="rounded-[2vh]"
                        src={gambar4}
                        alt=""
                    />
                </div>
                <ProductBadge>
                    <ProductBadge.description title="Rating : 4.9 ⭐" desc="Indonesian Beans" />
                    <ProductBadge.price price="235.00" icon={<CiShoppingBasket className="text-[1.5rem] sm:text-[2rem]" />} />
                </ProductBadge>
            </div>
        </div>
    )
}
