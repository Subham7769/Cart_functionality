import React from "react";
import "./HomePage.css";
import Card from "../Card/Card";
import { useEffect } from "react";
import { fetchItems } from "../../redux/reducer/CartReducer";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const HomePage = () => {
  const allProducts = useSelector((state) => state.cart.allProducts);
  // console.log(allProducts)
  const Dispatch = useDispatch();

  useEffect(() => {
    Dispatch(fetchItems());
  }, []);

  return (
    <main>
      <h1>All Items</h1>
      <div className="AllProducts">
        {
          allProducts.map((item)=><Card item={item} page={"home"}/>)
        }
        
      </div>
    </main>
  );
};

export default HomePage;
