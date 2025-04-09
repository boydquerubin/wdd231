const productsContainer = document.querySelector("#products");
const url = "data/inventory.json";

async function getProducts() {
  const response = await fetch(url);
  const data = await response.json();
  displayProducts(data);
}

getProducts();

const displayProducts = (items) => {
  items.forEach(item => {
    let card = document.createElement("section");
    card.classList.add("product-card");

    let name = document.createElement("h2");
    let image = document.createElement("img");
    let description = document.createElement("p");
    let price = document.createElement("p");
    let stock = document.createElement("p");
    let category = document.createElement("p");

    name.textContent = item.name;
    description.textContent = item.description;
    price.textContent = `Price: $${item.price.toFixed(2)}`;
    stock.textContent = `In stock: ${item.stock}`;
    category.textContent = `Category: ${item.category}`;

    image.setAttribute("src", `images/${item.image}`);
    image.setAttribute("alt", item.name);
    image.setAttribute("loading", "lazy");
    image.setAttribute("width", "auto");
    image.setAttribute("height", "150");

    card.appendChild(name);
    card.appendChild(image);
    card.appendChild(description);
    card.appendChild(price);
    card.appendChild(stock);
    card.appendChild(category);

    productsContainer.appendChild(card);
  });
};
