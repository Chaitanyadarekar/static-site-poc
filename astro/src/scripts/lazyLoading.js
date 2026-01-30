export function initLazyLoading() {
  if ("IntersectionObserver" in window) {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    lazyImages.forEach((img) => {
      if (img.src) {
        img.dataset.lazySrc = img.src;
        img.removeAttribute("src");
        img.style.opacity = "0";
        img.style.transform = "scale(0.95)";
      }
    });

    const observerOptions = {
      root: null,
      rootMargin: "50px",
      threshold: 0.1,
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const section = entry.target;
          section.classList.add("section-visible");
          sectionObserver.unobserve(section);
        }
      });
    }, observerOptions);

    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;

          if (img.dataset.lazySrc) {
            img.src = img.dataset.lazySrc;
            img.removeAttribute("data-lazy-src");
            img.classList.add("image-loaded");

            img.style.opacity = "1";
            img.style.transform = "scale(1)";
          }

          imageObserver.unobserve(img);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      sectionObserver.observe(section);
    });

    const imagesToObserve = document.querySelectorAll("img[data-lazy-src]");
    imagesToObserve.forEach((img) => {
      imageObserver.observe(img);
    });
  } else {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    lazyImages.forEach((img) => {
      img.classList.add("image-loaded");
      img.style.opacity = "1";
      img.style.transform = "scale(1)";
    });

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      section.classList.add("section-visible");
    });
  }
}

document.addEventListener("DOMContentLoaded", initLazyLoading);
