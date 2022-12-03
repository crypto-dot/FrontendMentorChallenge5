
(function attachEventListenersProductMenu() {
    let menus = document.getElementsByClassName("li--hasMenu");
    let hiddenMenus = document.getElementsByClassName("ul--hidden");
    let liHiddens = document.getElementsByClassName("li--hidden");
    let hiddenMenuIndex = 0;
    let numberOfBulletsInFirstMenu = 5;
    let numberOfBulletsInSecondMenu = 4;
    let numberOfBulletsInThirdMenu = 3;
    Array.from(menus).forEach(menu => {
        bindEvents(menu, hiddenMenus[hiddenMenuIndex]);
        hiddenMenuIndex++;
    });

    Array.from(hiddenMenus).forEach(hiddenMenu => bindEvents(hiddenMenu));

    hiddenMenuIndex = 0;
    Array.from(liHiddens).forEach(liHidden => {
        //Determine which menu the li is in to determine the menu to keep open
        if (hiddenMenuIndex < numberOfBulletsInFirstMenu) {
            bindEvents(liHidden, hiddenMenus[0]);
        } else if (hiddenMenuIndex < numberOfBulletsInFirstMenu + numberOfBulletsInSecondMenu) {
            bindEvents(liHidden, hiddenMenus[1]);
        } else if (hiddenMenuIndex < numberOfBulletsInThirdMenu + numberOfBulletsInFirstMenu + numberOfBulletsInSecondMenu) {
            bindEvents(liHidden, hiddenMenus[2]);
        }
        hiddenMenuIndex++;
    });

})();

function bindEvents(element, hiddenMenu = null) {
    // For keyboard users we only want them to tab through the menu without closing the menu everytime they focus off (except for the last element)
    if (element.getAttribute("class") === "li--hidden") {
        element.addEventListener("focus", openMenu.bind(this, element, hiddenMenu));
        element.addEventListener("mouseenter", openMenu.bind(this, element, hiddenMenu));
        if (element.hasAttribute("id", "last--li--hidden")) {
            element.addEventListener("focusout", closeMenu.bind(this, element, hiddenMenu));
        }
        console.log(element);
        return;
    }
    element.addEventListener("mouseenter", openMenu.bind(this, element, hiddenMenu));
    console.log('s')
    element.addEventListener("mouseleave",
        closeMenu.bind(this, element, hiddenMenu));
}
function openMenu(menu, hiddenMenu = null) {
    if (menu.hasAttribute("aria-expanded")) {
        menu.setAttribute("aria-expanded", "true");
    }
    if (!hiddenMenu) {
        menu.style.clipPath = "circle(100%)";
    }
    if (hiddenMenu) {
        hiddenMenu.style.clipPath = "circle(100%)";
    }
}
function closeMenu(menu, hiddenMenu = null) {
    if (menu.hasAttribute("aria-expanded")) {
        menu.setAttribute("aria-expanded", "false");
    }
    console.log('a')
    if (!hiddenMenu) {
        menu.style.clipPath = "circle(0% at 5% 5%)";
    }
    if (hiddenMenu) {
        hiddenMenu.style.clipPath = "circle(0% at 5% 5%)";
    }
}

