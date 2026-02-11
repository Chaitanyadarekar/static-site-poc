import { animate, scroll, inView } from "@motionone/dom";

export function initScaleAnimation(): void {
  const scaleRect: HTMLElement | null = document.getElementById("scaleRect");
  const section: HTMLElement | null = document.querySelector(".scale-section");

  if (!scaleRect || !section) return;

  // Enhanced scroll-based animation
  scroll(
    animate(scaleRect, {
      scale: [0.1, 1, 0.1],
    }),
    {
      target: section,
      offset: ["start end", "center center", "end start"],
    },
  );

  // Add viewport-based entrance animation
  inView(
    scaleRect,
    () => {
      animate(
        scaleRect,
        {
          opacity: [0, 1],
          y: [50, 0],
        },
        {
          duration: 0.8,
        },
      );
    },
    {
      margin: "0px 0px -100px 0px",
    },
  );
}
