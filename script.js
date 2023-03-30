function toggleLouvor() {
  var louvor = document.getElementById("louvor");
  if (louvor.style.display === "none") {
    louvor.style.display = "block";
  } else {
    louvor.style.display = "none";
  }
}

function toggleLista() {
  var lista = document.getElementById("lista");
  if (lista.style.display === "none") {
    lista.style.display = "block";
  } else {
    lista.style.display = "none";
  }
}


/*

  ____          _____               _ _           _       
 /*

  ____          _____               _ _           _       
 |  _ \        |  __ \             (_) |         | |      
 | |_) |_   _  | |__) |_ _ _ __ _____| |__  _   _| |_ ___ 
 |  _ <| | | | |  ___/ _` | '__|_  / | '_ \| | | | __/ _ \
 | |_) | |_| | | |  | (_| | |   / /| | |_) | |_| | ||  __/
 |____/ \__, | |_|   \__,_|_|  /___|_|_.__/ \__, |\__\___|
         __/ |                               __/ |        
        |___/                               |___/         
    
____________________________________
/ Si necesitas ayuda, contáctame en \
\ https://parzibyte.me               /
 ------------------------------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
Creado por Parzibyte (https://parzibyte.me). Este encabezado debe mantenerse intacto,
excepto si este es un proyecto de un estudiante.
*/
document.addEventListener("DOMContentLoaded", () => {
    // Escuchamos el click del botón
    const $boton = document.querySelector("#btnCrearPdf");
    $boton.addEventListener("click", () => {
        const $elementoParaConvertir = document.body; // <-- Aquí puedes elegir cualquier elemento del DOM
        html2pdf()
            .set({
                margin: 1,
                filename: 'documento.pdf',
                image: {
                    type: 'jpeg',
                    quality: 0.98
                },
                html2canvas: {
                    scale: 3, // A mayor escala, mejores gráficos, pero más peso
                    letterRendering: true,
                },
                jsPDF: {
                    unit: "in",
                    format: "a3",
                    orientation: 'portrait' // landscape o portrait
                }
            })
            .from($elementoParaConvertir)
            .save()
            .catch(err => console.log(err));
    });
});


document.addEventListener("keydown", function(event) {
  if ((event.keyCode === 83 && event.ctrlKey) || (event.keyCode === 77 && event.ctrlKey)) { // La combinación de teclas es "Ctrl+S" o "Ctrl+M"
    document.getElementById("boton-secreto").click(); // Hace clic en el botón secreto
  }
});


<button id="boton-secreto">Botón secreto</button>

<script>
document.addEventListener("touchstart", function(event) {
  if (event.touches.length === 2) { // Comprueba si se han tocado dos puntos de la pantalla
    event.preventDefault(); // Evita que se realice la acción predeterminada del evento touchstart
  }
});

document.addEventListener("touchend", function(event) {
  if (event.changedTouches.length === 2) { // Comprueba si se han dejado de tocar dos puntos de la pantalla
    document.getElementById("boton-secreto").click(); // Hace clic en el botón secreto
  }
});
</script>
