// Funcionalidad de hora para el mensaje
let dialog_titulo = document.getElementById("titular");

// Usamos getHours() que siempre devuelve un número entero de 0 a 23
const horas = new Date().getHours();

// Evaluamos de mayor a menor para que las condiciones funcionen correctamente
if (horas >= 19) {
    dialog_titulo.innerText = "Buenas noches";
} else if (horas >= 12) {
    dialog_titulo.innerText = "Buenas tardes";
} else {
    dialog_titulo.innerText = "Buenos días";
}

// Body overflow hidden
let body = document.getElementsByTagName("body")[0]; // Accedemos directamente al primer elemento [0]
let dialog = document.getElementsByClassName("myDialogDiv")[0];
let btn12 = document.getElementById("botonChipi");

// Bloquear el scroll al cargar
body.style.overflow = "hidden";

// Descomentado y corregido el evento del botón
btn12.addEventListener("click", () => {
    // "scroll-y" no existe en CSS, lo correcto para rehabilitar el scroll es "auto" o "visible"
    body.style.overflow = "auto";

    // Ocultar el diálogo (asegúrate de tener la clase "none" en tu CSS con display: none)
    dialog.classList.replace('myDialogDiv', 'none');

});


// --- SISTEMA DE LIKES (Botón y Dialog) ---
const botonLike = document.querySelector('.btn-like');
const elContadorDialog = document.getElementById("contador_dialog_like");

const yaDioLike = localStorage.getItem('usuario_dio_like') === 'true';

if (yaDioLike) {
    botonLike.classList.add('liked');
}

fetch("http://127.0.0.1:8000/likes")
    .then(res => res.json())
    .then(data => {
        if (elContadorDialog) {
            elContadorDialog.innerText = data.contador;
        }
    })
    .catch(err => console.error("Error:", err));

botonLike.addEventListener('click', () => {
    const esLiked = botonLike.classList.toggle('liked');
    localStorage.setItem('usuario_dio_like', esLiked);

    let valorActual = parseInt(elContadorDialog.innerText) || 0;
    let nuevoValor = esLiked ? valorActual + 1 : valorActual - 1;

    if (nuevoValor < 0) nuevoValor = 0;

    fetch(`http://127.0.0.1:8000/likes/${nuevoValor}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => {
        if (elContadorDialog) {
            elContadorDialog.innerText = data.contador;
        }
    })
    .catch(err => console.error("Error:", err));
});