let raiz = document.documentElement;
let btnCambioModo = document.getElementById('switch-label');
let icono = document.getElementById("iconoTema");


btnCambioModo.addEventListener('change', (event) => {
    if (raiz.getAttribute("data-bs-theme") === "dark") {
        raiz.setAttribute("data-bs-theme", "light");
    }
    else {
        raiz.setAttribute("data-bs-theme", "dark");
    }

    if (event.target.checked) {
        raiz.style.setProperty('--color-blanco', '#121212');
        raiz.style.setProperty('--color-button', '#121212');
        raiz.style.setProperty('--color-negro', '#e9e9e6');
        raiz.style.setProperty('--color-black', '#e9e9e6');
        raiz.style.setProperty('--card-body-b: #444;');
        raiz.style.setProperty('--card-body-c: #eee;');

    }
    else {
        raiz.style.setProperty('--card-body-b: #eee;');
        raiz.style.setProperty('--card-body-c: #fff;');
        raiz.style.setProperty('--color-blanco', '#e9e9e6');
        raiz.style.setProperty('--color-negro', '#000');
        raiz.style.setProperty('--color-black', '#303030');
        raiz.style.setProperty('--color-button', '#fdffff');
    }
});


