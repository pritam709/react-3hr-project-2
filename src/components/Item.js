import React,{useContext, useState} from "react"
import cartContext from "../Store/CartContext"
import classes from "./Item.module.css"
const Item=(props)=>{
   const[large,setLarge]= useState(props.l)
   const[medium,setMedium]= useState(props.m)
   const[small,setSmall]=useState(props.s)
   
    const ctx=useContext(cartContext);
    const addItemToCartL=()=>{
        if(large===0){
            return;
        }
        setLarge(prev=>prev-1);
       
        ctx.addItem({
            id:props.id,
            name:props.name,
            price:props.price,
            l:1,
            s:0,
            m:0

        })
    }
    const addItemToCartM=()=>{
        if(medium===0){
            return;
        }
        setMedium(prev=>prev-1);
       
        ctx.addItem({
            id:props.id,
            price:props.price,
            name:props.name,
            l:0,
            s:0,
            m:1

        })
    }
    const addItemToCartS=()=>{
        if(small===0){
            return;
        }
        setSmall(prev=>prev-1);
       
        ctx.addItem({
            id:props.id,
            name:props.name,
            price:props.price,
            l:0,
            s:1,
            m:0

        })
    }
    
    return  <li className={classes.shoe}>
    <div>
      <h3>{props.name}</h3>
      <div className={classes.description}>{props.des}</div>
      <div className={classes.price}>{props.price}</div>
    </div>
    <div className={classes.btn}>
       <button onClick={addItemToCartL} ><span>Buy Large </span>( {large} )</button>
    </div>
    <div className={classes.btn}>
       <button onClick={addItemToCartM}><span>Buy Medium </span>( {medium} )</button>
    </div><div className={classes.btn}>
       <button onClick={addItemToCartS}><span>Buy Small </span>( {small} )</button>
    </div>
  </li>

}

export default Item