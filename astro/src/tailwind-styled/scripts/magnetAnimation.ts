import { animate, scroll, inView } from "@motionone/dom";

export function initMagnetAnimation(): void {
  const largeRect: HTMLElement | null = document.getElementById("largeRect");
  const smallRect1: HTMLElement | null = document.getElementById("smallRect1");
  const smallRect2: HTMLElement | null = document.getElementById("smallRect2");
  const section: HTMLElement | null = document.querySelector(".magnet-section");

  if (!largeRect || !smallRect1 || !smallRect2 || !section) return;

  const rectangles = [largeRect, smallRect1, smallRect2];

  // Enhanced magnetic animation with coordinated movement
  scroll(
    animate(largeRect, {
      x: [-400, 0],
      scale: [0.8, 1],
    }),
    {
      target: section,
      offset: ["start end", "center center"],
    },
  );

  // Animate small rectangles with delay
  scroll(
    animate([smallRect1, smallRect2], {
      x: [400, -100],
      scale: [0.6, 1],
    }),
    {
      target: section,
      offset: ["start end", "center center"],
    },
  );

  // Individual movements for small rectangles
  scroll(
    animate(smallRect1, {
      y: [-50, -25],
    }),
    {
      target: section,
      offset: ["start end", "center center"],
    },
  );

  scroll(
    animate(smallRect2, {
      y: [50, 25],
    }),
    {
      target: section,
      offset: ["start end", "center center"],
    },
  );

  // Entrance animation for all rectangles
  inView(
    section,
    () => {
      rectangles.forEach((rect, index) => {
        animate(
          rect,
          {
            opacity: [0, 1],
          },
          {
            duration: 0.6,
            delay: index * 0.2,
          },
        );
      });
    },
    {
      margin: "0px 0px -50px 0px",
    },
  );
}
