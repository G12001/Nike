import { useState } from "react";
import { hamburger, cross, menuDark, crossDark } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants/constants.index";
import Swicher from "../DarkMode/Swicher";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  return (
    <header className="padding-x shadow-lg dark:shadow-xl bg-white py-8 fixed z-30 w-full max-lg:rounded-b-xl dark:bg-gray-900">
      <nav className="flex justify-between items-center max-container flex-col">
        <div className="flex justify-between w-full">
          <a href="/">
            <img
              src={headerLogo}
              alt="logo"
              width={129}
              height={29}
              className="m-0 w-[129px] h-[29px]"
            />
          </a>
          <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-montserrat leading-normal text-lg text-slate-gray hover:text-slate-400"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat wide:mr-24">
            <Swicher />

            <div
              className="hidden max-lg:block cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              <img
                src={isOpen ? cross : hamburger}
                alt="hamburger icon"
                width={25}
                height={25}
              />
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="mt-8 flex flex-col">
            <ul className="flex flex-col justify-center items-center gap-8 lg:hidden">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="font-montserrat leading-normal text-lg text-slate-gray hover:text-slate-400"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Nav;
