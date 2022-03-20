const menuIcon = document.querySelector(".menuIcon");
const openIcon = document.querySelector(".fa-bars");
const closeIcon = document.querySelector(".fa-times");
const menu = document.querySelector(".partsMenu");
// const welcome = document.querySelector(".welcome");
const wrap = document.querySelector(".wrap");
const partsMenu = document.querySelector(".partsMenu")


menuIcon.addEventListener("click", function () {
    openIcon.classList.toggle("active");
    closeIcon.classList.toggle("active");
    menu.classList.toggle("active");
    // welcome.classList.toggle("active");
    wrap.classList.toggle("active");
})

partsMenu.addEventListener("click", function () {
    openIcon.classList.toggle("active");
    closeIcon.classList.toggle("active")
    menu.classList.remove("active");
    wrap.classList.remove("active");


})