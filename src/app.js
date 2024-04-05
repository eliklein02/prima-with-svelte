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