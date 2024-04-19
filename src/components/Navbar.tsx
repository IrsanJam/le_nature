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
      <div ref={toRef} className="w-full hidden md:flex md:px-24 px-5 overflow-hidden h-[12vh]  justify-between items-center shadow-md m-0">
        <img src={logo} onClick={() => navigate("/")} className="cursor-pointer" alt="product" width={100} />

        <div className="md:flex hidden justify-end items-center gap-8 w-[40%]">
          <ul className="flex justify-end items-center gap-5 font-semibold text-neutral-400 hover:cursor-pointer">
            <li className="hover:text-black">Shop</li>
            <li className="hover:text-black">Offers</li>
            <li className="hover:text-black">Our Story</li>
            <li className="hover:text-black">Blog</li>
          </ul>
        </div>

        <div className="md:flex hidden  justify-center items-center gap-3 ">
          <div
            className="flex gap-1 justify-center items-center px-3 py-1 border-neutral-2
        00 border-2 rounded-md"
          >
            <img className="h-[15px] text-slate-400" src="https://img.icons8.com/metro/26/search.png" alt="search" />
            <input type="text" placeholder="Search Product" />
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
