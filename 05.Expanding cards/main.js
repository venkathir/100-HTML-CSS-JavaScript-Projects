const cards = document.querySelectorAll(".cards");

function expandCard(card) {
  card.classList.add("active");
}

function collapseCard(card) {
  card.classList.remove("active");
}

function toggleCard(card) {
  if (card.classList.contains("active")) {
    collapseCard(card);
  } else {
    cards.forEach((c) => collapseCard(c));
    expandCard(card);
  }
}

cards.forEach((card) => {
  card.addEventListener("click", () => toggleCard(card));
});
