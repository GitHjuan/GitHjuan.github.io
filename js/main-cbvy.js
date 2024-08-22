document.querySelector('.burger').addEventListener('click', () => {
    document.querySelector('.navbar').classList.toggle('nav-active');
});

// Cambiar el texto del logo según el tamaño de la pantalla
function updateLogoText() {
    const logo = document.querySelector('.logo');
    if (window.innerWidth <= 768) {
        logo.textContent = "CBVY"; // Texto más corto para pantallas pequeñas
    } else {
        logo.textContent = "CUERPO DE BOMBEROS VOLUNTARIOS DE YPANÉ"; // Texto completo para pantallas grandes
    }
}

// Llamar a la función al cargar la página y al redimensionar la ventana
window.onload = updateLogoText;
window.onresize = updateLogoText;

// Mostrar la barra de búsqueda al hacer clic en el icono de búsqueda en pantallas pequeñas
document.querySelector('.search-btn').addEventListener('click', () => {
    document.querySelector('.navbar').classList.toggle('show-search');
});