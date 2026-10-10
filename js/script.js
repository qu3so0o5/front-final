
let raiz = document.documentElement;
let btnCambioModo = document.getElementById('switch-label');
let icono = document.getElementById('iconoTema');

btnCambioModo.addEventListener('change', (event) => {

    if (event.target.checked) {

        // Modo oscuro
        raiz.setAttribute('data-bs-theme', 'dark');

        raiz.style.setProperty('--color-blanco', '#121212');
        raiz.style.setProperty('--color-button', '#121212');
        raiz.style.setProperty('--color-negro', '#e9e9e6');
        raiz.style.setProperty('--color-black', '#e9e9e6');
        raiz.style.setProperty('--card-body-b', '#444');
        raiz.style.setProperty('--card-body-c', '#eee');

        document.querySelectorAll('.card-body').forEach(card => {
            card.style.setProperty('background-color', '#444');
            card.style.setProperty('color', '#eee');
        });

        if (icono) {
            icono.className = 'bi bi-moon-stars-fill';
        }

    } else {

        // Modo claro
        raiz.setAttribute('data-bs-theme', 'light');

        raiz.style.setProperty('--color-blanco', '#e9e9e6');
        raiz.style.setProperty('--color-button', '#fdffff');
        raiz.style.setProperty('--color-negro', '#000');
        raiz.style.setProperty('--color-black', '#303030');
        raiz.style.setProperty('--card-body-b', '#eee');
        raiz.style.setProperty('--card-body-c', '#000');

        document.querySelectorAll('.card-body').forEach(card => {
            card.style.setProperty('background-color', '#eee');
            card.style.setProperty('color', '#000');
        });

        if (icono) {
            icono.className = 'bi bi-sun-fill';
        }
    }

});
