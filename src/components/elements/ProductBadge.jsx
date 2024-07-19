/* eslint-disable react/prop-types */
const ProductBadge = ({ children }) => {
    return (
        <div className="flex flex-col pb-3">
            {children}
        </div>
    )
}

const description = ({ title, desc }) => {
    return (
        <div className="flex flex-col text-[1.2rem] sm:text-[2rem]">
            <span>{title}</span>
            <span className="text-[#A59B8F]">{desc}</span>
        </div>
    )
}

const price = ({ price, icon }) => {
    return (
        <div className="flex justify-between items-center text-[1rem] sm:text-[2rem] gap-2 sm:gap-3">
            <span>${price}</span>
            <span className="flex justify-center items-center w-[40px] h-[40px] sm:w-[54px] sm:h-[54px] bg-[#e1cf97] text-black rounded-[2vh]">
                {icon}
            </span>
        </div>
    )
}


ProductBadge.description = description
ProductBadge.price = price
export default ProductBadge