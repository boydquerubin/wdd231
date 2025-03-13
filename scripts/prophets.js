const cards = document.querySelector('#cards');
const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json"

async function getProphetData() {
  const response = await fetch(url);
  const data = await response.json();
  // console.table(data.prophets);
  displayProphets(data.prophets);
}

getProphetData();

const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {

    let card = document.createElement('section');
    let fullName = document.createElement('h2'); // fill in the blank
    let portrait = document.createElement('img');
    let dob = document.createElement('p');
    let pob = document.createElement('p');

    // Build the h2 content out to show the prophet's full name
    fullName.textContent = `${prophet.name} ${prophet.lastname}`; // fill in the blank
    dob.textContent = `Date of birth: ${prophet.birthdate}`
    pob.textContent = `Place of birth: ${prophet.birthplace}`
    // Build the image portrait by setting all the relevant attributes
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`); // fill in the blank
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');

    // Append the section(card) with the created elements
    card.appendChild(fullName); //fill in the blank
    card.appendChild(portrait);
    card.appendChild(dob);
    card.appendChild(pob);

    cards.appendChild(card);
  })
}

const allLink = document.querySelector("#all");
const utahLink = document.querySelector("#utah");
const outsideUSLink = document.querySelector("#outside-us");
const overNinetyFiveLink = document.querySelector("#over-ninety-five");
const overTenChildrenLink = document.querySelector("#over-ten-children");
const servedOverFifteenYearsLink = document.querySelector("#served-over-fifteen-years");

// allLink.addEventListener("click", () => {
//   document.querySelector("#cards").innerHTML = "";
//   displayProphets(cards);
// })

allLink.addEventListener("click", async () => {
  document.querySelector("#cards").innerHTML = "";
  const response = await fetch(url);
  const data = await response.json();
  displayProphets(data.prophets);
});

// utahLink.addEventListener("click", () => {
//   document.querySelector(".cards").innerHTML = "";
//   document.querySelector("#heading").innerHTML = "Prophets from Utah";
//   displayProphets(cards.filter(prophet => prophet.birthplace = ("Utah")))
// })

utahLink.addEventListener("click", async () => {
  document.querySelector("#cards").innerHTML = "";
  document.querySelector("#heading").textContent = "Prophets from Utah";
  const response = await fetch(url);
  const data = await response.json();
  displayProphets(data.prophets.filter(prophet => prophet.birthplace.includes("Utah")));
});