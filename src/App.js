function App() {
  return (
    <div className="wrapper clear">
      <div className="overlay">
        <div className="drawer">
          <h2 className="d-flex justify-between mb-30">
            Корзина
            <img
              width={25}
              height={25}
              src="/img/close-cart.png"
              className="cu-p"
            />
          </h2>

          <div className="cartItems">
            <div className="cartItem d-flex align-center mb-20">
              <div
                style={{ backgroundImage: "url(/img/sneakers/sneak1.jpg)" }}
                className="cartItem_img"
              ></div>
              <div className="mr-20">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img className="removeBtn" src="/img/remove.svg" alt="remove" />
            </div>

            <div className="cartItem d-flex align-center mb-20">
              <div
                style={{ backgroundImage: "url(/img/sneakers/sneak1.jpg)" }}
                className="cartItem_img"
              ></div>
              <div className="mr-20">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img className="removeBtn" src="/img/remove.svg" alt="remove" />
            </div>
          </div>

          <div className="cartTotalBlock">
            <ul>
              <li>
                <span>Итого: </span>
                <div></div>
                <b>21 498 руб.</b>
              </li>
              <li>
                <span>Налог 5%: </span>
                <div></div>
                <b>1074 руб. </b>
              </li>
            </ul>
            <button className="greenButton">
              Оформить заказ <img src="/img/arrow.svg" alt="arrow" />
            </button>
          </div>
        </div>
      </div>

      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" alt="logo" />
          <div>
            <h3 className="text-uppercase">React sneakers </h3>
            <p className="opacity-5git "> Магазин лучших кросcовок</p>
          </div>
        </div>
        <ul className="d-flex ">
          <li className="mr-30">
            <img width={18} height={18} src="/img/cart.svg" alt="cart" />
            <span>1205 руб.</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/user.svg" alt="user" />
          </li>
        </ul>
      </header>

      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex align-center">
            <img width={18} height={18} src="/img/search.svg" alt="search" />
            <input placeholder="Поиск ..." className="search" />
          </div>
        </div>
        <div className="d-flex">
          <div className="card">
            <div className="favorite">
              <img src="/img/heart-unliked.svg" alt="unliked" />
            </div>
            <img
              width={133}
              height={112}
              src="/img/sneakers/sneak1.jpg"
              alt="sneakers"
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column r">
                <span>Цена:</span>
                <b>12 999 р</b>
              </div>
              <img
                className="btn-plus"
                width={11}
                height={11}
                src="/img/btn-plus.svg"
                alt="plus"
              />
            </div>
          </div>

          <div className="card">
            <div className="favorite">
              <img src="/img/heart-unliked.svg" alt="unliked" />
            </div>
            <img
              width={133}
              height={112}
              src="/img/sneakers/sneak2.jpg"
              alt="sneakers"
            />
            <h5>Мужские Кроссовки Nike Air Max 270</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column r">
                <span>Цена:</span>
                <b>12 999 р</b>
              </div>
              <img
                className="btn-plus"
                width={11}
                height={11}
                src="/img/btn-plus.svg"
                alt="plus"
              />
            </div>
          </div>

          <div className="card">
            <div className="favorite">
              <img src="/img/heart-unliked.svg" alt="unliked" />
            </div>
            <img
              width={133}
              height={112}
              src="/img/sneakers/sneak3.jpg"
              alt="sneakers"
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column r">
                <span>Цена:</span>
                <b>12 999 р</b>
              </div>
              <img
                className="btn-plus"
                width={11}
                height={11}
                src="/img/btn-plus.svg"
                alt="plus"
              />
            </div>
          </div>

          <div className="card">
            <div className="favorite">
              <img src="/img/heart-unliked.svg" alt="unliked" />
            </div>
            <img
              width={133}
              height={112}
              src="/img/sneakers/sneak4.jpg"
              alt="sneakers"
            />
            <h5>Кроссовки Puma X Aka Boku Future Rider</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column r">
                <span>Цена:</span>
                <b>12 999 р</b>
              </div>
              <img
                className="btn-plus"
                width={11}
                height={11}
                src="/img/btn-plus.svg"
                alt="plus"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
