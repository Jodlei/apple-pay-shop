import './App.css'

const products = [
  { id: 1, name: "Товар 1", price: 500, image: "https://res.cloudinary.com/ddem4litw/image/upload/v1733011280/Wavy_Bus-17_Single-09_t8hpru.jpg" },
  { id: 2, name: "Товар 2", price: 600, image: "https://res.cloudinary.com/ddem4litw/image/upload/v1733011280/Wavy_Bus-17_Single-09_t8hpru.jpg" },
  { id: 3, name: "Товар 3", price: 700, image: "https://res.cloudinary.com/ddem4litw/image/upload/v1733011280/Wavy_Bus-17_Single-09_t8hpru.jpg" },
];


function App() {
  const handleApplePayClick = () => {
      alert("Apple Pay не підтримується на цьому пристрої.");
  };

  return (
    <div>
      <header className="header">
        <h1>Онлайн магазин</h1>

      </header>
      <main className="main">
        <section className="grid">
          {products.map((product) => (
            <div key={product.id} className="product">
              <img src={product.image} alt={product.name} />
              <h2>{product.name}</h2>
              <p>Ціна: {product.price} грн</p>
              <button onClick={() => alert(`${product.name} додано до кошика!`)}>Додати до кошика</button>
            </div>
          ))}
        </section>
        <section>
          <button className="apple-pay-button" onClick={handleApplePayClick}>
            Оплатити через Apple Pay
          </button>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2024 Магазин. Всі права захищено.</p>
      </footer>
    </div>
  );
}

export default App
