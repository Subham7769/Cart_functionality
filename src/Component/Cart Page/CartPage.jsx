import React from "react";
import "./CartPage.css";
import Card from "../Card/Card";
import { useSelector } from "react-redux";
import { RESETCART } from "../../redux/reducer/CartReducer";
import { useDispatch } from "react-redux";

const Cart = () => {
  const Dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log(cartItems);

  return (
    <main>
      <h1>My Cart</h1>
      <div className="cartContainer">
        <div className="cartProducts">
          {cartItems.length !== 0 ? (
            cartItems.map((item) => <Card item={item} page={"cart"} />)
          ) : (
            <h1>No item</h1>
          )}
        </div>
        <div className="cartSection">
          <h3>Checkout List</h3>
          <div className="listContainer">
            <table>
              {cartItems.map((item) => {
                return (
                  <tr>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                  </tr>
                );
              })}
            </table>
          </div>
          <div className="Total">
            <table>
              <tr>
                <td>Total</td>
                <td>
                  ${cartItems.reduce((value, item) => value + item.price, 0)}
                </td>
              </tr>
            </table>
          </div>
          <div className="ButtonConatiner">
            <button
              className="CheckoutBtn"
              onClick={() => {
                Dispatch(RESETCART());
              }}
            >
              Click to CheckOut
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Cart;
