import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const arr = [
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 12999,
    image: "/img/sneakers/sneak1.jpg",
  },
  {
    title: "Мужские Кроссовки Nike Air Max 270",
    price: 12999,
    image: "/img/sneakers/sneak2.jpg",
  },
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 8499,
    image: "/img/sneakers/sneak3.jpg",
  },

  {
    title: "Кроссовки Puma X Aka Boku Future Rider",
    price: 8999,
    image: "/img/sneakers/sneak4.jpg",
  },
];

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex align-center">
            <img width={18} height={18} src="/img/search.svg" alt="search" />
            <input placeholder="Поиск ..." className="search" />
          </div>
        </div>
        <div className="d-flex">
          {arr.map((obj) => (
            <Card title={obj.title} price={obj.price} image={obj.image} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
