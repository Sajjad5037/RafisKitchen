// pages/Home.js
import ImageCarousel from "../components/ImageCarousel"; // Make sure you have this imported

function Home() {
  return (
    <div>     

      {/* Image Carousel */}
      <ImageCarousel />

      {/* Our Menu Heading */}
      <h2 style={{ textAlign: "center", margin: "2rem 0 1rem 0", color: "purple", fontSize: "2rem" }}>
        Our Menu
      </h2>

      {/* Image Gallery - Menu Pictures */}
      <div style={{ padding: "1rem", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "1rem" }}>
        {/* Menu Images */}
        {[
          { src: "https://i.imgur.com/C60QmSi.jpeg", desc: "Description Text of the picture 1" },
          { src: "https://i.imgur.com/LFoND9C.jpeg", desc: "Description Text of the picture 2" },
          { src: "https://i.imgur.com/J9TFb3Z.jpeg", desc: "Description Text of the picture 3" },
          { src: "https://i.imgur.com/jjSGMnh.jpeg", desc: "Description Text of the picture 4" },
          { src: "https://i.imgur.com/fYbDxgd.jpeg", desc: "Description Text of the picture 5" },
          { src: "https://i.imgur.com/8OgWRxu.jpeg", desc: "Description Text of the picture 6" },
          { src: "https://i.imgur.com/Lrsa3lf.jpeg", desc: "Description Text of the picture 7" },
        ].map((item, index) => (
          <div key={index} style={{ textAlign: "center" }}>
            <img 
              src={item.src} 
              alt={`Gallery Image ${index + 1}`} 
              style={{ width: "100%", height: "250px", objectFit: "cover", borderRadius: "8px" }} 
            />
            <p style={{ marginTop: "10px", fontSize: "14px", color: "#555" }}>{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Our Ambiance Heading */}
      <h2 style={{ textAlign: "center", margin: "2rem 0 1rem 0", color: "purple", fontSize: "2rem" }}>
        Our Beautiful Ambiance
      </h2>

      {/* Image Gallery - Ambiance Pictures */}
      <div style={{ padding: "1rem", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "1rem" }}>
        {/* Ambiance Images */}
        {[
          { src: "https://i.imgur.com/F1FLfqU.jpeg", desc: "Description Text" },
          { src: "https://i.imgur.com/i0zg0WF.jpeg", desc: "Description Text of the picture" },
          { src: "https://i.imgur.com/IBmkLYh.jpeg", desc: "Description Text of the picture" },
          { src: "https://i.imgur.com/c7TV7Jn.jpeg", desc: "Description text of the picture" },
        ].map((item, index) => (
          <div key={index} style={{ textAlign: "center" }}>
            <img 
              src={item.src} 
              alt={`Ambiance Image ${index + 1}`} 
              style={{ width: "100%", height: "250px", objectFit: "cover", borderRadius: "8px" }} 
            />
            <p style={{ marginTop: "10px", fontSize: "14px", color: "#555" }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
