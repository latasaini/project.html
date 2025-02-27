const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click",(e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtn.setAttribute("class", isOpen ? "bx bx-close" : "bx bx-menu");

})

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "bx bx-menu");
})

const scrollRevealOption = {
    distance: "50px" ,
    origin: "bottom",
    duration: 1000, 
};

// header container 
ScrollReveal().reveal(".header-container .section-subheader", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".header-container h1", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".header-container .btn", {
    ...scrollRevealOption,
    display: 1000,
});


// room container 
ScrollReveal().reveal(".room-card", {
    ...scrollRevealOption,
    interval: 500,
})

// feature 
ScrollReveal().reveal(".feature-card", {
    ...scrollRevealOption,
    interval: 500,
})