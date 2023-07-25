import classes from "./Shoes.module.css"
import Item from "./Item";
const Shoes=(props)=>{

    return (
        <div className={classes.shoes}>
          <ul>
            {props.array.map((item) => (
              <Item
                key={item.name}
                id={item.name}
                name={item.name}
                price={item.price}
                des={item.des}
                l={item.l}
                s={item.s}
                m={item.m}
              />
            ))}
          </ul>
        </div>
      );

}
export default Shoes;