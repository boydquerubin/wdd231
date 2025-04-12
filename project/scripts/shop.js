const productsContainer = document.querySelector("#products");

import products from "../data/inventory.js";

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

    name.innerHTML = item.name;
    description.innerHTML = item.description;
    price.innerHTML = `<span class="label">Price:</span> $${item.price.toFixed(2)}`;
    stock.innerHTML = `<span class="label">In stock:</span> ${item.stock}`;
    category.innerHTML = `<span class="label">Category:</span> ${item.category}`;

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

    const button = document.createElement("button");
    button.textContent = "More Info";
    button.classList.add("more-info-btn");
    button.dataset.modal = `modal-${item.name.toLowerCase().replace(/\s+/g, '-')}`;
    card.appendChild(button);

    const modal = document.createElement("dialog");
    modal.id = button.dataset.modal;
    modal.classList.add("product-modal");

    modal.innerHTML = `
    <h2>${item.name}</h2>
    <img src="images/${item.image}" alt="${item.name}" width="100%" height="auto" style="margin-bottom: 1rem;">
    <div class="modal-table">    
    <div class="row"><span class="label">Features:</span><span>${item.features || '—'}</span></div>
    <div class="row"><span class="label">Material:</span><span>${item.material || '—'}</span></div>
    <div class="row"><span class="label">Tips:</span><span>${item.tips || '—'}</span></div>
    <div class="row"><span class="label">Warranty:</span><span>${item.warranty || '—'}</span></div>
  </div>
    <button class="close-modal">Close</button>
  `;

    productsContainer.appendChild(modal);

    button.addEventListener("click", () => {
      document.getElementById(button.dataset.modal).showModal();
    });

    modal.querySelector(".close-modal").addEventListener("click", () => {
      modal.close();
    });

    productsContainer.appendChild(card);
  });
};

displayProducts(products);