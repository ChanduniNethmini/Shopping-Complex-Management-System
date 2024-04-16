import React, { useEffect, useState } from "react";
import ShopHomePage from "../shop/Shop";
import "./productstyles.css";
import axios from "axios";
import { API_URL } from "../../constants/constants";

const HomeCart = () => {
  const [items, setItems] = useState([]);
  const [shops, setShops] = useState(localStorage.getItem("shop"));

  useEffect(() => {
    getData();
  }, [items]);

  const getData = async () => {
    setShops(localStorage.getItem("shop"));
    console.log(items);
    try {
      const response = await axios.get(API_URL + "/item/get");
      setItems(response.data.items.filter((item) => item.shopID !== shops));
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };
  return (
    <div>
      <section className="container">
        <div
          className="row justify-content-center"
          style={{ height: "600px", overflowY: "scroll" }}
        >
          {items.map((item, index) => {
            return (
              <ShopHomePage
                id={item.itemID}
                img={item.itemImage}
                title={item.itemName}
                desc={item.itemDescription}
                price={item.itemPrice}
                item={item}
                key={index}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default HomeCart;
