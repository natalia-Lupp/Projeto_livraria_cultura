document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("navbar-container");
    if (!container) return;

    fetch("../navbar.html")
      .then((response) => response.text())
      .then((data) => {
        container.innerHTML = data;

        const nameSpan = document.getElementById("name-user-span");
        const menuEntrar = document.getElementById("menu-entrar-cadastrar");

        if (!localStorage.getItem("isLoggedIn")) {
          if (nameSpan) nameSpan.textContent = "bem-vindo";
          if (menuEntrar) {
            menuEntrar.classList.remove("disabled", "text-muted");
            menuEntrar.setAttribute("href", "/view/login/login.html");
            menuEntrar.style.pointerEvents = "auto";
            menuEntrar.textContent = "Entrar / Cadastrar";
          }
        } else {
          const nomeUsuario = localStorage.getItem("nomeUsuario") || "usuário";
          if (nameSpan) nameSpan.textContent = nomeUsuario;
          if (menuEntrar) {
            menuEntrar.classList.add("disabled", "text-muted");
            menuEntrar.removeAttribute("href");
            menuEntrar.style.pointerEvents = "none";
            menuEntrar.textContent = "Entrar / Cadastrar";
          }
        }

        const sairBtn = document.getElementById("sairConta");
        if (sairBtn) {
          sairBtn.addEventListener("click", (e) => {
            e.preventDefault();
            localStorage.removeItem("isLoggedIn");
            localStorage.removeItem("nomeUsuario");
            localStorage.removeItem("emailUsuario");
            window.location.href = "../tela-inicial/tela-inicial.html";
          });
        }
      })
      .catch((error) => console.error("Erro ao carregar navbar:", error));

    // ✅ NOVO CÓDIGO: Mostrar a barra só quando no topo da página
    const checkCategoriasBar = () => {
      const $categoriasBar = $("#categoriasBar");
      if ($categoriasBar.length === 0) {
        return setTimeout(checkCategoriasBar, 100);
      }

      $(window).on("scroll", function () {
        if ($(this).scrollTop() === 0) {
          $categoriasBar.stop(true, true).slideDown(150);
        } else {
          $categoriasBar.stop(true, true).slideUp(150);
        }
      });
    };
    //console.log("teste");

    // ✅ Inicializa a função de controle da barra de categorias
    checkCategoriasBar();
  });