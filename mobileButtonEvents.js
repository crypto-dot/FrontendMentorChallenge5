(function mobileButtonEvents() {
    const mobileButton = document.querySelector(".button--mobileNav");
    const leftNav = document.querySelector(".ul--leftNav");
    const rightNav = document.querySelector(".ul--rightNav");

                                                    mobileButton.addEventListener("click", showMenu.bind(this, mobileButton, leftNav, rightNav));


})();
function showMenu(mobileButton, leftNav, rightNav) {
    const isOpen = mobileButton.getAttribute("aria-expanded") === "true";
    if (!isOpen) {
        mobileButton.setAttribute("aria-expanded", "true");
        leftNav.style.height = "auto";
        rightNav.style.height = "auto";
        leftNav.style.padding = "2rem";
        rightNav.style.padding = "1rem 0rem 2rem 0rem";
  } else {
        mobileButton.setAttribute("aria-expanded", "false");
        leftNav.style.height = "0";
        rightNav.style.height = "0";
        leftNav.style.padding = "0rem";
        rightNav.style.padding = "0rem";
    }
}
