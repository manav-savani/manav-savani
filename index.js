document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

document.querySelectorAll(".fade-in-up").forEach((el) => {
  observer.observe(el);
});

window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (window.scrollY > 100) {
    nav.style.background = "rgba(10, 10, 10, 0.95)";
  } else {
    nav.style.background = "rgba(10, 10, 10, 0.8)";
  }
});

window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const parallax = document.querySelector(".hero-content");
  const speed = scrolled * 0.5;
  if (parallax) {
    parallax.style.transform = `translateY(${speed}px)`;
  }
});

document.querySelectorAll(".skill-tag").forEach((tag) => {
  tag.addEventListener("mouseenter", function () {
    this.style.background = `rgba(${Math.random() * 255}, ${
      Math.random() * 255
    }, 136, 0.2)`;
  });

  tag.addEventListener("mouseleave", function () {
    this.style.background = "rgba(0, 255, 136, 0.1)";
  });
});

const heroTitle = document.querySelector(".hero-title");
if (heroTitle) {
  const text = "Manav Savani";
  heroTitle.textContent = "";
  let i = 0;
  const typeWriter = () => {
    if (i < text.length) {
      heroTitle.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  };
  setTimeout(typeWriter, 500);
}

const menuIcon = document.getElementById("menu-icon");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links span");
menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuIcon.classList.toggle("toggle");
});

navItems.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuIcon.classList.remove("toggle");
  });
});

const dropdown = document.querySelector(".dropdown .dropdown-toggle");
const dropdownMenu = document.querySelector(".dropdown-menu");

const dropdownMenuLinks = document.querySelectorAll(".dropdown-menu li a");

dropdown.addEventListener("click", (e) => {
  e.preventDefault();
  dropdownMenu.classList.toggle("active");
});

dropdownMenuLinks.forEach(link => {
  link.addEventListener("click", () => {
    dropdownMenu.classList.remove("active");
  });
});

