const arrow = document.querySelector(".arrow");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 128) arrow.style.opacity = 1;
  else arrow.style.opacity = 0;
});
