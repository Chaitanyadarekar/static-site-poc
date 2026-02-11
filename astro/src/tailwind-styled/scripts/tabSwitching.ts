export function initTabSwitching(): void {
  const tabButtons = document.querySelectorAll<HTMLElement>("[data-tab]");
  const tabPanes = document.querySelectorAll<HTMLElement>("[data-pane]");

  if (tabButtons.length === 0) {
    return;
  }

  function activateTab(tabIndex: number): void {
    tabButtons.forEach((btn: HTMLElement, index: number) => {
      btn.setAttribute("data-active", index === tabIndex ? "true" : "false");
    });

    tabPanes.forEach((pane: HTMLElement, index: number) => {
      pane.setAttribute("data-active", index === tabIndex ? "true" : "false");
    });
  }

  tabButtons.forEach((button: HTMLElement, index: number) => {
    button.addEventListener("click", function (e: Event): void {
      e.preventDefault();
      activateTab(index);
    });
  });
}
