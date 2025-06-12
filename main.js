// === Gestion du menu responsive ===
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

// Ferme le menu si on clique sur un lien de navigation
navLinks.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
  }
});

// === Animation ScrollReveal ===
if (typeof ScrollReveal !== "undefined") {
  const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };

  // Header
  ScrollReveal().reveal(".header__container p", {
    ...scrollRevealOption,
  });

  ScrollReveal().reveal(".header__container h1", {
    ...scrollRevealOption,
    delay: 500,
  });

  // À propos
  ScrollReveal().reveal(".about__image img", {
    ...scrollRevealOption,
    origin: "left",
  });

  ScrollReveal().reveal(".about__content .section__subheader", {
    ...scrollRevealOption,
    delay: 500,
  });

  ScrollReveal().reveal(".about__content .section__header", {
    ...scrollRevealOption,
    delay: 1000,
  });

  ScrollReveal().reveal(".about__content .section__description", {
    ...scrollRevealOption,
    delay: 1500,
  });

  ScrollReveal().reveal(".about__btn", {
    ...scrollRevealOption,
    delay: 2000,
  });

  // Chambres
  ScrollReveal().reveal(".room__card", {
    ...scrollRevealOption,
    interval: 300,
  });

  // Services
  ScrollReveal().reveal(".service__list li", {
    ...scrollRevealOption,
    origin: "right",
    interval: 300,
  });

  // Explore
  ScrollReveal().reveal(".explore__content", {
    ...scrollRevealOption,
    origin: "left",
  });

  // Footer
  ScrollReveal().reveal(".footer__col", {
    ...scrollRevealOption,
    interval: 300,
  });
}
