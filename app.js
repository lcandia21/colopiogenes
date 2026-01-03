console.log("app.js cargado");

// obtener registros previos o iniciar vacío
let clicks = JSON.parse(localStorage.getItem("albumClicks")) || {};

// seleccionar todos los links de álbumes
const albumLinks = document.querySelectorAll(".album a");

albumLinks.forEach(link => {
  link.addEventListener("mousedown", () => {
    const albumName = link.querySelector("img").alt;

    clicks[albumName] = (clicks[albumName] || 0) + 1;

    localStorage.setItem("albumClicks", JSON.stringify(clicks));

    console.log("Registro de clicks:", clicks);
  });
});
