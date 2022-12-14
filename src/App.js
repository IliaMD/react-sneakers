import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
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
    axios
      .get("https://63468669745bd0dbd37fa232.mockapi.io/favorites")
      .then((res) => {
        setFavorites(res.data);
      });
  }, []);

  const onAddtoCart = (obj) => {
    axios.post("https://63468669745bd0dbd37fa232.mockapi.io/cart", obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onAddtoFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => favObj.id === obj.id)) {
        axios.delete(
          `https://63468669745bd0dbd37fa232.mockapi.io/favorites/${obj.id}`
        );
        setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
      } else {
        const { data } = await axios.post(
          "https://63468669745bd0dbd37fa232.mockapi.io/favorites",
          obj
        );
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      console.log(error);
    }
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

      <Routes>
        <Route
          path="/"
          element={
            <Home
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              items={items}
              onAddtoCart={onAddtoCart}
              onAddtoFavorite={onAddtoFavorite}
            />
          }
        />
      </Routes>

      <Routes>
        <Route
          path="/favorites"
          element={
            <Favorites items={favorites} onAddtoFavorite={onAddtoFavorite} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
