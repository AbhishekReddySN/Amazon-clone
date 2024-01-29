import React from "react";
import "../Home.css";
import { AMAZON_BG } from "../utils/consants";
import Product from "./Product";
const Home = () => {
  return (
    <div className="home">
      <div className="home_container ">
        <img className="home_image" src={AMAZON_BG} />
      </div>
      <div className="home_row">
        <Product
          id="1234"
          title="The Lean startUp"
          price={29.99}
          image="https://m.media-amazon.com/images/I/51PAIR77wJL.jpg"
          rating={5}
        />
        <Product
          id="2345"
          title="Wireless Bluetooth Earbuds"
          price={39.99}
          image="https://m.media-amazon.com/images/I/71jeUxxQYZL._SL1500_.jpg"
          rating={4}
        />{" "}
      </div>
      <div className="home_row">
        <Product
          id="4321"
          title="Smartwatch with Fitness Tracker"
          price={79.99}
          image="https://m.media-amazon.com/images/I/71Swqqe7XAL._SL1500_.jpg"
          rating={4}
        />
        <Product
          id="555"
          title="Compact Coffee Maker"
          price={49.99}
          image="https://m.media-amazon.com/images/I/71FHT-TYvNL._SL1500_.jpg"
          rating={4}
        />
        <Product
          id="77"
          title="Foldable Laptop Stand"
          price={24.99}
          image="https://m.media-amazon.com/images/I/71Swqqe7XAL._SL1500_.jpg"
          rating={4}
        />{" "}
      </div>
      <div className="home_row">
        <Product
          id="2323"
          title="Portable External Hard Drive"
          price={89.99}
          image="https://m.media-amazon.com/images/I/61KcEKODKAL._SL1000_.jpg"
          rating={5}
        />{" "}
      </div>
    </div>
  );
};

export default Home;
