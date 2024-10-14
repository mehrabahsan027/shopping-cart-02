import { createContext, useState, useContext } from "react";
import { products } from "../components/data";
// Create the context
const MyContext = createContext();

// Create a provider component
export const MyContextProvider = ({ children }) => {
  const [searchItems, setSearchItems] = useState("");
  const [data, setData] = useState([...products]);
  const [cart, setCart] = useState([]);

  console.log(data);

  return (
    // Use the provider component from the created context
    <MyContext.Provider
      value={{ searchItems, setSearchItems, data, setData, cart, setCart }}
    >
      {children}
    </MyContext.Provider>
  );
};

// Create a custom hook to use the context easily
export const useMyContext = () => {
  return useContext(MyContext);
};
