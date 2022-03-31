const menuIcon = document.querySelector(".menuIcon");
const openIcon = document.querySelector(".fa-bars");
const closeIcon = document.querySelector(".fa-times");
const menu = document.querySelector(".partsMenu");
// const welcome = document.querySelector(".welcome");
const wheatMenu = document.querySelector(".wheat-menu");  
const cornMenu = document.querySelector(".corn-menu");
const beansMenu = document.querySelector(".beans-menu"); 
const sauceMenu = document.querySelector(".sauce-menu"); 
const spicesMenu = document.querySelector(".spices-menu"); 
const anotherMenu = document.querySelector(".another-menu") ;
const wrap = document.querySelector(".wrap");
const partsMenu = document.querySelector(".partsMenu");
const wheat = document.querySelector(".wheat");
const corn = document.querySelector(".corn");
const beans = document.querySelector(".beans");
const sauce = document.querySelector(".sauce");
const spices = document.querySelector(".spices");
const another = document.querySelector(".another");





menuIcon.addEventListener("click", function () {
    openIcon.classList.toggle("active");
    closeIcon.classList.toggle("active");
    menu.classList.toggle("active");
    wrap.classList.toggle("active");
    
})

partsMenu.addEventListener("click", function () {
    openIcon.classList.toggle("active");
    closeIcon.classList.toggle("active")
    menu.classList.remove("active");
    wrap.classList.remove("active");
})
wheatMenu.addEventListener("click", function () {
    wheat.classList.remove("hide");
    corn.classList.add("hide");
    beans.classList.add("hide");
    sauce.classList.add("hide");
    spices.classList.add("hide");
    another.classList.add("hide");
   
})
cornMenu.addEventListener("click", function () {
    corn.classList.remove("hide");
    wheat.classList.add("hide");
    beans.classList.add("hide");
    sauce.classList.add("hide");
    spices.classList.add("hide");
    another.classList.add("hide");
   
})

beansMenu.addEventListener("click", function () {   
    beans.classList.remove("hide");
    corn.classList.add("hide");
    wheat.classList.add("hide");
    sauce.classList.add("hide");
    spices.classList.add("hide");
    another.classList.add("hide");
})

sauceMenu.addEventListener("click", function () {  
    sauce.classList.remove("hide"); 
    beans.classList.add("hide");
    corn.classList.add("hide");
    wheat.classList.add("hide");
    spices.classList.add("hide");
    another.classList.add("hide");
})

spicesMenu.addEventListener("click", function () { 
    spices.classList.remove("hide");
    sauce.classList.add("hide"); 
    beans.classList.add("hide");
    corn.classList.add("hide");
    wheat.classList.add("hide");
    another.classList.add("hide");
})

anotherMenu.addEventListener("click", function () { 
    another.classList.remove("hide");
    spices.classList.add("hide");
    sauce.classList.add("hide"); 
    beans.classList.add("hide");
    corn.classList.add("hide");
    wheat.classList.add("hide");
   
})




