import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const addItem = (price, item) => {
    setTotalPrice(totalPrice + price);
    cartItems.push(item);
  };

  return (
    <div className="App">
      <h1>My Bakery</h1>
      {bakeryData.map((item, index) => (
        <BakeryItem
          clickHandler={() => addItem(item.price, item.name)}
          item={item}
          index={index}
          image={item.image}
        />
      ))}
      <div>
        <h2>Cart</h2>
        <div>
          <p>
            <b>Total Price:</b> {totalPrice}
            <div>
              {cartItems.map((item) => (
                <li>{item}</li>
              ))}
              ;
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
