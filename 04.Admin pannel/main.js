const hamburger = document.querySelector(".menuiconContainer");
const sidebar = document.querySelector(".sidenavWrapper");

hamburger.addEventListener("click", function () {
  sidebar.classList.toggle("active");
});
