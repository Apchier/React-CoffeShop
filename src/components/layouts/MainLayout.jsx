import Header from "../HeaderMobile"
import Navbar from "../Navbar"
import Product from "../Product"
import ListProduct from "../ListProduct"
import NavbarMobile from "../NavbarMobileLink"
import bgSection from "../../img/bgsection.jpg"
import bgCoffe from "../../img/bgcoffe.jpg"
import filterCoffe from "../../img/filtercoffe.png"
import discount from "../../img/discount.png"
import Categories from "../Categories"

export default function MainLayout() {
    return (
        <section id="container" className="flex flex-col gap-5 w-full h-full p-3 bg-black text-white ">
            <Header />
            <Navbar />
            <section className="px-[20px] hidden sm:flex">
                <div id="content" className="flex w-full text-black rounded-[3vh] p-[15px]" style={{ backgroundImage: `url(${bgSection})` }}>
                    <div id="left" className="flex flex-col w-[60%] p-4 gap-[50px]">
                        <div className="flex flex-col justify-start leading-tight gap-3">
                            <h1 className="text-[2rem] font-extrabold sm:text-[5rem]">START <span className="text-[#F9813B]">YOUR <br />DAY</span> WITH COFFEE</h1>
                            <p className="sm:text-[1.5rem] pr-[40px] sm:font-bold sm:pr-[40%]">The best grain. the finest roast, the most powerfull flavor</p>
                        </div>
                        <button className="flex justify-center items-center w-[50%] p-[15px] bg-black text-white rounded-[3vh] sm:text-[1.7rem] sm:w-1/3">Order Now</button>
                    </div>
                    <div id="right" className="flex w-[40%] justify-center items-center px-[20px]">
                        <div className="flex justify-center items-end border-[9px] sm:border-[14px] border-orange-600 rounded-full pt-[30px] h-[80%] sm:h-[100%] pb-[7px] relative object-fill" style={{ backgroundImage: `url(${bgCoffe})` }}>
                            <img className="rounded-full w-[100%] sm:w-[300px] object-fill" src={filterCoffe} alt="" />
                            <img className="absolute w-[60px] sm:w-[130px] bottom-[-15px] left-[-25px] sm:left-[-50px]" src={discount} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <main className="flex flex-col w-full gap-[20px]">
                <Categories />
                <Product />
            </main>
            <ListProduct />
            <NavbarMobile />
        </section>
    )
}