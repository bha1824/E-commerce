import { useState } from "react";
export default function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Heaphones",
      price: 20,
      quantity: 1,
      image:
        "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      title: "Mobile Cover",
      price: 15,
      quantity: 1,
      image:
        "https://images.pexels.com/photos/11067245/pexels-photo-11067245.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ]);

  const handleQuantityChange = (id, delta) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + delta > 0 ? item.quantity + delta : 1,
            }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };
  return (
    <div>
      <div className="container mt-5">
        <h1>Your Cart</h1>
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="card mb-3">
              <div className="card-body d-flex justify-content-between align-items-center">
                <div>
                  <img
                    src={item.image}
                    alt="first-img"
                    height="60px"
                    width="60px"
                  />

                  <h5>{item.title}</h5>
                  <p>Price: ${item.price}</p>
                </div>
                <div>
                  <button
                    className="btn btn-sm btn-outline-secondary mx-1"
                    onClick={() => handleQuantityChange(item.id, -1)}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="btn btn-sm btn-outline-secondary mx-1"
                    onClick={() => handleQuantityChange(item.id, 1)}
                  >
                    +
                  </button>
                </div>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleRemove(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <h4>
            Total Price: $
            {cartItems.map((item) => item.price * item.quantity).join(" + ")}
          </h4>
        </div>
      </div>
    </div>
  );
}
