import React, { useState } from "react";

import { delay, motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { IoCartSharp } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
import Sidebar from "./Sidebar";
import { products } from "./data";
import { useMyContext } from "../context/context";

function Navbar() {
  const { searchItems, setSearchItems } = useMyContext();

  const { data, setData } = useMyContext();

  const { cart } = useMyContext();

  const navigate = useNavigate();

  const filterProductByCategory = (category) => {
    const element = products.filter((product) => product.category == category);

    setData(element);
  };

  function handleSubmit(e) {
    e.preventDefault();
    navigate(`/search/${searchItems}`);
    setSearchItems("");
  }
  return (
    <>
      <header className="sticky top-0 z-10 bg-black">
        <section className="w-full xl:w-10/12 mx-auto">
          <div className="navbar gap-x-8 px-5 py-3">
            <Link to={"/"}>
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 0.5,
                  },
                }}
                className="flex-1"
              >
                <button
                  className="btn btn-warning  text-xl"
                  onClick={() => setData(products)}
                >
                  Logo
                </button>
              </motion.div>
            </Link>

            <motion.form
              initial={{
                y: -70,
              }}
              animate={{
                y: 0,
                transition: {
                  delay: 0.5,
                  duration: 0.3,
                },
              }}
              onSubmit={handleSubmit}
              className="form-control relative border border-yellow-600 w-full xl:w-8/12 "
            >
              <input
                value={searchItems}
                onChange={(e) => setSearchItems(e.target.value)}
                type="text"
                placeholder="Search"
                className="input input-bordered w-full"
              />
              <IoSearchSharp
                onClick={handleSubmit}
                className="absolute top-3 right-3 text-xl"
              />
            </motion.form>

            <Link to={"/cart"}>
              <motion.div
                initial={{
                  x: 100,
                }}
                animate={{
                  x: 0,
                  transition: {
                    duration: 0.5,
                  },
                }}
                className=" lg:ml-24 relative z-10 border border-yellow-600 rounded-md"
              >
                <button className="btn btn-sm lg:btn-md">
                  <IoCartSharp className="text-2xl" />
                  <div className=" text-lg absolute -top-1 right-2 text-yellow-600 font-semibold">
                    {cart.length}
                  </div>
                </button>
              </motion.div>
            </Link>
          </div>
        </section>
      </header>
      <Sidebar
        filterProductByCategory={filterProductByCategory}
        setData={setData}
      />
    </>
  );
}

export default Navbar;
