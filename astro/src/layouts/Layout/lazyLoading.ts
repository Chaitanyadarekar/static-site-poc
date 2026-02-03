export function initLazyLoading(): void {
  if ("IntersectionObserver" in window) {
    const lazyImages = document.querySelectorAll<HTMLImageElement>(
      'img[loading="lazy"]',
    );
    lazyImages.forEach((img: HTMLImageElement) => {
      if (img.src) {
        img.dataset.lazySrc = img.src;
        img.removeAttribute("src");
        img.style.opacity = "0";
        img.style.transform = "scale(0.95)";
      }
    });

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "50px",
      threshold: 0.1,
    };

    const sectionObserver = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry: IntersectionObserverEntry) => {
          if (entry.isIntersecting) {
            const section = entry.target as HTMLElement;
            section.classList.add("section-visible");
            sectionObserver.unobserve(section);
          }
        });
      },
      observerOptions,
    );

    const imageObserver = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry: IntersectionObserverEntry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;

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
      },
      observerOptions,
    );

    const sections = document.querySelectorAll<HTMLElement>("section");
    sections.forEach((section: HTMLElement) => {
      sectionObserver.observe(section);
    });

    const imagesToObserve =
      document.querySelectorAll<HTMLImageElement>("img[data-lazy-src]");
    imagesToObserve.forEach((img: HTMLImageElement) => {
      imageObserver.observe(img);
    });
  } else {
    const lazyImages = document.querySelectorAll<HTMLImageElement>(
      'img[loading="lazy"]',
    );
    lazyImages.forEach((img: HTMLImageElement) => {
      img.classList.add("image-loaded");
      img.style.opacity = "1";
      img.style.transform = "scale(1)";
    });

    const sections = document.querySelectorAll<HTMLElement>("section");
    sections.forEach((section: HTMLElement) => {
      section.classList.add("section-visible");
    });
  }
}
