const products = [
  { id:1, name:"Laptop", price:60000, desc:"High performance laptop" },
  { id:2, name:"Smartphone", price:25000, desc:"Latest smartphone model" },
  { id:3, name:"Headphones", price:3000, desc:"Noise cancelling headphones" },
  { id:4, name:"Smart Watch", price:5000, desc:"Fitness smart watch" }
];

let cart = [];

const productList = document.getElementById("productList");

products.forEach(p => {
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `<h3>${p.name}</h3><p>₹${p.price}</p>`;
  card.onclick = () => showDetails(p);
  productList.appendChild(card);
});

function showDetails(product){
  document.getElementById("productModal").style.display = "block";
  document.getElementById("modalTitle").innerText = product.name;
  document.getElementById("modalDesc").innerText = product.desc;
  document.getElementById("modalPrice").innerText = "₹"+product.price;

  document.getElementById("addBtn").onclick = () => {
    cart.push(product);
    updateCart();
    alert("Added to cart");
  }
}

function closeModal(){
  document.getElementById("productModal").style.display = "none";
}

function openCart(){
  document.getElementById("cartModal").style.display = "block";
  renderCart();
}

function closeCart(){
  document.getElementById("cartModal").style.display = "none";
}

function updateCart(){
  document.getElementById("cartCount").innerText = cart.length;
}

function renderCart(){
  const cartItems = document.getElementById("cartItems");
  cartItems.innerHTML = "";

  let total = 0;

  cart.forEach(item => {
    const li = document.createElement("li");
    li.innerText = `${item.name} - ₹${item.price}`;
    cartItems.appendChild(li);
    total += item.price;
  });

  document.getElementById("totalPrice").innerText = "Total: ₹"+total;
}
