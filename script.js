// Southern Custom PC and Hardware LLC
// script.js

// Display the current year in the footer (if an element exists)
const yearElement = document.getElementById("year");
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Appointment form confirmation
const bookingForm = document.querySelector(".booking form");

if (bookingForm) {
    bookingForm.addEventListener("submit", function () {
        alert("Thank you! Your appointment request has been submitted. We will contact you soon.");
    });
}

console.log("Southern Custom PC and Hardware website loaded successfully.");
