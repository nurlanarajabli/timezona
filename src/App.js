import React, { useEffect, useState } from "react";
import Router from "./Router/Router";
import axios from "axios";
import { Provider } from "react-redux";
import { store } from "./Store/store";

const App = () => {
  const [products, setProducts] = useState([]);
  const [student, setStudent] = useState("Filankes");
  const [color, setColor] = useState("red");

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((res) => {
      setProducts(res.data.products);
    });
  }, []);

  const data = { products, setProducts, student, color, setColor };

  return (
    <div>
      <Provider store={store}>
    
          <Router />
       
      </Provider>
    </div>
  );
};

export default App;