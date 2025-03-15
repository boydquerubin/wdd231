const mainnav = document.querySelector(".navigation");
const hambutton = document.querySelector("#menu");

hambutton.addEventListener("click", () => {
  mainnav.classList.toggle("show");
  hambutton.classList.toggle("show");
});

const display = document.querySelector("article");
const menu = document.querySelector(".menu");


display.classList.add("grid");

menu.addEventListener("click", (event) => {
  if (event.target.id === "grid") {
    display.classList.add("grid");
    display.classList.remove("list");
  } else if (event.target.id === "list") {
    display.classList.add("list");
    display.classList.remove("grid");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const currentPage = window.location.pathname.split("/").pop();
  document.querySelectorAll(".navigation a").forEach(link => {
    if (link.getAttribute("href") === currentPage || 
        (currentPage === "directory.html" && link.getAttribute("href") === "#")) {
      link.classList.add("active");
    }
  });
});
