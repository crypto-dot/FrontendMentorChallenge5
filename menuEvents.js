(function attachEventListenersMenu() {
    let menus = document.getElementsByClassName("a--ul--leftNav");
    let hiddenMenus = document.getElementsByClassName("ul--hidden");
    let liHiddens = document.getElementsByClassName("li--hidden");
    let arrows = document.getElementsByClassName("svg--arrow");
    let hiddenMenuIndex = 0;
    const NUM_OF_BULLETS_FIRST_MENU = 5;
    const NUM_OF_BULLETS_SECOND_MENU = 4;
    const NUM_OF_BULLETS_THIRD_MENU = 3;
    Array.from(menus).forEach(menu => {
        bindEvents(menu, hiddenMenus[hiddenMenuIndex], arrows[hiddenMenuIndex]);
        hiddenMenuIndex++;
    });

    // reset index
    hiddenMenuIndex = 0;
    Array.from(hiddenMenus).forEach(hiddenMenu => {
        bindEvents(hiddenMenu, null, arrows[hiddenMenuIndex]);
        hiddenMenuIndex++;
    });

    hiddenMenuIndex = 0;
    Array.from(liHiddens).forEach(liHidden => {
        // Determine which menu the li is in to determine the menu to keep open
        if (hiddenMenuIndex < NUM_OF_BULLETS_FIRST_MENU) {
            bindEvents(liHidden, hiddenMenus[0], arrows[0]);
        } else if (hiddenMenuIndex < NUM_OF_BULLETS_FIRST_MENU + NUM_OF_BULLETS_SECOND_MENU) {
            bindEvents(liHidden, hiddenMenus[1], arrows[1]);
        } else if (hiddenMenuIndex < NUM_OF_BULLETS_THIRD_MENU + NUM_OF_BULLETS_FIRST_MENU + NUM_OF_BULLETS_SECOND_MENU) {
            bindEvents(liHidden, hiddenMenus[2], arrows[2]);
        }
        hiddenMenuIndex++;
    });

})();

function bindEvents(element, hiddenMenu = null, arrow) {
    // For keyboard users we only want them to tab through the menu without closing the menu everytime they focus off (except for the last element)
    if (screen.availWidth >= 725) {

        if (element.getAttribute("class") === "li--hidden") {
            element.addEventListener("mouseenter", openMenu.bind(this, element, hiddenMenu, arrow, false));
            if (element.hasAttribute("id", "last--li--hidden")) {
                element.addEventListener("focusout", closeMenu.bind(this, element, hiddenMenu, arrow, false));
            }
            return;
        }

        element.addEventListener("focus", openMenu.bind(this, element, hiddenMenu, arrow, false));
        element.addEventListener("mouseenter", openMenu.bind(this, element, hiddenMenu, arrow, false));
        element.addEventListener("mouseleave", closeMenu.bind(this, element, hiddenMenu, arrow, false));

    } else {

        // click events for mobile devices
        if (element.className === "a a--ul--leftNav") {

            element.addEventListener("click", toggleMenu.bind(this, element, hiddenMenu, arrow, true));
        }

    }
}
function openMenu(menu, hiddenMenu = null, arrow, clickedEvent) {
    if (menu.hasAttribute("aria-expanded")) {
        menu.setAttribute("aria-expanded", "true");
    }
    arrow.style.rotate = "180deg";
    // Here we have to account for the fact that the first parameter can possibly be a hidden menu
    if (!hiddenMenu) {
        // Menus overlap we need to account for this
        menu.style.zIndex = "1";
        menu.style.clipPath = "circle(100%)";
    }
    if (hiddenMenu) {
        // Menus overlap we need to account for this
        if (clickedEvent) {
            hiddenMenu.closest(".li--hidden--main").style.height = "auto";
            hiddenMenu.closest(".li--hidden--main").style.opacity = "1";
        }
        hiddenMenu.style.zIndex = "1";
        hiddenMenu.style.clipPath = "circle(100%)";
    }
}
function closeMenu(menu, hiddenMenu = null, arrow, clickedEvent) {
    if (menu.hasAttribute("aria-expanded")) {
        menu.setAttribute("aria-expanded", "false");
    }
    arrow.style.rotate = "0deg";
    // Here we have to account for the fact that the first parameter can possibly be a hidden menu
    if (!hiddenMenu) {
        // Undo the z-index so other menus are not be affected
        menu.style.zIndex = "0";
        menu.style.clipPath = "circle(0% at 5% 5%)";
    }
    if (hiddenMenu) {
        // Undo the z-index so other menus are not be affected
        if (clickedEvent) {
            hiddenMenu.closest(".li--hidden--main").style.height = "0";
            hiddenMenu.closest(".li--hidden--main").style.opacity = "0";
        }
        hiddenMenu.style.zIndex = "0";
        hiddenMenu.style.clipPath = "circle(0% at 5% 5%)";
    }
}

function toggleMenu(menu, hiddenMenu = null, arrow, clickedEvent) {
    if (menu.getAttribute("aria-expanded") === "true") {
        closeMenu(menu, hiddenMenu, arrow, clickedEvent);
    } else {
        openMenu(menu, hiddenMenu, arrow, clickedEvent);
    }
}