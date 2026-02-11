import { animate, inView } from "motion";

export function initMarqueeAnimation(): void {
  const marqueeTrack: HTMLElement | null =
    document.getElementById("marqueeTrack");
  const cards: NodeListOf<Element> = document.querySelectorAll(".card");
  const container: HTMLElement | null =
    document.querySelector(".marquee-container");

  if (!marqueeTrack || !cards.length) return;

  let hoverTimeout: number | undefined;
  const cardElements = Array.from(cards) as HTMLElement[];

  // Initialize staggered card entrance animation
  inView(
    container || marqueeTrack,
    () => {
      cardElements.forEach((card, index) => {
        animate(
          card,
          {
            opacity: [0, 1],
            y: [30, 0],
            scale: [0.9, 1],
          },
          {
            duration: 0.6,
            delay: index * 0.1,
          },
        );
      });
    },
    {
      margin: "0px 0px -100px 0px",
    },
  );

  // Enhanced hover animations
  cardElements.forEach((card: HTMLElement): void => {
    card.addEventListener("mouseenter", (): void => {
      // Pause the marquee with smooth transition
      marqueeTrack.classList.add("paused");

      // Enhanced card hover animation
      animate(
        card,
        {
          scale: 1.1,
          y: -15,
        },
        {
          duration: 0.4,
        },
      );

      // Clear any existing timeout
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
        hoverTimeout = undefined;
      }
    });

    card.addEventListener("mouseleave", (): void => {
      // Resume the marquee after a delay
      hoverTimeout = setTimeout((): void => {
        marqueeTrack.classList.remove("paused");
      }, 300);

      // Reset card with smooth animation
      animate(
        card,
        {
          scale: 1,
          y: 0,
        },
        {
          duration: 0.5,
        },
      );
    });
  });

  // Enhanced container hover behavior
  if (container) {
    container.addEventListener("mouseenter", (): void => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
        hoverTimeout = undefined;
      }

      // Subtle container entrance effect
      animate(
        container,
        {
          scale: [1, 1.02],
        },
        {
          duration: 0.3,
        },
      );
    });

    container.addEventListener("mouseleave", (): void => {
      // Reset container scale
      animate(
        container,
        {
          scale: 1,
        },
        {
          duration: 0.4,
        },
      );

      hoverTimeout = setTimeout((): void => {
        marqueeTrack.classList.remove("paused");
      }, 500);
    });
  }
}
