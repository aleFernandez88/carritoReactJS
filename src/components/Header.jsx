import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
const Header = ({
  cart,
  cleanCart,
  removeFromCart,
  decreaseQuantity,
  increaseQuantity,
}) => {
  const isEmpty = () => cart.length === 0;
  const cartTotal = () =>
    cart.reduce((total, item) => total + item.quantity * item.price, 0);

  return (
    <header className="header">
      <div className="container-xl">
        <div className="row d-flex justify-content-between justify-content-md-between">
          <div className="col-md-3">
            <a href="index.html">
              <img
                className="img-fluid logo"
                src="/img/logo-guitar.png"
                alt="imagen logo"
              />
            </a>
          </div>
          <nav className="col-md-6 a d-flex align-items-center justify-content-end">
            <div className="carrito">
              <FontAwesomeIcon icon={faCartShopping} className="iconCart" />
              <div id="carrito" className="bg-white p-3">
                {isEmpty() ? (
                  <p className="text-center">El carrito esta vació</p>
                ) : (
                  <>
                    <table className="w-100 table">
                      <thead>
                        <tr>
                          <th>Imagen</th>
                          <th>Nombre</th>
                          <th>Precio</th>
                          <th>Cantidad</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {cart.map((item) => (
                          <tr key={item.id}>
                            <td>
                              <img
                                className="img-fluid"
                                src={`/img/guitarra_0${item.id}.jpg`}
                                alt="imagen guitarra"
                              />
                            </td>
                            <td>{item.name}</td>
                            <td className="fw-bold">
                              {item.price * item.quantity}
                            </td>
                            <td className="flex align-items-start gap-4">
                              <button
                                type="button"
                                className="btn btn-dark"
                                onClick={
                                  item.quantity === 1
                                    ? () => removeFromCart(item.id)
                                    : () => decreaseQuantity(item.id)
                                }
                              >
                                -
                              </button>
                              {item.quantity}
                              <button
                                type="button"
                                className="btn btn-dark"
                                onClick={() => increaseQuantity(item.id)}
                              >
                                +
                              </button>
                            </td>
                            <td>
                              <button
                                className="btn btn-danger"
                                type="button"
                                onClick={() => removeFromCart(item.id)}
                              >
                                X
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <p className="text-end">
                      Total pagar:
                      <span className="fw-bold">${cartTotal()}</span>
                    </p>
                    <button
                      className="btn btn-dark w-100 mt-3 p-2"
                      onClick={cleanCart}
                    >
                      Vaciar Carrito
                    </button>
                  </>
                )}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
export default Header;
