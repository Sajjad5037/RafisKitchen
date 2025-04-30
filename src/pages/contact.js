import React, { useEffect, useState } from "react";

const OrderOnline = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]); // items in cart
  const [restaurantName, setRestaurantName] = useState("Amir");


  // Fetch menu items
  useEffect(() => {
    const fetchMenuItems = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://usefulapis-production.up.railway.app/get-menu-items/?restaurant_name=Amir`
        );
        if (!res.ok) throw new Error(res.statusText);
        setMenuItems(await res.json());
      } catch (err) {
        console.error("Failed to fetch menu items:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchMenuItems();
  }, []);

  const handleAddToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  const handleRemoveFromCart = (indexToRemove) => {
    setCart((prev) => prev.filter((_, i) => i !== indexToRemove));
  };

  const total = cart.reduce((sum, item) => sum + Number(item.price), 0);

  const handleCheckout = async () => {
    // Check if the cart is empty before proceeding
    if (!cart.length) {
      alert("Your cart is empty!");
      return;
    }
  
    // Create a summary of the cart items
    const summary = cart
      .map((item, i) => `${i + 1}. ${item.name} — $${item.price.toFixed(2)}`)
      .join("\n");
  
    const total = cart.reduce((sum, item) => sum + item.price, 0);
  
    // Create the confirmation message
    const message = `
  Order Summary:
  ${summary}
  
  Total: $${total.toFixed(2)}
  
  Do you want to proceed to payment?
    `.trim();
  
    // Show a confirmation prompt to the user
    const isConfirmed = window.confirm(message);
  
    if (isConfirmed) {
      try {
        // Send the order data to the local server
        const res = await fetch("http://localhost:8000/place-order", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            items: cart,
            total: total,
            timestamp: new Date().toISOString(),
            restaurant_name:restaurantName,
          }),
        });
  
        // Check if the request was successful
        if (!res.ok) {
          throw new Error(`Server error: ${res.statusText}`);
        }
  
        // Parse the response and alert the user
        const data = await res.json();
        const orderId = data.order_id || "N/A";
        alert(`Order placed successfully! Order ID: ${orderId}`);
  
        // Clear the cart after a successful order
        setCart([]);
  
      } catch (error) {
        // Log the error and show an alert to the user
        console.error("Failed to place order:", error);
        alert("There was an issue placing your order. Please try again.");
      }
    } else {
      alert("You can review and update your order before checking out.");
    }
  };
    
  
    
  
  return (
    <div style={{ padding: "20px" }}>
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
            <p>Price: ${item.price}</p>
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
            <button
              onClick={() => handleAddToCart(item)}
              style={{
                marginTop: "10px",
                padding: "8px 12px",
                backgroundColor: "#28a745",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <h2 style={{ marginTop: "40px" }}>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div style={{ maxWidth: "600px", margin: "auto" }}>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {cart.map((item, idx) => (
              <li
                key={idx}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom: "1px solid #eee",
                  padding: "8px 0",
                }}
              >
                <span>
                  {item.name} — ${item.price}
                </span>
                <button
                  onClick={() => handleRemoveFromCart(idx)}
                  style={{
                    padding: "4px 8px",
                    backgroundColor: "#dc3545",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "20px",
              fontSize: "1.2rem",
              fontWeight: "bold",
            }}
          >
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <button
            onClick={handleCheckout}
            style={{
              marginTop: "20px",
              padding: "12px 20px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              width: "100%",
              fontSize: "1rem",
            }}
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default OrderOnline;
