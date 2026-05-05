document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     ELEMENTOS
  ========================= */
  const navBtn = document.getElementById("navDestinos");
  const navDropdown = document.getElementById("navDropdown");
  const chevron = document.getElementById("chevron");

  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  const closeMenu = document.getElementById("closeMenu");
  const mobileDestinos = document.getElementById("mobileDestinos");
  const mobileDropdown = document.getElementById("mobileDropdown");


  if (mobileDestinos && mobileDropdown) {
    mobileDestinos.addEventListener("click", () => {
      mobileDropdown.classList.toggle("active");
    });
  }
  /* =========================
     MENU MOBILE (FULLSCREEN)
  ========================= */

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      mobileMenu.classList.add("active");
    });
  }

  if (closeMenu) {
    closeMenu.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
    });
  }

  // cerrar tocando fondo
  if (mobileMenu) {
    mobileMenu.addEventListener("click", (e) => {
      if (e.target === mobileMenu) {
        mobileMenu.classList.remove("active");
      }
    });
  }

  /* =========================
     DROPDOWN DESTINOS
  ========================= */

  if (navBtn && navDropdown) {

  navBtn.addEventListener("click", (e) => {

    if (window.innerWidth <= 768) {
      e.preventDefault();
      e.stopPropagation();

      navDropdown.classList.toggle("active");

      if (chevron) {
        chevron.classList.toggle("rotate");
      }
    }

  });

  document.addEventListener("click", (e) => {
    if (window.innerWidth <= 768) {
      if (!navDropdown.contains(e.target) && !navBtn.contains(e.target)) {
        navDropdown.classList.remove("active");
        chevron?.classList.remove("rotate");
      }
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
     SLIDER
  ========================= */

  function initInfiniteSlider(id, speed = 5) {
    const el = document.getElementById(id);
    if (!el) return;

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
        position -= speed;
        el.style.transform = `translateX(${position}px)`;

        if (Math.abs(position) >= el.scrollWidth / 2) {
          position = 0;
        }
      }

      requestAnimationFrame(animate);
    }

    animate();
  }

  initInfiniteSlider("track", 1.5);
  initInfiniteSlider("gtrack", 2);

});

