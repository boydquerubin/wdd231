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