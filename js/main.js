alert("Hola bienvenidos a mi pagina destilados de vinos :D ");

function cambiarcolor() {
  var simbolos, color;
  simbolos = "0123456789ABCDEF";
  color = "#";

  for (var i = 0; i < 6; i++) {
    color = color + simbolos[Math.floor(Math.random() * 16)];
  }

  document.body.style.background = color;

}

