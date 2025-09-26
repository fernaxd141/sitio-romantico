document.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("bg-music");
  const btn = document.getElementById("music-btn");

  btn.addEventListener("click", async () => {
    try {
      if (music.muted) {
        music.muted = false; // activamos sonido
        btn.textContent = "⏸️ Pausar Música";
      } else if (music.paused) {
        await music.play();
        btn.textContent = "⏸️ Pausar Música";
      } else {
        music.pause();
        btn.textContent = "🎵 Activar Música";
      }
    } catch (err) {
      console.error("Error al reproducir el audio:", err);
    }
  });
});
