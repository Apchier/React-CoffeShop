/* eslint-disable react/prop-types */
const ProductListBadge = ({ children }) => {
    return (
        <div id="sm-category" className="flex flex-col px-[20px] gap-5">
            {children}
        </div>
    )
}

const category = ({ title, desc }) => {
    return (
        <div id="title" className="flex text-[1.3rem] justify-between ">
            <span className="font-bold">{title}</span>
            <span className="text-[#A59B8F]">{desc}</span>
        </div>
    )
}

const emblem = ({ title, desc, price, rating }) => {
    return (
        <div className="flex flex-col text-[1.2rem] sm:text-[2rem]">
            <span>{title}</span>
            <span className="text-[#A59B8F]">{desc}</span>
            <span>{price}</span>
            <span>Rating : {rating} ⭐</span>
        </div>
    )
}


ProductListBadge.category = category
ProductListBadge.emblem = emblem
export default ProductListBadge