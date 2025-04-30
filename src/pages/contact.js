import React, { useEffect, useState } from "react";

const OrderOnline = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]); // To keep track of the items added to the cart
  const [isCartVisible, setIsCartVisible] = useState(false); // To toggle cart visibility

  // Fetching the menu items from the backend
  useEffect(() => {
    const fetchMenuItems = async () => {
      setLoading(true); // Set loading to true before starting the fetch request.

      try {
        const res = await fetch(
          `https://usefulapis-production.up.railway.app/get-menu-items/?restaurant_name=Amir`
        );

        if (!res.ok) {
          throw new Error(`Error fetching data: ${res.statusText}`);
        }

        const data = await res.json();
        setMenuItems(data); // Set the fetched data to state.
      } catch (err) {
        console.error("Failed to fetch menu items:", err);
      } finally {
        setLoading(false); // Set loading to false once data is fetched or error occurs.
      }
    };

    fetchMenuItems();
  }, []);

  // Function to handle adding an item to the cart
  const handleAddToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]); // Add the item to the cart
    alert(`${item.name} added to cart!`);
  };

  // Function to handle checkout
  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    alert("Proceeding to checkout...");
    // Here you can integrate the checkout process (e.g., payment gateway integration)
    // For now, we'll just clear the cart after checkout
    setCart([]);
  };

  // Function to toggle the cart visibility
  const toggleCartVisibility = () => {
    setIsCartVisible((prevState) => !prevState);
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Menu Items</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {menuItems.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              width: "calc(33.333% - 20px)",
              boxSizing: "border-box",
              textAlign: "center",
            }}
          >
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>Price: {item.price}</p>
            <img
              src={item.image_url}
              alt={item.name}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "5px",
              }}
            />
            <p>Restaurant: {item.restaurant_name}</p>
            <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>

      {/* View Cart Button */}
      <button
        onClick={toggleCartVisibility}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        View Cart ({cart.length})
      </button>

      {/* Cart Popup */}
      {isCartVisible && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#fff",
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            zIndex: 1000,
          }}
        >
          <h3>Your Cart</h3>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div>
              <ul>
                {cart.map((item, index) => (
                  <li key={index}>
                    {item.name} - {item.price} <strong>Qty: 1</strong>
                  </li>
                ))}
              </ul>
              <button
                onClick={handleCheckout}
                style={{
                  marginTop: "20px",
                  padding: "10px 20px",
                  backgroundColor: "#FF5733",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Checkout
              </button>
            </div>
          )}
          <button
            onClick={toggleCartVisibility}
            style={{
              marginTop: "10px",
              padding: "10px 20px",
              backgroundColor: "#ccc",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default OrderOnline;
