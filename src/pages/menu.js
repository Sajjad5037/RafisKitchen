import { useState } from "react";

function Menu() {
  const [menuItems, setMenuItems] = useState([
    { name: "", description: "", price: "", image: null },
  ]);

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedMenuItems = [...menuItems];
    updatedMenuItems[index][name] = value;
    setMenuItems(updatedMenuItems);
  };

  const handleImageChange = (index, event) => {
    const updatedMenuItems = [...menuItems];
    updatedMenuItems[index].image = event.target.files[0];
    setMenuItems(updatedMenuItems);
  };

  const handleAddItem = () => {
    setMenuItems([
      ...menuItems,
      { name: "", description: "", price: "", image: null },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can handle form submission, such as sending data to a server
    console.log(menuItems);
    // Reset the form
    setMenuItems([{ name: "", description: "", price: "", image: null }]);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>Our Menu</h1>
      <p>Explore our delicious dishes 🍝🥗🍕</p>

      <form onSubmit={handleSubmit}>
        {menuItems.map((item, index) => (
          <div key={index} style={{ marginBottom: "20px" }}>
            <h3>Dish {index + 1}</h3>

            <div style={{ marginBottom: "10px" }}>
              <label htmlFor={`name-${index}`} style={{ fontWeight: "bold" }}>
                Name
              </label>
              <input
                type="text"
                id={`name-${index}`}
                name="name"
                value={item.name}
                onChange={(e) => handleInputChange(index, e)}
                placeholder="Enter dish name"
                required
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
              />
            </div>

            <div style={{ marginBottom: "10px" }}>
              <label
                htmlFor={`description-${index}`}
                style={{ fontWeight: "bold" }}
              >
                Description
              </label>
              <textarea
                id={`description-${index}`}
                name="description"
                value={item.description}
                onChange={(e) => handleInputChange(index, e)}
                placeholder="Enter dish description"
                required
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  minHeight: "80px",
                }}
              />
            </div>

            <div style={{ marginBottom: "10px" }}>
              <label htmlFor={`price-${index}`} style={{ fontWeight: "bold" }}>
                Price
              </label>
              <input
                type="number"
                id={`price-${index}`}
                name="price"
                value={item.price}
                onChange={(e) => handleInputChange(index, e)}
                placeholder="Enter dish price"
                required
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
              />
            </div>

            <div style={{ marginBottom: "10px" }}>
              <label
                htmlFor={`image-${index}`}
                style={{ fontWeight: "bold" }}
              >
                Upload Image
              </label>
              <input
                type="file"
                id={`image-${index}`}
                accept="image/*"
                onChange={(e) => handleImageChange(index, e)}
                required
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
              />
            </div>
          </div>
        ))}

        <div>
          <button
            type="button"
            onClick={handleAddItem}
            style={{
              padding: "10px 20px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginBottom: "20px",
            }}
          >
            Add Another Dish
          </button>
        </div>

        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#28a745",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            width: "100%",
          }}
        >
          Submit Menu
        </button>
      </form>
    </div>
  );
}

export default Menu;
