// Clicking any item heading changes its text to a random required colour.
const colors = ["green", "blue", "red"];

document.querySelectorAll(".card h5").forEach((heading) => {
  heading.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    heading.style.color = colors[randomIndex];
  });
});
