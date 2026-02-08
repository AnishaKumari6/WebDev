
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

const flowers = [
  { id: 1, name: "Rose Bouquet", price: 299, img: "https://th.bing.com/th/id/OIP.Jp_Opv4ZUQu0yusolHCOJAHaEM?w=304&h=150&c=6&o=7&dpr=1.3&pid=1.7&rm=3" },
  { id: 2, name: "Tulip Bunch", price: 249, img: "https://images.unsplash.com/photo-1468327768560-75b778cbb551" },
  { id: 3, name: "Marigold", price: 159, img: "https://th.bing.com/th/id/OIP.UE-Drs0xq2J21ztzKoLy1QHaHa?w=178&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { id: 4, name: "Sunflower", price: 199, img: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651" },
  { id: 5, name: "Orchid", price: 399, img: "https://images.unsplash.com/photo-1501973801540-537f08ccae7b" },
  { id: 6, name: "Daisy", price: 179, img: "https://images.unsplash.com/photo-1490750967868-88aa4486c946" }
];

export default function App() {
  const [cart, setCart] = useState({});

  const add = (id) => {
    setCart({ ...cart, [id]: (cart[id] || 0) + 1 });
  };

  const remove = (id) => {
    const copy = { ...cart };
    if (copy[id] === 1) delete copy[id];
    else copy[id]--;
    setCart(copy);
  };

  const cartCount = Object.values(cart).reduce((a, b) => a + b, 0);

  return (
    <BrowserRouter>
      <header style={navStyle}>
        <h2>Flower Shop</h2>
        <nav style={navLinks}>
  <Link to="/">Home</Link>
  <Link to="/cart" style={cartLink}>
    <span style={cartIcon}>🛒</span>
    <span>Cart</span>
    <span style={badge}>{cartCount}</span>
  </Link>
  <Link to="/contact">Contact</Link>
</nav>
      </header>

      <Routes>
        <Route path="/" element={<Home cart={cart} add={add} remove={remove} />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home({ cart, add, remove }) {
  const [index, setIndex] = useState(0);
  const visibleCards = 3;
  const maxIndex = flowers.length - visibleCards;

  return (
    <main>
      <h1 style={title}>Fresh Flower Slider</h1>

      <div style={sliderWrapper}>
        <button
          disabled={index === 0}
          style={arrow}
          onClick={() => setIndex(index - 1)}
        >
          ‹
        </button>

        <div style={sliderWindow}>
          <div
            style={{
              ...sliderTrack,
              transform: `translateX(-${index * 300}px)`
            }}
          >
            {flowers.map((f) => (
              <div key={f.id} style={card}>
                <img src={f.img} alt={f.name} style={img} />
                <h3>{f.name}</h3>
                <p>₹{f.price}</p>

                {cart[f.id] ? (
                  <div style={qtyBox}>
                    <button onClick={() => remove(f.id)}>-</button>
                    <span>{cart[f.id]}</span>
                    <button onClick={() => add(f.id)}>+</button>
                  </div>
                ) : (
                  <button style={addBtn} onClick={() => add(f.id)}>
                    Add to Cart
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        <button
          disabled={index === maxIndex}
          style={arrow}
          onClick={() => setIndex(index + 1)}
        >
          ›
        </button>
      </div>
    </main>
  );
}

function Cart({ cart }) {
  return (
    <main style={pageBox}>
      <h1 style={pageTitle}>Your Cart</h1>

      {Object.keys(cart).length === 0 && (
        <p style={emptyText}>No items in cart</p>
      )}

      {Object.entries(cart).map(([id, qty]) => {
        const item = flowers.find(f => f.id == id);
        return (
          <div key={id} style={cartItem}>
            <span>{item.name}</span>
            <span>× {qty}</span>
            <span>₹{item.price * qty}</span>
          </div>
        );
      })}
    </main>
  );
}

function Contact() {
  return (
    <main style={pageBox}>
      <h1 style={pageTitle}>Contact Us</h1>
      <p>🌸 Flower Shop Pvt Ltd</p>
      <p>📍 Mumbai, India</p>
      <p>📞 +91 98765 43210</p>
      <p>✉️ support@flowershop.com</p>
    </main>
  );
}

const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  padding: 20,
  background: "#fcf9f9",
  color: "black",
  borderRadius: 12
  
};

const navLinks = {
  display: "flex",
  justifyContent: "space-between",
  gap: 24,
  alignItems: "center"
};

const cartLink = {
  display: "flex",
  alignItems: "center",
  gap: 12,
  position: "relative"
  
};

const cartIcon = {
  fontSize: 18
};

const badge = {
  background: "black",
  color: "white",
  borderRadius: "50%",
  padding: "2px 6px",
  fontSize: 12,
  lineHeight: 1
};

const title = {
  textAlign: "center",
  margin: "40px 0",
  color: "black"
};

const sliderWrapper = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 20
};

const sliderWindow = {
  width: 900,
  overflow: "hidden"
};

const sliderTrack = {
  display: "flex",
  gap: 20,
  transition: "0.4s ease"
};

const card = {
  minWidth: 260,
  background: "#f5ede6",
  padding: 20,
  borderRadius: 12,
  textAlign: "center",
  color: "black"
};

const img = {
  width: "100%",
  height: 180,
  objectFit: "cover",
  borderRadius: 10
};

const addBtn = {
  marginTop: 10,
  padding: "8px 16px",
  cursor: "pointer"
};

const qtyBox = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 10
};

const arrow = {
  padding: "10px 16px",
  fontSize: 18,
  cursor: "pointer"
};

const pageBox = {
  maxWidth: 900,
  margin: "40px auto",
  background: "#fcebeb",
  padding: 40,
  borderRadius: 12,
  boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
  color: "black"
};

const pageTitle = {
  fontSize: 32,
  marginBottom: 20
};

const emptyText = {
  fontSize: 18,
  opacity: 0.7
};

const cartItem = {
  display: "flex",
  justifyContent: "space-between",
  padding: "12px 0",
  borderBottom: "1px solid #ccc"
};
