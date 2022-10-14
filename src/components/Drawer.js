function Drawer({ onClose, items = [], onRemove }) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
          Корзина
          <img
            width={25}
            height={25}
            src="/img/close-cart.png"
            className="cu-p"
            onClick={onClose}
            alt="close-cart"
          />
        </h2>

        {items.length > 0 ? (
          <div className="d-flex flex-column flex">
            <div className="cartItems">
              {items.map((obj) => (
                <div className="cartItem d-flex align-center mb-20">
                  <div
                    style={{ backgroundImage: `url(${obj.image})` }}
                    className="cartItem_img"
                  ></div>
                  <div className="mr-20">
                    <p className="mb-5">{obj.title}</p>
                    <b>{obj.price} руб.</b>
                  </div>
                  <img
                    className="removeBtn"
                    src="/img/remove.svg"
                    alt="remove"
                    onClick={() => onRemove(obj.id)}
                  />
                </div>
              ))}
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
              <div className=" d-flex justify-center">
                <button className="greenButton">
                  Оформить заказ <img src="/img/arrow.svg" alt="arrow" />
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="cartEmpty d-flex flex-column flex ">
            <div className="d-flex align-center flex-column justify-center flex">
              <img
                className="mb-20"
                width={120}
                height={120}
                src="/img/empty-cart.jpg"
                alt="EmptyCart"
              />
              <h2>Корзина пустая</h2>
              <p className="opacity-6 text-center">
                Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
              </p>
            </div>
            <div className="d-flex justify-center">
              <button onClick={onClose} className="greenButton">
                <img src="/img/arrow.svg" alt="arrow" />
                Вернуться назад
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Drawer;
