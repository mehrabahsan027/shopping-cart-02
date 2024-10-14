import React from "react";

import ProductItem from "./ProductItem";
import { useMyContext } from "../context/context";

function Products({ products }) {

  const {cart,setCart} = useMyContext()
 

  return (
    <section className="w-10/12 mx-auto xl:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-16 mt-3">
      {products &&
        products.length > 0 &&
        products.map((item) => {
          return <ProductItem key={item.id} item={item} />;
        })}
    </section>
  );
}

export default Products;
