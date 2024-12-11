//ELEMENTS
const header = document.getElementById("header")

let lastScrollY = 0;

window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    // Si se desplaza más de 70px hacia abajo
    if (currentScrollY > 100) {
        header.classList.add("fixed");
        header.classList.add("opacity-0");
    }

    // Si el usuario hace scroll hacia arriba
    if (currentScrollY < lastScrollY) {
        header.classList.add("opacity-1");
        header.classList.remove("opacity-0");
    }
    // Si el usuario hace scroll hacia abajo
    else if (currentScrollY > lastScrollY) {
        header.classList.add("opacity-0");
        header.classList.remove("opacity-1");
    }

    lastScrollY = currentScrollY; // Actualizamos la posición previa del scroll
});
