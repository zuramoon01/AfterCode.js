document.addEventListener("DOMContentLoaded", () => {
  // UserNav
  // Get DOM Elements
  const userName = document.querySelector(".header .text");
  const userNameMenu = document.querySelector(".header-user-nav-account");
  userNameMenu.style.display = "none";

  // Hamburger Menu
  // Get DOM Elements
  const hamburgerIcon = document.querySelector(".header-hamburger span i");
  const hamburgerMenu = document.querySelector(".header-hamburger-menu");
  const hamburgerClose = document.querySelector(
    ".header-hamburger-menu .container span"
  );

  // Function & Events
  const displayElement = (event, element, display) => {
    event.addEventListener("click", () => {
      element.style.display = display;
    });
  };

  displayElement(hamburgerIcon, hamburgerMenu, "flex");
  displayElement(hamburgerClose, hamburgerMenu, "none");

  document.addEventListener("click", (e) => {
    if (e.target == userName) {
      userNameMenu.style.display = "inline-block";
    } else if (typeof userName != "undefined" && userName != null) {
      if (userNameMenu.style.display !== "none") {
        userNameMenu.style.display = "none";
      }
    }
  });
});
