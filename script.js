// --- Menú móvil ---
const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");

navToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
});

// Cierra el menú móvil al pulsar un enlace
mainNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// --- Revelado suave al hacer scroll ---
const revealItems = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealItems.forEach(item => observer.observe(item));

// --- Formulario de contacto (demo, sin backend real) ---
const form = document.getElementById("contactForm");
const feedback = document.getElementById("formFeedback");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const nombre = form.nombre.value.trim();

  // Esto es solo una demostración: para que el formulario envíe
  // correos de verdad, necesitarás un servicio como Formspree,
  // Netlify Forms, o tu propio backend.
  feedback.textContent = `Gracias, ${nombre || "amigo/a"}. Te responderemos pronto.`;
  form.reset();
});

// --- Año automático en el pie de página ---
document.getElementById("year").textContent = new Date().getFullYear();
