import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "./data";
import Products from "./Products";
import { useMyContext } from "../context/context";

function Search() {
  const { search } = useParams();
  const [ searchProducts, setSearchProducts ] = useState()

  useEffect(() => {
    const searchFun = () => {
      const searchedItems = products.filter((item) => {
        return item?.title.toLowerCase().includes(search?.toLowerCase())
       
      });

     
     setSearchProducts(searchedItems)
     console.log(searchProducts);
     
     

      console.log(searchedItems);
    };

  
    searchFun()

  }, [search]);

  return (
    <>
      <Products products={searchProducts} />
    </>
  );
}

export default Search;
