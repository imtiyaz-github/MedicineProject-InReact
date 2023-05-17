import Card from "../UI/Card";
import classes from './DisplayList.module.css';
import Available from "./Available";
import CartContext from "../Store/CartContext";
import React,{useContext,useState} from "react";



const DisplayList = (props) => {
  return (
    <Card>
      <ul className={classes.display}>
        {props.items.map((item) => (
          <Available
            key={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            quantity={item.quantity}
          />
        ))}
      </ul>
    </Card>
  );
};

export default DisplayList;