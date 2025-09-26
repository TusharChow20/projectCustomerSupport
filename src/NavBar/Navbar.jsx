import React from "react";
import { FaPlus } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="interFont ">
      <div className="navbar bg-base-100 shadow-sm px-3  lg:px-10 p-0 justify-between ">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost xl:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm  dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow justify-end"
            >
              <li>
                <a>Home</a>
              </li>

              <li>
                <a>FAQ</a>
              </li>
              <li>
                <a>Changelog</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>Download</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost md:text-2xl lg:text-3xl font-bold p-0">
            CS — Ticket System
          </a>
        </div>
        <div className="navbar   hidden xl:flex justify-end">
          <ul className="menu menu-horizontal  px-1 lg:text-[24px] text-[10px]">
            <li>
              <a>Home</a>
            </li>

            <li>
              <a>FAQ</a>
            </li>
            <li>
              <a>Changelog</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>Download</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <div className="">
          <a className="btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white text-[10px] p-3 md:text-xl md:p-5 lg:text-2xl lg:p-8 whitespace-nowrap  rounded-xl">
            <FaPlus />
            New Ticket
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
