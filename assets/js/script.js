document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     NAVBAR DROPDOWN
  ========================= */
  const navBtn = document.getElementById("navDestinos");
  const navDropdown = document.getElementById("navDropdown");
  const chevron = document.getElementById("chevron");

  if (navBtn && navDropdown) {
    navBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      navDropdown.classList.toggle("hidden");
      chevron?.classList.toggle("rotate");
    });

    document.addEventListener("click", (e) => {
      if (!navDropdown.contains(e.target) && !navBtn.contains(e.target)) {
        navDropdown.classList.add("hidden");
        chevron?.classList.remove("rotate");
      }
    });
  }


  /* =========================
     SCROLL A DESTINOS
  ========================= */
  const input = document.getElementById("destinoInput");

  if (input) {
    input.addEventListener("click", () => {
      const section = document.getElementById("destinos");
      section?.scrollIntoView({ behavior: "smooth" });
    });
  }


  /* =========================
     FUNCIÓN REUTILIZABLE SLIDER
  ========================= */
  function initInfiniteSlider(id, speed = 5) {

    const el = document.getElementById(id);
    if (!el) return;

    // duplicar solo una vez
    if (!el.classList.contains("duplicated")) {
      el.innerHTML += el.innerHTML;
      el.classList.add("duplicated");
    }

    let position = 0;
    let pause = false;

    el.addEventListener("mouseenter", () => pause = true);
    el.addEventListener("mouseleave", () => pause = false);

    function animate() {
      if (!pause) {
        position -= speed; // 👉 derecha → izquierda

        el.style.transform = `translateX(${position}px)`;

        if (Math.abs(position) >= el.scrollWidth / 2) {
          position = 0;
        }
      }

      requestAnimationFrame(animate);
    }

    animate();
  }


  /* =========================
     INICIALIZACIÓN
  ========================= */

  // reviews
  initInfiniteSlider("track", 1.5);

  // galería Perú
  initInfiniteSlider("gtrack", 2);

});