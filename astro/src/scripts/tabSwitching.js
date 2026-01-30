export function initTabSwitching() {
  const tabButtons = document.querySelectorAll("[data-tab]");
  const tabPanes = document.querySelectorAll("[data-pane]");

  if (tabButtons.length === 0) {
    return;
  }

  function activateTab(tabIndex) {
    tabButtons.forEach((btn, index) => {
      btn.setAttribute("data-active", index === tabIndex ? "true" : "false");
    });

    tabPanes.forEach((pane, index) => {
      pane.setAttribute("data-active", index === tabIndex ? "true" : "false");
    });
  }

  tabButtons.forEach((button, index) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      activateTab(index);
    });
  });
}

document.addEventListener("DOMContentLoaded", initTabSwitching);
