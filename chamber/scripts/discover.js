const attractionsContainer = document.querySelector("#attraction-cards");
const url = "data/attractions.json";

async function getAttractions() {
    const response = await fetch(url);
    const data = await response.json();
    displayAttractions(data);
}

getAttractions();

const displayAttractions = (attractions) => {
    attractions.forEach(attraction => {
        const sightCard = document.createElement("div");
        sightCard.classList.add("sight-card");

        const title = document.createElement("h2");
        title.textContent = attraction.name;
        sightCard.appendChild(title);

        const figure = document.createElement("figure");
        const image = document.createElement("img");
        image.src = `images/${attraction.image}`;
        image.alt = `Image of ${attraction.name}`;
        image.loading = "lazy";
        figure.appendChild(image);
        sightCard.appendChild(figure);

        const address = document.createElement("address");
        address.textContent = attraction.address;
        sightCard.appendChild(address);

        const description = document.createElement("p");
        description.textContent = attraction.description;
        sightCard.appendChild(description);

        const button = document.createElement("button");
        button.dataset.modal = `modal-${attraction.name.toLowerCase().replace(/\s+/g, '-')}`;
        button.textContent = "Learn More";
        sightCard.appendChild(button);

        attractionsContainer.appendChild(sightCard);
    });
};

document.querySelectorAll("[data-modal]").forEach(button => {
    button.addEventListener("click", () => {
      const modalId = button.getAttribute("data-modal");
      document.getElementById(modalId).showModal();
    });
  });
  
document.querySelectorAll(".close-modal").forEach(button => {
  button.addEventListener("click", () => {
    button.closest("dialog").close();
  });
});

document.getElementById("timestamp").value = new Date().toISOString();