document.addEventListener("DOMContentLoaded", () => {

  const canciones = [
    { nombre: "Cosas", archivo: "Cosas.mp3" },
    { nombre: "Ladrón de la alegría", archivo: "Ladrón de la alegría.mp3" },
    { nombre: "La nave flamenca", archivo: "La nave flamenca.mp3" },
    { nombre: "Dr. Ley", archivo: "Dr. Ley.mp3" },
    { nombre: "Hippie al horno", archivo: "Hippie al horno.mp3" },
    { nombre: "Cuando no estás", archivo: "Cuando no estás.mp3" },
    { nombre: "Inconsistencia", archivo: "Inconsistencia.mp3" },
    { nombre: "La luz de la vida", archivo: "La luz de la vida en G con IA.mp3" },
    { nombre: "Desprenderse", archivo: "Desprenderse en A con IA.mp3" }
  ];

  const lista = document.getElementById("lista");
  const player = document.getElementById("player");
  const actual = document.getElementById("actual");

  let indexActual = 0;

  canciones.forEach((cancion, index) => {
    const li = document.createElement("li");
    li.textContent = cancion.nombre;

    li.addEventListener("click", () => {
      reproducir(index);
    });

    lista.appendChild(li);
  });

  function reproducir(index) {
    indexActual = index;

    player.src = canciones[index].archivo;
    player.load();
    player.play();

    actual.textContent = "Reproduciendo: " + canciones[index].nombre;

    document.querySelectorAll("li").forEach(item => {
      item.classList.remove("active");
    });

    lista.children[index].classList.add("active");
  }

  document.getElementById("next").addEventListener("click", () => {
    let next = (indexActual + 1) % canciones.length;
    reproducir(next);
  });

  document.getElementById("prev").addEventListener("click", () => {
    let prev = (indexActual - 1 + canciones.length) % canciones.length;
    reproducir(prev);
  });

  player.addEventListener("ended", () => {
    let next = (indexActual + 1) % canciones.length;
    reproducir(next);
  });

});
