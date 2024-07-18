import Header from "./components/HeaderMobile"

export default function App() {
  return (
    <section id="container" className="flex flex-col gap-5 w-full h-full p-3 bg-black text-white">
      <Header />
      <nav
        id="navbar"
        className="hidden w-full text-white justify-between rounded-[1.2vh] gap-2 px-[20px] sm:flex"
      >
        <div id="left" className="flex items-center w-full sm:w-1/2">
          <div
            id="logo"
            className="hidden justify-center bg-[#e1cf97] text-black items-center w-[60px] h-[60px] mr-[10px] rounded-[10px] p-2 sm:flex"
          >
            <i className="fa-solid fa-mug-hot flex justify-center items-center w-[50px] h-[50px] text-[2.2rem]"></i>
          </div>
          <div
            id="search"
            className="flex justify-center items-center w-full text-[1.5rem]"
          >
            <input
              type="text"
              placeholder="Coffee, Arabica Coffe, American Coffe, ..."
              className="flex w-full h-[60px] p-2 outline-none rounded-tl-[1.5vh] rounded-bl-[1.5vh] bg-gray-100"
            />
            <i className="fa-solid fa-magnifying-glass flex justify-center items-center bg-gray-100 text-gray-400 h-[60px] w-[60px] rounded-br-[1.5vh] rounded-tr-[1.5vh]"></i>
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
              <span className="text-[1.7rem]">Brands</span>
              <i className="fa-solid fa-chevron-down text-[0.7rem]"></i>
            </button>
            <button className="items-center gap-1 hover:bg-[#e1cf97] hover:text-black p-2 rounded-[1vh]">
              <span className="text-[1.7rem]">Product</span>
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
            <i className="fa-solid fa-bars-progress flex justify-center items-center text-black w-[60px] h-[60px] text-[2rem]"></i>
          </div>
        </div>
      </nav>
      <section className="flex justify-between bg-white mt-[20px] w-full bg-cover bg-center p-3 font-poppins rounded-[2vh]">
        <div className="w-[1/2]">
          <div className="text-[1.6rem] sm:text-[3.2rem] mb-[15px]">
            <span className="flex font-black">Start <p className="ml-[5px] text-orange-600">YOUR</p></span>
            <span className="flex font-black text-orange-600">DAY<p className="text-black ml-[5px]"> WITH</p></span>
            <span className="font-black">COFFEE</span>
          </div>
          <div className="sm:text-[1.2rem] leading-5 font-semibold">
            <span className="">The nest grain the finest</span>
            <span>
              <p></p>roast the most powerful
            </span>
            <span>flavor</span>
          </div>
          <div className="bg-black text-white w-[150px] rounded-[20px] mt-[10px]">
            <span className="flex justify-center items-center text-[1rem] p-2">Order Now</span>
          </div>
        </div>
        <div className="w-1/2 flex justify-center items-center relative">
          <img className="w-[200px]" src="./public/assets/image/kopibg.png" alt="" />
          <img className="absolute bottom-[20px] left-[-10px] sm:left-[280px] w-[60px] sm:w-[80px]"
            src="./public/assets/image/30-off-removebg-preview.png" alt="" />
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
        <div id="main-content" className="flex px-[20px] gap-4">
          <div
            id="left"
            className="flex flex-col w-1/2 p-2 bg-[#2B2116] rounded-[2.4vh] gap-3"
          >
            <div className="flex w-full justify-center items-center">
              <img
                className="rounded-[2vh]"
                src="public/assets/image/1.jpg"
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
                  <i className="fa-solid fa-bag-shopping text-[1.5rem] sm:text-[2rem]"></i>
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
                src="public/assets/image/2.jpg"
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
                  <i className="fa-solid fa-bag-shopping text-[1.5rem] sm:text-[2rem]"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div id="sm-category" className="flex flex-col px-[20px] gap-4 sm:hidden">
        <div id="recomended" className="flex flex-col w-full gap-3">
          <div id="title" className="flex text-[1.3rem] justify-between ">
            <span className="font-bold">Recommended</span>
            <span className="text-[#A59B8F]">View all</span>
          </div>
          <div id="content" className="flex items-center gap-3">
            <div className="flex w-[180px]">
              <img
                className="rounded-[2vh]"
                src="public/assets/image/bg1.png"
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
                src="public/assets/image/recom img.jpeg"
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
                src="public/assets/image/2.jpg"
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
