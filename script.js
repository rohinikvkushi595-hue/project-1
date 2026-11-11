
// MOBILE NAVIGATION
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");

    menuToggle.textContent =
      navMenu.classList.contains("active") ? "✕" : "☰";
  });
}

// CLOSE MOBILE MENU AFTER CLICKING A LINK
document.querySelectorAll("#navMenu a").forEach(function(link) {
  link.addEventListener("click", function() {
    navMenu.classList.remove("active");

    if (menuToggle) {
      menuToggle.textContent = "☰";
    }
  });
});

// NEWSLETTER FORM
const newsletterForm = document.getElementById("newsletterForm");

if (newsletterForm) {
  newsletterForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = newsletterForm.querySelector("input").value;

    alert("Thank you for subscribing to NESTORA!");

    newsletterForm.reset();
  });
}