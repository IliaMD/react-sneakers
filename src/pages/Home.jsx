import Card from "../components/Card";

function Home({
  items,
  onAddtoCart,
  onAddtoFavorite,
  onChangeSearchInput,
  searchValue,
  setSearchValue,
}) {
  return (
    <div className="content p-40">
      <div className="d-flex align-center mb-40 justify-between">
        <h1>
          {searchValue ? `Поиск по запросу: "${searchValue}"` : "Все кроссовки"}
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
              onPlus={(obj) => onAddtoCart(obj)}
              onFavorite={(obj) => onAddtoFavorite(obj)}
            />
          ))}
      </div>
    </div>
  );
}

export default Home;
