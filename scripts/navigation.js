const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

document.addEventListener("DOMContentLoaded", function () {
  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll(".navigation a");

  navLinks.forEach(link => link.classList.remove("active"));

  navLinks.forEach(link => {
    const linkHref = link.getAttribute("href");
    if (!link.hasAttribute("target") && (linkHref === currentPage || (currentPage === "" && linkHref === "#") || (currentPage === "index.html" && linkHref === "#"))) {
      link.classList.add("active");
    }
  });
});
