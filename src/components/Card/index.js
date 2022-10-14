import React, { useState } from "react";
import styles from "./Card.module.scss";

function Card({
  id,
  title,
  price,
  image,
  onFavorite,
  onPlus,
  favorited = false,
}) {
  const [isAdded, setIsAdded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(favorited);

  const onClickPlus = () => {
    onPlus({ title, price, image });
    setIsAdded(!isAdded);
  };

  const onClickFavorite = () => {
    onFavorite({ id, title, price, image });
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img
          src={isFavorite ? "/img/heart-liked.svg" : "/img/heart-unliked.svg"}
          alt="unliked"
          onClick={onClickFavorite}
        />
      </div>
      <img width={133} height={112} src={image} alt="sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column r">
          <span>Цена:</span>
          <b>{price} руб.</b>
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
