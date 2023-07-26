
import React,{useRef} from "react";
import classes from "./AddShoes.module.css";
const AddShoes = (props) => {
   const nameRef= useRef();
   const desRef= useRef();
   const priceRef= useRef();
   const lRef= useRef();
   const mRef= useRef();
   const sRef= useRef();
  const  formSubmitHandler =(event)=>{
    event.preventDefault();
    const shoe={
        id:nameRef.current.value,
        name:nameRef.current.value,
        des:desRef.current.value,
        price:priceRef.current.value,
        l:lRef.current.value,
        m:mRef.current.value,
        s:sRef.current.value,
    }

    props.onFormSubmit(shoe);

  }
  return (
    <form onSubmit={formSubmitHandler} className={classes["shoe-input"]}>
      <label>Shoe Name:</label>
      <input ref={nameRef} type="text"></input>
      <label>Description:</label>
      <input ref={desRef} type="text"></input>
      <label>Price:</label>
      <input ref={priceRef} type="number"></input>
      <br></br>
      <label>Enter Quantity Available:</label>
      <label>L</label>
      <input ref={lRef} type="number"></input>
      <label>M</label>
      <input ref={mRef} type="number"></input>
      <label>S</label>
      <input ref={sRef} type="number"></input>
      <button type="submit">Add Product</button>
    </form>
  );
};
export default AddShoes;
