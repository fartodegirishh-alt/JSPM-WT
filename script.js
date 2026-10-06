// ================================
// MOBILE NAVIGATION
// ================================

const header = document.querySelector("header");
const nav = document.querySelector("nav");

const menuButton = document.createElement("button");

menuButton.className = "menu-button";
menuButton.innerHTML = "☰";
menuButton.setAttribute("aria-label", "Open navigation menu");

header.insertBefore(menuButton, nav);

menuButton.addEventListener("click", () => {
    nav.classList.toggle("active");

    if (nav.classList.contains("active")) {
        menuButton.innerHTML = "✕";
    } else {
        menuButton.innerHTML = "☰";
    }
});


// Close mobile menu after clicking a link
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
        menuButton.innerHTML = "☰";
    });
});


// ================================
// HEADER SHADOW ON SCROLL
// ================================

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


// ================================
// CONTACT FORM
// ================================

const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = contactForm.querySelector(
        'input[type="text"]'
    ).value.trim();

    const email = contactForm.querySelector(
        'input[type="email"]'
    ).value.trim();

    const subject = contactForm.querySelectorAll(
        'input[type="text"]'
    )[1].value.trim();

    const message = contactForm.querySelector(
        "textarea"
    ).value.trim();


    if (name === "" || email === "" || message === "") {

        alert("Please fill in all required fields.");

        return;
    }


    // Basic email validation
    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        alert("Please enter a valid email address.");

        return;
    }


    alert(
        `Thank you, ${name}!\n\n` +
        `Your message has been received.\n` +
        `Our team will contact you soon.`
    );


    contactForm.reset();

});


// ================================
// APPLY NOW BUTTON
// ================================

const admissionButton =
    document.querySelector(".admission-btn");

admissionButton.addEventListener("click", () => {

    document.querySelector("#contact").scrollIntoView({
        behavior: "smooth"
    });

});


// ================================
// SCROLL REVEAL ANIMATION
// ================================

const animatedElements = document.querySelectorAll(
    ".department-card, .facility, .about-container, " +
    ".placement-content, .contact-container"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.15
    }
);


animatedElements.forEach(element => {

    element.classList.add("reveal");

    observer.observe(element);

});


// ================================
// CURRENT YEAR IN FOOTER
// ================================

const copyright =
    document.querySelector(".copyright p");

if (copyright) {

    const currentYear = new Date().getFullYear();

    copyright.innerHTML =
        `© ${currentYear} JSPM RSCOE. All Rights Reserved.`;

}
