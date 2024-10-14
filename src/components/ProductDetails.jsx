import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { products } from "./data";
import ProductItem from "./ProductItem";
import { useMyContext } from "../context/context";
import SweetAlert2 from 'react-sweetalert2';

function ProductDetails() {
  const {setCart,cart} = useMyContext()
  const { id } = useParams();
  const [swalProps, setSwalProps] = useState({});

  console.log(id);

  const [product, setProduct] = useState();
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const filteredProduct = products.filter((product) => product.id == id);

    setProduct(filteredProduct[0]);

    const catProduct = products.filter(
      (item) => item.category == product?.category
    );

    setCategory(catProduct);
    console.log(catProduct);
  }, [id, product?.category]);

  console.log(product?.category);

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
      title: 'Product Added',
     
      icon:'success'
  });
  };

  return (
    <section className="w-full min-h-screen  mx-auto py-8">
      <div className=" flex flex-col lg:flex-row py-5 bg-white items-center justify-center text-black shadow-xl">
        <figure className="w-auto lg:w-5/12">
          <img src={product?.imgSrc} className="object-cover w-full h-full" />
        </figure>
        <div className="space-y-5 text-center">
          <h2 className="text-3xl">{product?.title}</h2>
          <p>{product?.description}</p>
          <p className="text-xl font-semibold">{product?.price} $</p>
          <div className="">
            <button
            
            onClick={() =>
              addToCart(
              product?.id,
                product?.title,
                product?.description,
                product.imgSrc,
                product?.price
              )
            }
            
            className="btn btn-warning  text-xl">Add To Cart</button>
            <SweetAlert2 {...swalProps} />
          </div>
        </div>
      </div>

      <div className="text-center mt-4 text-3xl">
        <h2>Related Products</h2>
      </div>
      <section className="w-full px-8 mx-auto xl:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-16 mt-3">
        {category?.map((item) => {
          return <ProductItem item={item} />;
        })}
      </section>
    </section>
  );
}

export default ProductDetails;
