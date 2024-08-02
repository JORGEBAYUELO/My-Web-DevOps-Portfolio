const navSlide = () => {
  const burgerMenu = document.querySelector(".burger-menu");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  // Add this code to create the backdrop
  const backdrop = document.createElement("div");
  backdrop.classList.add("nav-backdrop");
  document.body.appendChild(backdrop);

  burgerMenu.addEventListener("click", () => {
    // TOGGLE NAV //
    nav.classList.toggle("nav-active");
    // Toggle backdrop
    backdrop.classList.toggle("active");
    document.body.style.overflow = nav.classList.contains("nav-active")
      ? "hidden"
      : "auto";

    // ANIMATED LINKS //
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });

    // Add this event listener to close the menu when clicking the backdrop
    backdrop.addEventListener("click", () => {
      nav.classList.remove("nav-active");
      backdrop.classList.remove("active");
      burgerMenu.classList.remove("toggle");
      document.body.style.overflow = "auto";
    });

    // BURGER ANIMATION //
    burgerMenu.classList.toggle("toggle");
  });
};

navSlide();

// FOR INTERACTIVITY CONTACT FORM //
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#contact form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Form submitted!");
  });
});
