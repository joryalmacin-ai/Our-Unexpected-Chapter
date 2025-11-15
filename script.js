document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  cards.forEach((c, i) => {
    c.style.animationDelay = `${i * 0.15}s`;
  });
});
