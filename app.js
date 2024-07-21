const navSlide = () => {
  const burgerMenu = document.querySelector(".burger-menu");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burgerMenu.addEventListener("click", () => {
    //   TOGGLE NAV
    nav.classList.toggle("nav-active");

    //   ANIMATED LINKS
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });

    // BURGER ANIMATION
    burgerMenu.classList.toggle("toggle");
  });
};

navSlide();
