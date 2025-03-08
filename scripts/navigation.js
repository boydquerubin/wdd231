const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

document.addEventListener("DOMContentLoaded", function () {
  let currentPage = window.location.pathname.split("/").pop();

  if (currentPage === "" || currentPage === "/") {
    currentPage = "index.html";
  }

  const navLinks = document.querySelectorAll(".navigation a");

  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage || 
        (currentPage === "index.html" && (link.getAttribute("href") === "/" || link.getAttribute("href") === "#"))) {
      link.classList.add("active");
    }
  });
});
