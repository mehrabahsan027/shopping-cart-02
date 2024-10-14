import React from "react";

import { products } from "./data";



function Sidebar({ filterProductByCategory, setData }) {
  return (
    <div className="drawer mt-3">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
    
        <div className="navbar  w-full xl:px-16">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="mx-2  flex-1 font-semibold px-2">
            <h2 className="btn btn-outline btn-accent btn-sm">
              Filter By{"-->"}
            </h2>
          </div>
          <div className="mx-2   font-semibold px-2">
            <button
              onClick={() => setData(products)}
              className="btn btn-error btn-outline text-white  btn-sm"
            >
              Reset Filter
            </button>
          </div>
          <div className="hidden flex-none lg:block">
            <ul className="menu menu-horizontal  space-x-5">
              {/* Navbar menu content here */}
              <li
                onClick={() => filterProductByCategory("mobiles")}
                className="border border-white"
              >
                <a>Mobile</a>
              </li>
              <li
                className="border border-white"
                onClick={() => filterProductByCategory("laptops")}
              >
                <a>Laptop</a>
              </li>
              <li
                className="border border-white"
                onClick={() => filterProductByCategory("tablets")}
              >
                <a>Tablet</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="drawer-side  h-full z-20  items-center justify-center">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu  min-h-full bg-black bg-opacity-30  flex flex-col justify-center items-center  mt-24 space-y-5 w-80 p-4">
          {/* Sidebar content here */}
          <li
            onClick={() => filterProductByCategory("mobiles")}
            className="border border-white  text-center mx-auto"
          >
            <a className="text-center">Mobile</a>
          </li>
          <li
            onClick={() => filterProductByCategory("laptops")}
            className="border border-white mx-auto"
          >
            <a>Laptop</a>
          </li>
          <li
            onClick={() => filterProductByCategory("tablets")}
            className="border border-white mx-auto"
          >
            <a>Tablet</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
