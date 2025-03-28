
window.addEventListener("scroll", function() {
    let logo = document.getElementById("logo");

    if (window.scrollY > 100) { // Jab user 100px ya usse zyada scroll kare
        logo.style.width = "300px"; // Logo chhota ho jayega
    } else {
        logo.style.width ="400px"; // Wapas bada ho jayega
    }
});

window.addEventListener("scroll", function () {
    var logo = document.getElementById("navbar-nav");
    if (window.scrollY > 100) {
        logo.classList.add("hidden");
    } else {
        logo.classList.remove("hidden");
    }
});
window.addEventListener("scroll", function () {
    let nav = document.getElementById("nav");

    if (window.scrollY > 100) {
        nav.classList.add("nav-small");  // Navbar chhota hoga aur neeche aayega
    } else {
        nav.classList.remove("nav-small");
    }
});
window.addEventListener("scroll", function () {
    let nav = document.getElementById("nav");
    console.log("ScrollY:", window.scrollY);  // Check karne ke liye
    
    if (window.scrollY > 100) {
        console.log("Adding nav-small class");
        nav.classList.add("nav-small");  
    } else {
        console.log("Removing nav-small class");
        nav.classList.remove("nav-small");
    }
});
window.addEventListener("scroll", function() {
    let navbarNav = document.querySelector(".navbar-nav");  // Navbar ko select karo
    if (window.scrollY > 100) {  // Jab scroll 50px se zyada ho jaye
        navbarNav.style.marginBottom = "100px";
    } else {
        navbarNav.style.marginBottom = "0px"; // Agar scroll na ho toh normal rakho
    }
});


window.addEventListener("scroll", function() {
    let nav = document.getElementById("nav");

    if (window.scrollY > 100) { // Jab user 100px ya usse zyada scroll kare
        nav.classList.add("nav-hide");
        setTimeout(() => {
            // 100ms ke baad neeche se
            nav.classList.remove("nav-hide");
            nav.classList.add("nav-show");
            
        }, 400);
    } else {
        nav.classList.remove("nav-hide");
            nav.classList.remove("nav-show");
    }
});
document.addEventListener("DOMContentLoaded", () => {
    let divs = document.querySelectorAll(".animate"); // Sirf ".animate" class wale select karo
    divs.forEach((div, index) => {
        setTimeout(() => {
            div.classList.add("show");
        }, index * 0.300); // Har div 300ms delay se animate hoga
    });
});