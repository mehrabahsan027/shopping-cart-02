import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useMyContext } from "../context/context";
import SweetAlert2 from "react-sweetalert2";

import { delay, motion } from "framer-motion";

function ProductItem({ item }) {
  const { cart, setCart } = useMyContext();

  const [swalProps, setSwalProps] = useState({});

  const addToCart = (id, title, description, imgSrc, price) => {
    const obj = {
      id,
      title,
      description,
      imgSrc,
      price,
    };
    setCart((prevCart) => {
      const updatedCart = [...prevCart, obj];
      console.log("Updated cart=", updatedCart);
      return updatedCart;
    });

    setSwalProps({
      show: true,
      title: "Product Added",

      icon: "success",
    });
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        key={item.id}
        className="card border border-yellow-600 shadow-sm shadow-yellow-500  group  w-full h-[600px] "
      >
        <figure className="px-10 pt-10 group-hover:scale-110 duration-300">
          <img
            src={item.imgSrc}
            alt={item.title}
            className="rounded-xl object-cover"
          />
        </figure>
        <div className="card-body items-center  text-center ">
          <h2 className="card-title">{item.title}</h2>
          <p>{item.description}</p>
          <p className="text-xl">
            {" "}
            {item.price} <span className="text-2xl">$</span>{" "}
          </p>

          <div className="flex justify-between gap-x-5 items-center">
            <Link to={`/product/${item.id}`}>
              <div className="card-actions">
                <button className="btn btn-accent btn-sm xl:btn-md">
                  Details
                </button>
              </div>
            </Link>

            <div className="card-actions">
              <button
                onClick={() =>
                  addToCart(
                    item.id,
                    item.title,
                    item.description,
                    item.imgSrc,
                    item.price
                  )
                }
                className="btn btn-warning btn-sm lg:btn-md"
              >
                Add to Cart
              </button>
              <SweetAlert2 {...swalProps} />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default ProductItem;
