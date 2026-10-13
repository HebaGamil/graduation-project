
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const navItems = document.querySelectorAll(".nav-link");

const startButton = document.getElementById("start-btn");
const loginButton = document.getElementById("login-btn");

const currentYear = document.getElementById("current-year");


menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");

    menuToggle.setAttribute("aria-expanded", isOpen);

    if (isOpen) {
        menuToggle.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }

});


navItems.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("open");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';

    });

});


// =========================
// 4. Active Navbar Link
// =========================

navItems.forEach(function (link) {

    link.addEventListener("click", function () {

        navItems.forEach(function (item) {
            item.classList.remove("active");
        });

        link.classList.add("active");

    });

});


// =========================
// 5. Update Copyright Year
// =========================

currentYear.textContent = new Date().getFullYear();


// =========================
// 6. Start Your Plan Button
// =========================

startButton.addEventListener("click", function () {

    alert(
        "Welcome to FitLife! Your personalized fitness plan will be available soon."
    );

});


// =========================
// 7. Login Button
// =========================

loginButton.addEventListener("click", function (event) {

    event.preventDefault();

    alert(
        "The login page will be available soon."
    );

});


document.addEventListener("click", function (event) {

    const clickedInsideMenu = navLinks.contains(event.target);
    const clickedToggle = menuToggle.contains(event.target);

    if (!clickedInsideMenu && !clickedToggle) {

        navLinks.classList.remove("open");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';

    }

});
