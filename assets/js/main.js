const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
 hamburger.classList.toggle("active");
 navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
 hamburger.classList.remove("active");
 navMenu.classList.remove("active");
}




var string = "Front End Web Developer & Freelancer";
var str = string.split("");
var el = document.getElementById('str');
(function animate() {
 str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running);
 var running = setTimeout(animate, 90);
})();