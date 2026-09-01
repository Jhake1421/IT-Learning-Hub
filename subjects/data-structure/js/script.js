// MOBILE MENU

const menuButton = document.getElementById("menuButton");
const closeMenu = document.getElementById("closeMenu");
const mobileMenu = document.getElementById("mobileMenu");

menuButton.addEventListener("click", function () {
    mobileMenu.classList.add("open");
});

closeMenu.addEventListener("click", function () {
    mobileMenu.classList.remove("open");
});

// Close mobile navigation after selecting a link.

const mobileLinks = mobileMenu.querySelectorAll("a");

mobileLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        mobileMenu.classList.remove("open");
    });
});


// ACTIVE NAVIGATION / SCROLL SPY

const topLinks = document.querySelectorAll(".top-nav a");
const mobileTopLinks = document.querySelectorAll(".mobile-top-links a");
const sidebarLinks = document.querySelectorAll(".sub-links a");
const sidebarCategories = document.querySelectorAll(".category-link");

// SIDEBAR CATEGORY EXPAND / COLLAPSE

sidebarCategories.forEach(function (categoryLink) {

    categoryLink.addEventListener("click", function (event) {

        event.preventDefault();

        const category = categoryLink.closest(".side-category");
        const arrow = categoryLink.querySelector("span:last-child");

        category.classList.toggle("expanded");

        if (category.classList.contains("expanded")) {
            arrow.textContent = "⌃";
        } else {
            arrow.textContent = "⌄";
        }

    });

});

const majorSections = [
    document.getElementById("overview"),
    document.getElementById("prelims"),
    document.getElementById("midterms"),
    document.getElementById("finals"),
    document.getElementById("grading")
];

function removeActive(elements) {
    elements.forEach(function (element) {
        element.classList.remove("active");
    });
}

function setMajorNavigation(id) {
    removeActive(topLinks);
    removeActive(mobileTopLinks);

    topLinks.forEach(function (link) {
        if (link.getAttribute("href") === "#" + id) {
            link.classList.add("active");
        }
    });

    mobileTopLinks.forEach(function (link) {
        if (link.getAttribute("href") === "#" + id) {
            link.classList.add("active");
        }
    });
}

function setSidebarNavigation(id) {
    removeActive(sidebarLinks);
    removeActive(sidebarCategories);

    sidebarLinks.forEach(function (link) {
        if (link.getAttribute("href") === "#" + id) {
            link.classList.add("active");

            const category = link.closest(".side-category");

            if (category) {
                const categoryLink = category.querySelector(".category-link");

                if (categoryLink) {
                    categoryLink.classList.add("active");
                }
            }
        }
    });

    sidebarCategories.forEach(function (link) {
        if (link.getAttribute("href") === "#" + id) {
            link.classList.add("active");
        }
    });
}

function updateNavigation() {
    const position = window.scrollY + 120;

    let currentMajor = "overview";

    majorSections.forEach(function (section) {
        if (section.offsetTop <= position) {
            currentMajor = section.id;
        }
    });

    setMajorNavigation(currentMajor);

    // Find the lesson closest to the top of the viewport.
    const lessons = document.querySelectorAll(".lesson");
    let currentLesson = null;

    lessons.forEach(function (lesson) {
        if (lesson.offsetTop <= position + 70) {
            currentLesson = lesson.id;
        }
    });

    if (currentLesson) {
        setSidebarNavigation(currentLesson);
    }
}

window.addEventListener("scroll", updateNavigation);
window.addEventListener("load", updateNavigation);


// TOPIC TAB HIGHLIGHTING

const topicLinks = document.querySelectorAll(".topic-tabs a");
const lessonElements = document.querySelectorAll(".lesson");

function updateTopicTabs() {
    const position = window.scrollY + 160;
    let currentLesson = null;

    lessonElements.forEach(function (lesson) {
        if (lesson.offsetTop <= position) {
            currentLesson = lesson.id;
        }
    });

    topicLinks.forEach(function (link) {
        link.classList.remove("active");

        if (currentLesson && link.getAttribute("href") === "#" + currentLesson) {
            link.classList.add("active");
        }
    });
}

window.addEventListener("scroll", updateTopicTabs);
window.addEventListener("load", updateTopicTabs);


// BACK TO TOP

const backTop = document.getElementById("backTop");

window.addEventListener("scroll", function () {
    if (window.scrollY > 500) {
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
