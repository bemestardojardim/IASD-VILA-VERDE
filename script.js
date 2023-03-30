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
                    scale: 1, // Escala menor para generar un PDF más ligero
                    letterRendering: true,
                },
                jsPDF: {
                    unit: "in",
                    format: "a4", // Cambiamos el formato a a4
                    orientation: 'portrait' // Cambiamos la orientación a portrait
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






const $btnAgregar = document.getElementById("btnAgregar");
const $lista = document.getElementById("lista");

$btnAgregar.addEventListener("click", () => {
  $lista.style.display = "block";
  const $input = document.createElement("input");
  $input.type = "text";
  $input.placeholder = "Escribe un elemento de la lista";
  const $btnEliminar = document.createElement("button");
  $btnEliminar.innerText = "Eliminar";
  $btnEliminar.classList.add("btnEliminar");
  $btnEliminar.addEventListener("click", () => {
    $input.remove();
    $btnEliminar.remove();
  });
  $lista.appendChild($input);
  $lista.appendChild($btnEliminar);
});

