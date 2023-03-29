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







function extraerTexto() {
  fetch('https://www.ejemplo.com') // Reemplaza con la URL de la página que quieres extraer el texto
    .then(response => response.text())
    .then(data => {
      const contenido = document.getElementById('contenido');
      contenido.innerHTML = data;
    });
}
