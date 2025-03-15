const membersContainer = document.querySelector("#members");
const url = "data/members.json";

async function getMembers() {
  const response = await fetch(url);
  const data = await response.json();
  displayMembers(data);
}

getMembers();

const displayMembers = (companies) => {
  companies.forEach(company => {
    let card = document.createElement("section");
    card.classList.add("member-card"); // Add class for styling
    
    let name = document.createElement("h2");
    let image = document.createElement("img");
    let address = document.createElement("p");
    let phone = document.createElement("p");
    let website = document.createElement("a");
    let membershipLevel = document.createElement("p");

    name.textContent = company.name;
    address.textContent = `Address: ${company.address}`;
    phone.textContent = `Phone: ${company.phone}`;
    website.href = company.website;
    website.textContent = "Visit Website";
    website.target = "_blank";
    membershipLevel.textContent = `Membership: ${company.membership_level === 3 ? "Gold" : company.membership_level === 2 ? "Silver" : "Member"}`;

    // Apply image attributes
    image.setAttribute("src", company.imageurl);
    image.setAttribute("alt", `Logo of ${company.name}`);
    image.setAttribute("loading", "lazy");
    image.setAttribute("width", "auto");
    image.setAttribute("height", "100");

    // Append elements to card
    card.appendChild(name);
    card.appendChild(image);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(membershipLevel);
    card.appendChild(website);

    // Append card to container
    membersContainer.appendChild(card);
  });
};
