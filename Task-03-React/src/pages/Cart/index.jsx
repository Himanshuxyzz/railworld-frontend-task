import React, { useEffect } from "react";
import NavBar from "../../components/Header";
import { useRef } from "react";

const Cart = () => {
  const Div = useRef(null);

  useEffect(() => {
    let a = document.querySelector(".cart-page");
    console.log(a);
  }, []);

  return (
    <>
      <NavBar />
      <div ref={Div} className="cart-page-container">
        <section className=""></section>
      </div>
    </>
  );
};

export default Cart;
