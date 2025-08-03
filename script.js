const products = [
  // Protein Powders
  { id: 1, name: "Whey Protein - 2kg", price: 1899, image: "images/whey.png", category: "face" },
  { id: 2, name: "Mass Gainer - Chocolate", price: 1499, image: "images/massgainer.webp", category: "face" },
  { id: 3, name: "Isolate Whey - Vanilla", price: 2099, image: "images/isolateVanilla.avif", category: "face" },
  { id: 4, name: "Casein Protein", price: 1799, image: "images/Casein_Whey.png", category: "face" },

  // Pre-Workout Boosters
  { id: 5, name: "Nitro Pre-Workout", price: 999, image: "images/Nitro Pre-Workout.jpg", category: "hair" },
  { id: 6, name: "Pump Igniter", price: 849, image: "images/Pump Igniter.jpg", category: "hair" },
  { id: 7, name: "Explosive Energy Shot", price: 599, image: "images/Explosive Energy Shot.jpg", category: "hair" },
  { id: 8, name: "Caffeine Power Mix", price: 499, image: "images/Caffeine Power Mix.jpg", category: "hair" },

  // Recovery & Wellness
  { id: 9, name: "BCAA Recovery", price: 1199, image: "images/BCAA Recovery.jpg", category: "body" },
  { id: 10, name: "L-Glutamine Powder", price: 899, image: "images/L-Glutamine Powder.jpg", category: "body" },
  { id: 11, name: "Electrolyte Hydration", price: 649, image: "images/Electrolyte Hydration.png", category: "body" },
  { id: 12, name: "Multivitamin Essentials", price: 749, image: "images/Multivitamin Essentials.png", category: "body" },

  // Combo Offers
  { id: 13, name: "Protein + BCAA Combo", price: 2799, image: "images/Protein + BCAA Combo.PNg", category: "combo" },
  { id: 14, name: "Pre-Workout Power Combo", price: 2299, image: "images/Pre-Workout Power Combo.png", category: "combo" }
];


let cart = [];

function renderProducts() {
  const face = document.getElementById("facecare");
  const hair = document.getElementById("haircare");
  const body = document.getElementById("bodycare");
  const combos = document.getElementById("combos");

  face.innerHTML = "";
  hair.innerHTML = "";
  body.innerHTML = "";
  combos.innerHTML = "";

  products.forEach(p => {
    const card = `
      <div class="product-card">
        <img src="${p.image}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button onclick="addToCart(${p.id})">Add to Cart</button>
      </div>
    `;
    if (p.category === "face") face.innerHTML += card;
    if (p.category === "hair") hair.innerHTML += card;
    if (p.category === "body") body.innerHTML += card;
    if (p.category === "combo") combos.innerHTML += card;
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  updateCart();
}

function updateCart() {
  document.getElementById("cart-count").textContent = cart.length;
  const list = document.getElementById("cart-items");
  const total = document.getElementById("cart-total");
  list.innerHTML = "";
  let sum = 0;
  cart.forEach((item, index) => {
    sum += item.price;
    list.innerHTML += `<li>${item.name} - ₹${item.price} <button onclick="removeFromCart(${index})">❌</button></li>`;
  });
  total.textContent = sum;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

function scrollToCart() {
  document.getElementById("cart-section").scrollIntoView({ behavior: "smooth" });
}

function checkout() {
  alert("Thank you for your purchase!");
  cart = [];
  updateCart();
}

document.getElementById("themeToggle").onclick = () => {
  document.body.classList.toggle("dark");
};

// =================== Gray Mode Toggle ===================
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  // Toggle the graymode class on body
  document.body.classList.toggle("graymode");

  // Optional: update icon/text on the toggle button
  if (document.body.classList.contains("graymode")) {
    themeToggle.textContent = "🎧"; // gray emoji or custom icon
  } else {
    themeToggle.textContent = "🔥"; // back to default red theme
  }
});


renderProducts();

