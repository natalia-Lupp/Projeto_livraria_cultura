document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("rodape-container");
  if (!container) return;

  fetch("../rodape.html") // caminho relativo a partir de tela-inicial.html
    .then((response) => response.text())
    .then((data) => {
      container.innerHTML = data;
    })
    .catch((error) => console.error("Erro ao carregar rodape:", error));
});
