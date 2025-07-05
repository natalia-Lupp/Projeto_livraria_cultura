document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("navbar-container");
  if (!container) return;

  fetch("../navbar.html")
    .then((response) => response.text())
    .then((data) => {
      container.innerHTML = data;

      // Atualiza saudação com nome do usuário ou "bem-vindo"
      const nameSpan = document.getElementById("name-user-span");
      const menuEntrar = document.getElementById("menu-entrar-cadastrar");

      if (!localStorage.getItem("isLoggedIn")) {
        if (nameSpan) {
          nameSpan.textContent = "bem-vindo";
        }

        // Usuário não logado - habilita link Entrar / Cadastrar
        if (menuEntrar) {
          menuEntrar.classList.remove("disabled", "text-muted");
          menuEntrar.setAttribute("href", "/view/login/login.html");
          menuEntrar.style.pointerEvents = "auto";
          menuEntrar.textContent = "Entrar / Cadastrar";
        }
      } else {
        // Usuário logado - mostra nome e desativa link Entrar / Cadastrar
        const nomeUsuario = localStorage.getItem("nomeUsuario") || "usuário";
        if (nameSpan) {
          nameSpan.textContent = nomeUsuario;
        }

        if (menuEntrar) {
          menuEntrar.classList.add("disabled", "text-muted");
          menuEntrar.removeAttribute("href");
          menuEntrar.style.pointerEvents = "none";
          menuEntrar.textContent = "Entrar / Cadastrar";
        }
      }

      // Listener para botão "Sair"
      const sairBtn = document.getElementById("sairConta");
      if (sairBtn) {
        sairBtn.addEventListener("click", (e) => {
          e.preventDefault(); // impede navegação padrão
          localStorage.removeItem("isLoggedIn");
          localStorage.removeItem("nomeUsuario");
          localStorage.removeItem("emailUsuario");
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

     // Função para esconder/mostrar sub-barra categorias conforme scroll
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
