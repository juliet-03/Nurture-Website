// === Smooth Scroll Reveal ===
document.addEventListener("DOMContentLoaded", () => {
    const revealElements = document.querySelectorAll("section, .card");
  
    const revealOnScroll = () => {
      revealElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add("visible");
        }
      });
    };
  
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Reveal on load too
  });
  
  // === Dynamic Navbar Highlight (Optional) ===
  const navLinks = document.querySelectorAll("nav a");
  window.addEventListener("scroll", () => {
    let fromTop = window.scrollY;
  
    navLinks.forEach(link => {
      const section = document.querySelector(link.hash);
      if (
        section &&
        section.offsetTop <= fromTop + 150 &&
        section.offsetTop + section.offsetHeight > fromTop + 150
      ) {
        navLinks.forEach(link => link.classList.remove("active"));
        link.classList.add("active");
      }
    });
  });
  
  // === Button Ripple Effect (Optional Coolness) ===
  document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function (e) {
      const ripple = document.createElement('span');
      ripple.classList.add('ripple');
      ripple.style.left = `${e.offsetX}px`;
      ripple.style.top = `${e.offsetY}px`;
      this.appendChild(ripple);
  
      setTimeout(() => ripple.remove(), 600);
    });
  });

  // === Scroll-to-Top Button Logic ===
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    scrollTopBtn.classList.add("show");
  } else {
    scrollTopBtn.classList.remove("show");
  }
});
document.getElementById("hamburger").addEventListener("click", function () {
  document.getElementById("navLinks").classList.toggle("active");
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
