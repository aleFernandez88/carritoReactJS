import "./App.css";
import Guitar from "./components/Guitar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { useCart } from "./hooks/useCart";

function App() {
  const {
    data,
    cart,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    cleanCart,
    isEmpty,
    cartTotal,
  } = useCart();
  return (
    <>
      <Header
        cart={cart}
        removeFromCart={removeFromCart}
        decreaseQuantity={decreaseQuantity}
        increaseQuantity={increaseQuantity}
        addToCart={addToCart}
        cleanCart={cleanCart}
        isEmpty={isEmpty}
        cartTotal={cartTotal}
      />
      <Hero />
      <main className="container-xl mt-5">
        <h2 className="text-center subtitulo">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map((guitar) => (
            <Guitar key={guitar.id} guitar={guitar} addToCart={addToCart} />
          ))}
        </div>
      </main>

      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">
            GuitarLA - Todos los derechos Reservados
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
