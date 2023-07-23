const burger = document.querySelector(".header-burger");
const menu = document.querySelector(".header-menu")

burger.addEventListener("click", function () {
    menu.classList.toggle("active");
    // menu.style.display = "block"
})