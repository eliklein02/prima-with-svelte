const openMobileMenu = () => {
    const buttonOpen = document.getElementById("menu-open-div");
    const menu = document.getElementById("mobile-menu");
    menu.style.display = "flex";
    buttonOpen.style.display = "none";
};

const closeMenu = () => {
    const buttonOpen = document.getElementById("menu-open-div");
    const menu = document.getElementById("mobile-menu");
    buttonOpen.style.display = "block";
    menu.style.display = "none";
};

// const navbarHeight = document.querySelector("body > div > main > div > div.navbar-all")
// const bodyHeight = document.documentElement.scrollHeight
// document.querySelector("contact-page-container").style.height = bodyHeight - (navbarHeight * 2) + "px"