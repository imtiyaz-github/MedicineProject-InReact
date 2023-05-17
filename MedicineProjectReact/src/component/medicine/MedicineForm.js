import React, { useState } from "react";
import classes from "./MedicineForm.module.css";
import Card from "../UI/Card";

const MedicineForm = (props) => {
  const [mName, setName] = useState("");
  const [mDescription, setDescription] = useState("");
  const [priceI, setPriceI] = useState();
  const [quantity, setQuantity] = useState();

  const mNameHandler = (event) => {
    setName(event.target.value);
  };

  const mDescriptionHandler = (event) => {
    setDescription(event.target.value);
  };

  const pHandler = (event) => {
    setPriceI(event.target.value);
  };

  const qHandler = (event) => {
    setQuantity(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const order = {
      name: mName,
      description: mDescription,
      price: priceI,
      quantity: quantity,
    };
    props.onSaveData(order);
    console.log(order);
  };

  return (
    <Card>
      <form action="" className={classes.form} onSubmit={submitHandler}>
        <label htmlFor="" className={classes.f1}>
          Medicine Name:
        </label>
        <input type="text" onChange={mNameHandler} />
        <label htmlFor="" className={classes.f1}>
          Description:
        </label>
        <input type="text" onChange={mDescriptionHandler} />
        <label htmlFor="" className={classes.f1}>
          Price:
        </label>
        <input type="number" onChange={pHandler} />
        <label htmlFor="" className={classes.f1}>
          Quatinty:
        </label>
        <input type="number" onChange={qHandler} />

        <button className={classes.f2}>Add To List</button>
      </form>
    </Card>
  );
};
export default MedicineForm;
