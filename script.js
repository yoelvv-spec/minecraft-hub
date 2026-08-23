function buscar() {

const texto =
document.getElementById(
"searchInput"
).value
.trim()
.toLowerCase();


if (!texto) {

return;

}


if (
texto.includes("skin") ||
texto.includes("skins")
) {

window.location.href =
"skins.html?q=" +
encodeURIComponent(texto);

return;

}


if (
texto.includes("server") ||
texto.includes("servidor")
) {

window.location.href =
"servidores.html?q=" +
encodeURIComponent(texto);

return;

}


if (
texto.includes("seed") ||
texto.includes("mundo")
) {

window.location.href =
"seeds.html?q=" +
encodeURIComponent(texto);

return;

}


window.location.href =
"recetas.html?q=" +
encodeURIComponent(texto);

}
