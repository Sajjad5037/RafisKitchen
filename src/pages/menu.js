import React, { useEffect, useState } from "react";

const MenuItems = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMenuItems = async () => {
      setLoading(true);  // Set loading to true before starting the fetch request.

      try {
        const res = await fetch(
          `https://usefulapis-production.up.railway.app/get-menu-items/?restaurant_name=Amir`
        );
        
        if (!res.ok) {
          throw new Error(`Error fetching data: ${res.statusText}`);
        }

        const data = await res.json();
        setMenuItems(data);  // Set the fetched data to state.
      } catch (err) {
        console.error("Failed to fetch menu items:", err);
      } finally {
        setLoading(false);  // Set loading to false once data is fetched or error occurs.
      }
    };

    fetchMenuItems();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Menu Items</h1>
      <div>
        {menuItems.map((item) => (
          <div key={item.id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>Price: {item.price}</p>
            <img src={item.image_url} alt={item.name} style={{ width: "200px", height: "auto" }} />
            <p>Restaurant: {item.restaurant_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuItems;
