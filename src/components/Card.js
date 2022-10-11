function Card() {
  return (
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
  );
}

export default Card;
