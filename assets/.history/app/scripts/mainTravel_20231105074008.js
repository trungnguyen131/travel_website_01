
let navbar = document.querySelector('.header .navbar');
let overlay = document.querySelector(".header .overlay-box");

document.querySelector('#menu-btn').addEventListener("click", function(event) {
    navbar.classList.add('active');
    overlay.classList.add('active-overlay')
    document.body.classList.add('active-body-scroll')
})
overlay.addEventListener("click", function(e) {
    if(!navbar.contains(e.target)) {
        navbar.classList.remove("active")
        document.body.classList.remove("active-body-scroll");
        e.currentTarget.classList.remove("active-overlay")
    }
})

const $search_icon = document.querySelector("span.click-to-search");
const $search_box = document.querySelector("div.col div.parent-box-ip");
$search_icon.addEventListener("click", function() {
    $search_box.classList.toggle("show-search")
})

//////////////////////////////=====Header
const $header = document.querySelector(".header");
const $home = document.getElementById("Home").scrollHeight;
console.log($home - 70);
window.addEventListener("scroll", function(e) {
    if (e.currentTarget.scrollY >= ($home - 800)) {
        $header.style.height = "100px";
        $header.style.boxShadow = "0 0 10px hsla(0, 0%, 0%, 0.8)";
        $header.style.backgroundColor = "rgb(8 26 27 / 100%)";
    } else {
        $header.style.height = "90px";
        $header.style.boxShadow = "0 0 10px hsla(0, 0%, 0%, 0.8)"
        $header.style.backgroundColor = "rgb(8, 26 27 / 93%)";
    }
})

/////////////////////////////=====navication

