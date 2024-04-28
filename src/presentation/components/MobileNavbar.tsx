import { useState } from "react";
import logo from "/image/logo.png";
import { useNavigate } from "react-router-dom";

const MobileNavbar = () => {
  const [showHamMenu, setShowHam] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <nav className="bg-white border-gray-200 lg:hidden fixed w-screen shadow-md z-[9999] md:px-14">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a onClick={() => navigate("/")} className="flex cursor-pointer items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} className="h-8" alt="Flowbite Logo" />
          </a>
          <div className="flex md:order-2">
            <button
              onClick={() => setShowHam(!showHamMenu)}
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              className="lg:hidden text-gray-500  hover:bg-gray-100  focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-lg text-sm p-2.5 me-1"
            >
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
              <span className="sr-only">Search</span>
            </button>

            <button
              onClick={() => setShowHam(!showHamMenu)}
              data-collapse-toggle="navbar-search"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
              aria-controls="navbar-search"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
        </div>

        {showHamMenu && (
          <>
            <div className="p-4 font-Poppins transition duration-200">
              <div
                className="flex gap-1 justify-center items-center py-1 border-neutral-2
00 border-2 rounded-md md:w-[50%] w-full"
              >
                <img className="h-[15px] pl-3 text-slate-400" src="https://img.icons8.com/metro/26/search.png" alt="search" />
                <input type="text" placeholder="Search Product" className="rounded-md outline-1 focus:outline-none focus:ring-black mx-2 w-full h-full" />
              </div>
              <ul className="cursor-pointer text-zinc-400 mt-5 ">
                <li onClick={() => navigate("/shop")} className="hover:text-white hover:rounded-md hover:bg-cyan-400 border-b-[0.5px] border-opacity-40 p-2 border-zinc-200">
                  Shop
                </li>
                <li onClick={() => navigate("/promo")} className="hover:text-white hover:rounded-md hover:bg-cyan-400 border-b-[0.5px] border-opacity-40 p-2 border-zinc-200">
                  Promo
                </li>
                <li onClick={() => navigate("/story")} className="hover:text-white hover:rounded-md hover:bg-cyan-400 border-b-[0.5px] border-opacity-40 p-2 border-zinc-200">
                  Our Story
                </li>
                <li onClick={() => navigate("/blog")} className="hover:text-white hover:rounded-md hover:bg-cyan-400 border-b-[0.5px] border-opacity-40 p-2 border-zinc-200">
                  Blog
                </li>
              </ul>
            </div>
            <div className="flex justify-center items-center cursor-pointer" onClick={() => setShowHam(!showHamMenu)}>
              <img width="64" height="64" src="https://img.icons8.com/cotton/64/expand-arrow.png" alt="expand-arrow" />
            </div>
          </>
        )}
      </nav>
    </>
  );
};

export default MobileNavbar;
