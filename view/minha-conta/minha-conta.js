import { UserService } from "../../service/user.service.js";

$(document).ready(function () {
  // Sair do menu lateral
  $("#btn-sair").on("click", function () {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("nomeUsuario");
    window.location.href = "../tela-inicial/tela-inicial.html";
  });

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const email = urlParams.get("email");
  const dados = localStorage.getItem(email);

  if (dados) {
    const user = JSON.parse(dados);
    $("#exibir-email").text(user.email || "-");
    $("#exibir-senha").text(user.senha || "-");

    const campos = [
      "nome",
      "sobrenome",
      "nascimento",
      "genero",
      "telefone",
      "cep",
      "cidade",
      "estado",
      "endereco",
    ];

    campos.forEach((campo) => {
      $(`#exibir-${campo}`).text(user[campo] || "-");
      $(`#input-${campo}`).val(user[campo] || "");
    });

    $("#btn-editar").on("click", () => alternarModoEdicao(true));
  }

  function alternarModoEdicao(ativar) {
    const campos = [
      "nome",
      "sobrenome",
      "nascimento",
      "genero",
      "telefone",
      "cep",
      "cidade",
      "estado",
      "endereco",
    ];

    campos.forEach((campo) => {
      const $p = $(`#exibir-${campo}`);
      const $input = $(`#input-${campo}`);
      if (ativar) {
        $input.removeClass("d-none");
        $p.addClass("d-none");
      } else {
        $p.text($input.val());
        $input.addClass("d-none");
        $p.removeClass("d-none");
      }
    });

    const $botoes = $("#botoes-edicao");
    if (ativar) {
      $botoes.html(`
          <button id="btn-voltar" class="btn btn-outline-secondary btn-sm me-2">Voltar</button>
          <button id="btn-salvar" class="btn btn-info btn-sm text-white">Salvar</button>
        `);
      $("#btn-voltar").on("click", () => alternarModoEdicao(false));
      $("#btn-salvar").on("click", salvarAlteracoes);
    } else {
      $botoes.html(`
          <button id="btn-editar" class="btn btn-outline-info btn-sm">EDITAR</button>
        `);
      $("#btn-editar").on("click", () => alternarModoEdicao(true));
    }
  }

  function salvarAlteracoes() {
    const email = $("#exibir-email").text();
    let userService = new UserService();
    let dadosAntigos = userService.getUserByEmail(email);

    const novoUsuario = {
      ...dadosAntigos,
      nome: $("#input-nome").val(),
      sobrenome: $("#input-sobrenome").val(),
      nascimento: $("#input-nascimento").val(),
      genero: $("#input-genero").val(),
      telefone: $("#input-telefone").val(),
      cep: $("#input-cep").val(),
      cidade: $("#input-cidade").val(),
      estado: $("#input-estado").val(),
      endereco: $("#input-endereco").val(),
    };
    
    userService.salvarAlteracoes(novoUsuario);
    alternarModoEdicao(false);
  }
});
