// const navSlide = () => {
//   const burgerMenu = document.querySelector(".burger-menu");
//   const nav = document.querySelector(".nav-links");
//   const navLinks = document.querySelectorAll(".nav-links li");

//   // Add this code to create the backdrop
//   const backdrop = document.createElement("div");
//   backdrop.classList.add("nav-backdrop");
//   document.body.appendChild(backdrop);

//   function resetNavLinkAnimations() {
//     navLinks.forEach((link) => {
//       link.style.animation = "";
//     });
//   }

//   burgerMenu.addEventListener("click", () => {
//     // TOGGLE NAV //
//     nav.classList.toggle("nav-active");
//     // Toggle backdrop
//     backdrop.classList.toggle("active");
//     document.body.style.overflow = nav.classList.contains("nav-active")
//       ? "hidden"
//       : "auto";

//     if (!nav.classList.contains("nav-active")) {
//       resetNavLinkAnimations();
//     }

//     // ANIMATED LINKS //
//     navLinks.forEach((link, index) => {
//       if (link.style.animation) {
//         link.style.animation = "";
//       } else {
//         link.style.animation = `navLinkFade 0.5s ease forwards ${
//           index / 7 + 0.3
//         }s`;
//       }
//     });

//     // Add this event listener to close the menu when clicking the backdrop
//     backdrop.addEventListener("click", () => {
//       nav.classList.remove("nav-active");
//       backdrop.classList.remove("active");
//       burgerMenu.classList.remove("toggle");
//       document.body.style.overflow = "auto";
//       resetNavLinkAnimations();
//     });

//     // BURGER ANIMATION //
//     burgerMenu.classList.toggle("toggle");
//   });
// };

// navSlide();

document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger-menu");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  const navBackdrop = document.createElement("div");
  navBackdrop.classList.add("nav-backdrop");
  document.body.appendChild(navBackdrop);

  const toggleNav = () => {
    nav.classList.toggle("nav-active");
    navBackdrop.classList.toggle("active");

    // Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });

    // Burger Animation
    burger.classList.toggle("toggle");
  };

  burger.addEventListener("click", toggleNav);
  navBackdrop.addEventListener("click", toggleNav);
});

navSlide();
