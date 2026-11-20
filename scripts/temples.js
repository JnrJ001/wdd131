const menuButton = document.querySelector("#menu");
const navigation = document.querySelector("#navmenu");

document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;

function setMenuOpen(isOpen) {
    navigation.classList.toggle("open", isOpen);
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
    menuButton.textContent = isOpen ? "✕" : "☰";
}

menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    setMenuOpen(!isOpen);
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
        setMenuOpen(false);
        menuButton.focus();
    }
});

window.matchMedia("(min-width: 700px)").addEventListener("change", (event) => {
    if (event.matches) setMenuOpen(false);
});

setMenuOpen(false);