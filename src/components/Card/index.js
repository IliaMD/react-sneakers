import React, { useState } from "react";
import styles from "./Card.module.scss";

function Card(props) {
  const [isAdded, setIsAdded] = useState(false);

  const onClickPlus = () => {
    setIsAdded(!isAdded);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img
          src="/img/heart-unliked.svg"
          alt="unliked"
          onClick={props.onFavorite}
        />
      </div>
      <img width={133} height={112} src={props.image} alt="sneakers" />
      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column r">
          <span>Цена:</span>
          <b>{props.price} руб.</b>
        </div>
        <img
          className={styles.btnPlus}
          src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
          alt="plus"
          onClick={onClickPlus}
        />
      </div>
    </div>
  );
}

export default Card;
