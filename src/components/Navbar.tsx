import { useEffect, useRef } from "react";
import logo from "../../public/image/logo.png";
import MobileNavbar from "./MobileNavbar";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const toRef: any = useRef();

  useEffect(() => {
    toRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
      <div ref={toRef} className="w-full font-Poppins hidden lg:flex lg:px-24 md:px-10 px-5 overflow-hidden h-[12vh]  justify-between items-center shadow-lg m-0">
        <img src={logo} onClick={() => navigate("/")} className="cursor-pointer" alt="product" width={100} />

        <div className="md:flex hidden md:justify-start lg:justify-end items-center gap-8 md:w-[35%] lg:w-[40%]">
          <ul className="flex justify-end items-center lg:text-base md:text-sm gap-5 font-semibold text-neutral-400 hover:cursor-pointer">
            <li onClick={() => navigate("/shop")} className="hover:text-cyan-400">
              Shop
            </li>
            <li onClick={() => navigate("/promo")} className="hover:text-cyan-400">
              Promo
            </li>
            <li onClick={() => navigate("/story")} className="hover:text-cyan-400">
              Our Story
            </li>
            <li onClick={() => navigate("/blog")} className="hover:text-cyan-400">
              Blog
            </li>
          </ul>
        </div>

        <div className="md:flex hidden  justify-end items-center gap-3 md:w-[55%] lg:w-[35%]">
          <div
            className="flex gap-1 justify-center items-center py-1 border-neutral-2
        00 border-2 rounded-md w-[50%]"
          >
            <img className="h-[15px] pl-3 text-slate-400" src="https://img.icons8.com/metro/26/search.png" alt="search" />
            <input type="text" placeholder="Search Product" className="rounded-md outline-1 focus:outline-none focus:ring-black mx-2 w-full h-full" />
          </div>

          <div className="flex gap-4 justify-center items-center">
            <img width="15" height="15" className="object-cover" src="https://img.icons8.com/forma-thin/24/shopping-cart.png" alt="shopping-cart" /> <span>Cart (0)</span>
          </div>

          <div className="h-full rounded-full bg-neutral-50">
            <img width="32" height="32" className="object-cover" src="https://img.icons8.com/windows/32/user.png" alt="user" />
          </div>
        </div>
      </div>

      <MobileNavbar />
    </>
  );
};

export default Navbar;
