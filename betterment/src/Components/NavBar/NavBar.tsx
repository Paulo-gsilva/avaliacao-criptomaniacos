import * as React from "react";
import { MarginContainer } from "../Tailwind/Tailwind";
import bettermentIcon from "../Images/img/Betterment Logo Icon SVG Footer.svg";

function NavBar() {
  return (
    <header className="header-menu bg-amber-100 w-full md:h-28 h-16 flex flex-col items-center">
      <div className=" w-full h-full">
        <nav className="bg-zinc-900 w-full h-10 hidden md:flex flex-row items-center justify-end font-extrabold text-white">
          <ul
            className={
              MarginContainer +
              "w-72 text-sm font-bold pr-4 flex flex-row justify-between"
            }
          >
            <li className="hover:text-gray-400 uppercase underline">
              <a href="/">Individuals</a>
            </li>
            <li className="hover:text-gray-400 uppercase">
              <a href="/">Employers</a>
            </li>
            <li className="hover:text-gray-400 uppercase">
              <a href="/">Advisor</a>
            </li>
          </ul>
        </nav>
        <div
          className={
            MarginContainer +
            "header-menu-content h-18 mt-4 px-4 flex flex-row justify-between items-center"
          }
        >
          <nav className="header-menu-content-nav flex flex-row justify-start items-center">
            <img className="h-6" src={bettermentIcon} alt="betterment icon " />
            <ul className="ml-8 font-normal text-lg hidden md:flex flex-row justify-evenly items-center">
              <li className="mr-5 cursor-default hover:text-indigo-600 after:content-['▼'] after:ml-1 after:text-xs">
                Investing
              </li>
              <li className="cursor-pointer">
                <a href="/todo">Todo App</a>
              </li>
            </ul>
          </nav>
          <div className="header-menu-content-login hidden md:flex flex-row justify-evenly items-center">
            <h3 className="text-lg">Log in</h3>
            <button className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-sm  border border-transparent bg-blue-600 px-6 py-2 text-base font-semibold text-white shadow-sm hover:bg-indigo-700">
              Get started
            </button>
          </div>
          <button
            type="button"
            className="flex md:hidden after:content-['☰'] after:text-black md:after:hidden after:text-2xl after:font-bold after:cursor-pointer"
          ></button>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
