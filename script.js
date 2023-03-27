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



function generatePDF() {
    var doc = new jsPDF();
    var source = window.document.getElementsByTagName("body")[0];
    doc.fromHTML(
        source,
        15,
        15,
        {
            'width': 180
        });

    doc.save('archivo.pdf');
}

function downloadPrograma() {
  var link = document.createElement("a");
  link.download = "archivo.pdf";
  link.href = "/archivo.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

var checkbox = document.getElementsByName('item')[indice];
if (checkbox.checked) {
    // código a ejecutar si el checkbox está seleccionado
} else {
    // código a ejecutar si el checkbox no está seleccionado
}

