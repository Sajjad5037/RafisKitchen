import React, { useEffect, useState } from "react";

const OrderOnline = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [restaurantName, setRestaurantName] = useState("Amir");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const fetchMenuItems = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://usefulapis-production.up.railway.app/get-menu-items/?restaurant_name=${restaurantName}`
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
  }, [restaurantName]);

  const handleAddToCart = (item) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((i) => i.id === item.id);
      if (existingIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingIndex].quantity += 1;
        return updatedCart;
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const handleRemoveFromCart = (itemId) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === itemId);
      if (!existingItem) return prevCart;

      if (existingItem.quantity === 1) {
        return prevCart.filter((item) => item.id !== itemId);
      } else {
        return prevCart.map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
    });
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = async () => {
    if (!cart.length) {
      alert("Your cart is empty!");
      return;
    }
    if (!phone) {
      alert("Please enter your phone number before checking out.");
      return;
    }

    const summary = cart
      .map(
        (item, i) =>
          `${i + 1}. ${item.name} x${item.quantity} — $${(
            item.price * item.quantity
          ).toFixed(2)}`
      )
      .join("\n");

    const message = `Order Summary:\n${summary}\n\nTotal: $${total.toFixed(
      2
    )}\n\nPhone: ${phone}\n\nDo you want to proceed to payment?`;

    const isConfirmed = window.confirm(message);

    if (isConfirmed) {
      try {
        const payloadItems = cart.map((item) => ({
          id: item.id,
          name: item.name,
          price: item.price,
          description: item.description,
          image_url: item.image_url,
          restaurant_name: item.restaurant_name,
          quantity: item.quantity,
        }));

        const res = await fetch(
          "https://usefulapis-production.up.railway.app/place-order",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              items: payloadItems,
              total: total,
              timestamp: new Date().toISOString(),
              restaurant_name: restaurantName,
              phone: phone,  // include phone number
            }),
          }
        );

        if (!res.ok) {
          throw new Error(`Server error: ${res.statusText}`);
        }

        const data = await res.json();
        const orderId = data.order_id || "N/A";
        alert(`Order placed successfully! Order ID: ${orderId}`);
        setCart([]);
        setPhone("");
      } catch (error) {
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
            {cart.map((item) => (
              <li
                key={item.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom: "1px solid #eee",
                  padding: "8px 0",
                }}
              >
                <span>
                  {item.name} x{item.quantity} — ${(
                    item.price * item.quantity
                  ).toFixed(2)}
                </span>
                <button
                  onClick={() => handleRemoveFromCart(item.id)}
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

          <div style={{ marginTop: "20px" }}>
            <label htmlFor="phone" style={{ fontWeight: "bold" }}>
              Enter Phone Number:
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="e.g., 123-456-7890"
              required
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "5px",
                fontSize: "1rem",
                borderRadius: "5px",
                border: "1px solid #ddd",
                backgroundColor: "#f9f9f9",
              }}
            />

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
              disabled={!phone}
              style={{
                marginTop: "20px",
                padding: "12px 20px",
                backgroundColor: !phone ? "#ccc" : "#007bff",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: !phone ? "not-allowed" : "pointer",
                width: "100%",
                fontSize: "1rem",
              }}
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderOnline;
