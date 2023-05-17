import React from "react";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../Store/CartContext";
import { useContext } from "react";


const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + +item.quantity;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        {" "}
        {/* <MedicineIcon />{" "} */}
      </span>
      <span>Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;