export default function Categories() {
    return (
        <div
            id="category-content"
            className="flex pl-[20px] sm:text-[2rem] sm:pr-[20px] gap-3 grow overflow-hidden"
        >
            <span className="flex grow shrink-0 justify-center items-center py-2 px-7 border-2 border-white rounded-[2vh] hover:text-black hover:bg-[#e1cf97] hover:border-[#e1cf97]">
                Popular
            </span>
            <span className="flex grow shrink-0 justify-center items-center py-2 px-7 border-2 border-white rounded-[2vh] hover:text-black hover:bg-[#e1cf97] hover:border-[#e1cf97]">
                Newest
            </span>
            <span className="flex grow shrink-0 justify-center items-center py-2 px-7 border-2 border-white rounded-[2vh] hover:text-black hover:bg-[#e1cf97] hover:border-[#e1cf97]">
                Recommended
            </span>
            <span className="flex grow shrink-0 justify-center items-center py-2 px-7 border-2 border-white rounded-[2vh] hover:text-black hover:bg-[#e1cf97] hover:border-[#e1cf97]">
                Most Chosen
            </span>
            <span className="flex grow shrink-0 justify-center items-center py-2 px-7 border-2 border-white rounded-[2vh] hover:text-black hover:bg-[#e1cf97] hover:border-[#e1cf97]">
                Best Seller
            </span>
        </div>
    )
}