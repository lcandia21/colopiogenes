document.addEventListener("DOMContentLoaded", () => {
  const albums = document.querySelectorAll(".album-link");

  albums.forEach(album => {
    album.addEventListener("click", () => {
      let clicks = localStorage.getItem("albumClicks");
      clicks = clicks ? parseInt(clicks) + 1 : 1;
      localStorage.setItem("albumClicks", clicks);
      console.log("Clicks totales:", clicks);
    });
  });

  console.log("JS cargado. Álbumes detectados:", albums.length);
});
