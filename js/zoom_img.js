let main = document.body;

// Obtener las tarjetas
let cards = document.getElementsByClassName("cards_img");

for (let i = 0; i < cards.length; i++) {

    // Obtener la ruta de la imagen
    let ruta = cards[i].children[0].getAttribute("src");

    let new_dialog = document.createElement("div");

    new_dialog.innerHTML = `
        <div class="dialog-overlay">
            <div class="dialog-card">
                <button class="dialog-close">&times;</button>

                <img src="${ruta}" class="dialog-img">

                <h2>Detalles de la imagen</h2>
                <p>Esta es la imagen que seleccionaste.</p>
            </div>
        </div>
    `;

    main.appendChild(new_dialog);

    // Ocultar inicialmente el modal
    new_dialog.style.display = "none";

    // Abrir al pulsar la tarjeta
    cards[i].addEventListener("click", function () {
        new_dialog.style.display = "block";
    });

    // Cerrar con la X
    new_dialog.querySelector(".dialog-close").addEventListener("click", function () {
        new_dialog.style.display = "none";
    });
}