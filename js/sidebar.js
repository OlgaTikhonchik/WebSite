document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector(".sidebar__desk");
  const list = document.querySelector(".sidebar__list");

  button.addEventListener("click", function () {
    const isActive = list.classList.contains("active");
    list.classList.toggle("active", !isActive);
    button.classList.toggle("active", !isActive);
  });
});

// menu__review-content

document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector(".menu__review-content");
  const list = document.querySelector(".menu__review-list");

  button.addEventListener("click", function () {
    const isActive = list.classList.contains("active");
    list.classList.toggle("active", !isActive);
    button.classList.toggle("active", !isActive);
  });
});