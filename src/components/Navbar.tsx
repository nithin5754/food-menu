import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

import CompanyLogoMobile from "./CompanyLogoMobile";
import CompanyLogo from "./CompanyLogo";

const Navbar = () => {
  const [isHidden, setIsHidden] = useState(false);
  return (
    <nav className="bg-(--color-customDark) ">
      <div className=" max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 font-[Oswald]">
        <div className="relative z-50">
          <CompanyLogo />
        </div>
        <div className="relative z-50">
          <CompanyLogoMobile />
        </div>
        <button
          onClick={() => setIsHidden(!isHidden)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  "
        >
          <GiHamburgerMenu size={28} />
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-(--color-customDark) ">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white focus:text-blue-600 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 "
              >
                HOME
              </a>
            </li>
            <li>
              <a
           href="/"
           className="block py-2 px-3 text-white focus:text-blue-600 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 "
           >
          MENU
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white focus:text-blue-600 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 "
              >
               MAKE A RESERVATION
              </a>
            </li>
           
          </ul>
        </div>
        {/* MOBILE SIDE BAR VERSION DOWN HERE  */}

        <div className={`${isHidden ? "block" : "hidden"} w-full  md:w-auto`}>
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-(--color-customDark) md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  ">
          <li>
              <a
                href="#"
                className="block py-2 px-3 text-white focus:text-blue-600 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 "
              >
                HOME
              </a>
            </li>
            <li>
              <a
                href="/"
                className="block py-2 px-3 text-white focus:text-blue-600 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 "
              >
          MENU
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white focus:text-blue-600 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 "
              >
               MAKE A RESERVATION
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
