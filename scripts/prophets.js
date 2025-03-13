const cards = document.querySelector('#cards');
// async function getProphetData() {
//   const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json"
//   try {
//     const response = await fetch(url)
//     if (!response.ok) {
//       throw new Error(`Response status: ${response.status}`);
//     }

//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error(error.message);
//   }
// }

// getProphetData()

async function getProphetData() {
  const response = await fetch(url);
  const data = await response.json();
  console.table(data.prophets); // temporary testing of data response
}

getProphetData();