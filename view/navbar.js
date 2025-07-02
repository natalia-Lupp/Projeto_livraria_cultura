document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("navbar-container");
  if (!container) return;

  fetch("../navbar.html")
    .then((response) => response.text())
    .then((data) => {
      container.innerHTML = data;

      //altera pra bem vindo
      const nameSpan = document.getElementById("name-user-span");

      if (!localStorage.getItem("isLoggedIn")) {
        if (nameSpan) {
          nameSpan.textContent = "bem-vindo";
        }
      } else {
        // Se quiser colocar o nome do usuário, pode pegar de localStorage e mostrar aqui
        // Exemplo:
        const nomeUsuario = localStorage.getItem("nomeUsuario") || "usuário";
        if (nameSpan) {
          nameSpan.textContent = nomeUsuario;
        }
      }

      // Adicionar listener para o seletor de conta (dropdown)

      const sairBtn = document.getElementById("sairConta");
      if (sairBtn) {
        sairBtn.addEventListener("click", (e) => {
          e.preventDefault(); // para não navegar antes do script
          localStorage.removeItem("isLoggedIn");
          localStorage.removeItem("nomeUsuario");
          window.location.href = "../tela-inicial/tela-inicial.html";
        });
      }

      /*  const menuConta = document.getElementById("menuConta");
      if (menuConta) {
        menuConta.addEventListener("change", (e) => {
          if (e.target.value === "sair") {
            localStorage.removeItem("isLoggedIn");
            localStorage.removeItem("nomeUsuario"); // se tiver salvo nome, remove tb
            window.location.href = "../tela-inicial/tela-inicial.html";
          }
        });
      }*/

      // Manter seu código que já estava no fetch, ex. categoriasBar scroll
      const checkCategoriasBar = () => {
        const $categoriasBar = $("#categoriasBar");
        if ($categoriasBar.length === 0) {
          return setTimeout(checkCategoriasBar, 100);
        }
        $(window).on("scroll", function () {
          if ($(window).scrollTop() === 0) {
            $categoriasBar.stop(true, true).slideDown(150);
          } else {
            $categoriasBar.stop(true, true).slideUp(150);
          }
        });
      };
      checkCategoriasBar();
    })
    .catch((error) => console.error("Erro ao carregar navbar:", error));
});
