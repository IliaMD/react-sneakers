import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() => {
    axios
      .get("https://63468669745bd0dbd37fa232.mockapi.io/items")
      .then((res) => {
        setItems(res.data);
      });
    axios
      .get("https://63468669745bd0dbd37fa232.mockapi.io/cart")
      .then((res) => {
        setCartItems(res.data);
      });
  }, []);

  const onAddtoCart = (obj) => {
    axios.post("https://63468669745bd0dbd37fa232.mockapi.io/cart", obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onRemoveFromCart = (id) => {
    axios.delete(`https://63468669745bd0dbd37fa232.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveFromCart}
        />
      )}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>
            {searchValue
              ? `Поиск по запросу: "${searchValue}"`
              : "Все кроссовки"}
          </h1>
          <div className="search-block d-flex align-center">
            <img width={18} height={18} src="/img/search.svg" alt="search" />
            {searchValue && (
              <img
                width={16}
                height={16}
                src="/img/close-cart.png"
                className="clearInput cu-p"
                alt="Clear"
                onClick={() => setSearchValue("")}
              />
            )}
            <input
              onChange={onChangeSearchInput}
              placeholder="Поиск ..."
              className="search"
              value={searchValue}
            />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items
            .filter((item) =>
              item.title.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((item, index) => (
              <Card
                key={index}
                title={item.title}
                price={item.price}
                image={item.image}
                onPlus={(item) => onAddtoCart(item)}
                onFavorite={() => console.log(123)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
