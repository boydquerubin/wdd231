const productsContainer = document.querySelector('#products');

async function getFeaturedProducts() {
  try {
    const module = await import('../data/inventory.js');
    const data = module.default;

    const randomProducts = shuffleArray(data).slice(0, 3);

    randomProducts.forEach(product => {
      const card = document.createElement('div');
      card.classList.add('featured-product');

      const img = document.createElement('img');
      img.src = `images/${product.image}`;
      img.alt = product.name;
      img.loading = 'lazy';
      img.width = 250;

      const name = document.createElement('h3');
      name.textContent = product.name;

      card.appendChild(img);
      card.appendChild(name);
      productsContainer.appendChild(card);
    });
  } catch (error) {
    console.error('Error loading featured products:', error);
    productsContainer.innerHTML = `<p>Unable to load featured products at this time.</p>`;
  }
}

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

getFeaturedProducts();


const globalCurrencyList = document.getElementById('global-currencies');

async function fetchGlobalCurrencies() {
  const apiKey = '32f2a9abfd41929151278463';
  const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

  const mostUsed = ['USD', 'EUR', 'JPY', 'GBP', 'CNY'];

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (data.result === 'success') {
      globalCurrencyList.innerHTML = '';

      mostUsed.forEach(currency => {
        const rate = data.conversion_rates[currency];
        const li = document.createElement('li');
        li.textContent = `1 USD = ${rate.toFixed(2)} ${currency}`;
        globalCurrencyList.appendChild(li);
      });
    } else {
      globalCurrencyList.innerHTML = '<li>Failed to load exchange rates.</li>';
    }
  } catch (err) {
    console.error('Exchange rate error:', err);
    globalCurrencyList.innerHTML = '<li>Error loading exchange rates.</li>';
  }
}

document.addEventListener('DOMContentLoaded', fetchGlobalCurrencies);

const timestampInput = document.getElementById("timestamp");
if (timestampInput) {
  const now = new Date();
  timestampInput.value = now.toLocaleString();
}

const sidebarMessage = document.createElement("div");
sidebarMessage.classList.add("visit-message");

const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {
  sidebarMessage.textContent = "Welcome to BRIQ-N-BRAQ — where everyday finds become extraordinary!";
} else {
  const difference = now - lastVisit;
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  sidebarMessage.textContent = days < 1
    ? "Welcome back, we’re glad to see you again!"
    : `You last visited ${days} day${days === 1 ? "" : "s"} ago.`;
}

localStorage.setItem("lastVisit", now);
const h1 = document.querySelector("main h1");
h1.insertAdjacentElement("afterend", sidebarMessage);