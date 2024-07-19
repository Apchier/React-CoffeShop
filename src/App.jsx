import Header from "./components/HeaderMobile"
import Navbar from "./components/Navbar"
import Product from "./components/Product"
import bgSection from "./img/bgsection.jpg"
import bgCoffe from "./img/bgcoffe.jpg"
import filterCoffe from "./img/filtercoffe.png"
import discount from "./img/discount.png"
import ListProduct from "./components/ListProduct"

export default function App() {
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
        <Product />
      </main>
      <ListProduct />
      <nav className="flex justify-between items-center w-full bg-[#1a120f] text-[1.5rem] p-4 px-[30px] border-t-2 border-[#e1cf97] fixed bottom-0 sm:hidden">
        <span className="flex flex-col justify-center items-center hover:text-[#e1cf97] gap-1">
          <i className="fa-solid fa-house "></i>
          <p className="text-[0.9rem]">Home</p>
        </span>
        <span className="flex flex-col justify-center items-center hover:text-[#e1cf97] gap-1">
          <i className="fa-solid fa-heart"></i>
          <p className="text-[0.9rem]">Favourite</p>
        </span>
        <span className="flex flex-col justify-center items-center hover:text-[#e1cf97] gap-1">
          <i className="fa-solid fa-envelope"></i>
          <p className="text-[0.9rem]">Inbox</p>
        </span>
        <span className="flex flex-col justify-center items-center hover:text-[#e1cf97] gap-1">
          <i className="fa-solid fa-clipboard-list"></i>
          <p className="text-[0.9rem]">Order</p>
        </span>
        <span className="flex flex-col justify-center items-center hover:text-[#e1cf97] gap-1">
          <i className="fa-solid fa-bag-shopping"></i>
          <p className="text-[0.9rem]">Bag</p>
        </span>
      </nav>
    </section>
  )
}
