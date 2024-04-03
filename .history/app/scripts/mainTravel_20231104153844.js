
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

const $search = document.querySelector("span.click-to-top")

//////////////////////////////////

document.querySelectorAll('.about .controls-btn').forEach(my__btn => {
    my__btn.onclick = () => {
        let src = my__btn.getAttribute('data-src');
        document.querySelector('.about .video-container .video').src = src;
    }
});

//////////////////////////////=====Header
const $header = document.querySelector(".header");
const $home = document.getElementById("Home").scrollHeight;
console.log($home - 70);
window.addEventListener("scroll", function(e) {
    if (e.currentTarget.scrollY >= ($home - 800)) {
        $header.style.height = "100px";
        $header.style.boxShadow = "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px";
        $header.style.backgroundColor = "rgb(3 37 39 / 100%)";
    } else {
        $header.style.height = "90px";
        $header.style.boxShadow = "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;"
        $header.style.backgroundColor = "rgb(3 37 39 / 93%)";
    }
})

/////////////////////////////=====navication
