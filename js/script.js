// =========================
// MOBILE MENU
// =========================

const menuButton = document.getElementById("menuButton");
const closeMenu = document.getElementById("closeMenu");
const mobileMenu = document.getElementById("mobileMenu");

// Open menu
menuButton.addEventListener("click", function () {
    mobileMenu.classList.add("open");
});

// Close menu using X button
closeMenu.addEventListener("click", function () {
    mobileMenu.classList.remove("open");
});

// Close menu when clicking a menu link
const mobileLinks = mobileMenu.querySelectorAll("a");

mobileLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        mobileMenu.classList.remove("open");
    });
});

// Close menu when clicking/touching outside
document.addEventListener("click", function (event) {

    // Check if the menu is currently open
    if (!mobileMenu.classList.contains("open")) {
        return;
    }

    // If the click is outside the menu AND outside the menu button
    if (
        !mobileMenu.contains(event.target) &&
        !menuButton.contains(event.target)
    ) {
        mobileMenu.classList.remove("open");
    }
});


// =========================
// ACTIVE NAVIGATION
// =========================

const navLinks = document.querySelectorAll(".top-nav a");
const sections = document.querySelectorAll("main section[id]");

function updateNavigation() {
    const position = window.scrollY + 120;
    let currentSection = "home";

    sections.forEach(function (section) {
        if (section.offsetTop <= position) {
            currentSection = section.id;
        }
    });

    navLinks.forEach(function (link) {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }
    });
}

window.addEventListener("scroll", updateNavigation);
window.addEventListener("load", updateNavigation);

// =========================
// BACK TO TOP
// =========================

const backTop = document.getElementById("backTop");

window.addEventListener("scroll", function () {
    if (window.scrollY > 400) {
        backTop.classList.add("show");
    } else {
        backTop.classList.remove("show");
    }
});

backTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
