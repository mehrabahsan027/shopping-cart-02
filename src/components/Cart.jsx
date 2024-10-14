import React from "react";
import { useMyContext } from "../context/context";

function Cart() {
  const { cart, setCart } = useMyContext();

  const handleDelete = (id) => {
    const filter = cart.filter((item) => item.id !== id);
setCart(filter)
    
  };

  

  return (
    <>
      <section className="flex flex-col gap-8   items-center divide-y divide-yellow-500 ">
       
        {
          cart.length ==0 ? <h3 className="text-center text-3xl">Your Cart is Empty</h3> :  <h2 className="text-center text-3xl"></h2>
        }
        {cart &&
          cart.length > 0 &&
          cart.map((product) => {
            return (
              <div
                key={product.id}
                className="text-center  w-full lg:w-6/12  lg:py-6 space-y-3 flex flex-col lg:flex-row justify-center lg:justify-evenly items-center "
              >
                <div className="w-32 lg:w-40 mt-8 lg:mt-0">
                  <img
                    className="w-full"
                    src={product.imgSrc}
                    alt={product.title}
                  />
                </div>

                <div className="space-y-5">
                  <h2>{product.title}</h2>
                  <p>{product.description}</p>
                  <p>{product.price}$</p>

                  <div className="space-x-3">
                    <button className="btn btn-warning btn-sm lg:btn-md">
                      Buy Now
                    </button>

                    <button
                      onClick={() => handleDelete(product.id)}
                      className="btn btn-error btn-sm lg:btn-md"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </section>
    </>
  );
}

export default Cart;
