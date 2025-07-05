import { UserService } from "../../service/user.service.js";

$(document).ready(function () {
  // Proteção: só entra se estiver logado e com email salvo
  const email = localStorage.getItem("emailUsuario");
  const dados = localStorage.getItem(email);

  if (!email || !dados || !localStorage.getItem("isLoggedIn")) {
    window.location.href = "../login/login.html";
    return;
  }

  const user = JSON.parse(dados);

  // Máscaras de entrada
  $("#input-telefone").mask("(00) 00000-0000");
  $("#input-nascimento").mask("00/00/0000");
  $("#input-cep").mask("00000-000");

  // Sair do menu lateral
  $("#btn-sair").on("click", function () {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("nomeUsuario");
    localStorage.removeItem("emailUsuario");
    window.location.href = "../tela-inicial/tela-inicial.html";
  });

  // Exibe dados
  $("#exibir-email").text(user.email || "-");
  $("#exibir-senha").text(user.senha || "-");
  $("#saudacao-nome").text(user.nome || "usuario");
  localStorage.setItem("nomeUsuario", user.nome || "usuário");

  if (user.genero === "Masculino") {
    $("#foto-perfil").attr("src", "https://randomuser.me/api/portraits/men/1.jpg");
  } else if (user.genero === "Feminino") {
    $("#foto-perfil").attr("src", "https://randomuser.me/api/portraits/women/44.jpg");
  } else {
    $("#foto-perfil").attr("src", "https://via.placeholder.com/64?text=👤");
  }

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

    if (campo === "genero") {
      if (user.genero === "Masculino") {
        $("#genero-m").prop("checked", true);
      } else if (user.genero === "Feminino") {
        $("#genero-f").prop("checked", true);
      }
    } else {
      $(`#input-${campo}`).val(user[campo] || "");
    }
  });

  $("#btn-editar").on("click", () => alternarModoEdicao(true));

  function alternarModoEdicao(ativar) {
    campos.forEach((campo) => {
      const $p = $(`#exibir-${campo}`);
      const $input = $(`#input-${campo}`);

      if (ativar) {
        $input.removeClass("d-none");
        $p.addClass("d-none");
      } else {
        if (campo === "genero") {
          const generoSelecionado = $('input[name="genero"]:checked').val() || "-";
          $p.text(generoSelecionado);
        } else {
          $p.text($input.val());
        }
        $input.addClass("d-none");
        $p.removeClass("d-none");
      }
    });

    const $botoes = $("#botoes-edicao");
    if (ativar) {
      $botoes.html(`
        <a href="#" id="btn-voltar" class="me-3 text-decoration-underline text-secondary small fw-bold">Voltar</a>
        <a href="#" id="btn-salvar" class="text-decoration-underline text-info small fw-bold">Salvar</a>
      `);
      $("#btn-voltar").on("click", () => alternarModoEdicao(false));
      $("#btn-salvar").on("click", salvarAlteracoes);
    } else {
      $botoes.html(`
        <a href="#" id="btn-editar" class="text-decoration-underline text-info small fw-bold">Editar</a>
      `);
      $("#btn-editar").on("click", () => alternarModoEdicao(true));
    }
  }

  function mostrarErro(id, mensagem) {
    const $input = $(`#input-${id}`);
    if ($input.next(".mensagem-erro").length === 0) {
      $input.after(`<small class="mensagem-erro text-danger">${mensagem}</small>`);
    }
  }

  function limparErros() {
    $(".mensagem-erro").remove();
  }

  function salvarAlteracoes() {
    limparErros();

    const camposValidados = {
      nome: {
        valor: $("#input-nome").val().trim(),
        regex: /^[A-ZÁÉÍÓÚÂÊÔÃÕÇ][a-záéíóúâêôãõç]+(?: [A-ZÁÉÍÓÚÂÊÔÃÕÇ][a-záéíóúâêôãõç]+)*$/,
        mensagem: "O nome deve começar com letra maiúscula e não conter números.",
      },
      sobrenome: {
        valor: $("#input-sobrenome").val().trim(),
        regex: /^[A-ZÁÉÍÓÚÂÊÔÃÕÇ][a-záéíóúâêôãõç]+(?: [A-ZÁÉÍÓÚÂÊÔÃÕÇ][a-záéíóúâêôãõç]+)*$/,
        mensagem: "O sobrenome deve começar com letra maiúscula e não conter números.",
      },
      nascimento: {
        valor: $("#input-nascimento").val().trim(),
        regex: /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/,
        mensagem: "Formato esperado: dd/mm/aaaa",
      },
      telefone: {
        valor: $("#input-telefone").val().trim(),
        regex: /^\(\d{2}\) 9\d{4}-\d{4}$/,
        mensagem: "Formato esperado: (11) 91234-5678",
      },
      cep: {
        valor: $("#input-cep").val().trim(),
        regex: /^\d{5}-\d{3}$/,
        mensagem: "Formato esperado: 12345-678",
      },
      endereco: {
        valor: $("#input-endereco").val().trim(),
        regex: /^[A-Za-zÀ-ÿ\s]+\s\d+,\s.+$/,
        mensagem: "Formato esperado: Nome da rua 123, Bairro",
      },
    };

    let valido = true;
    for (const campo in camposValidados) {
      const { valor, regex, mensagem } = camposValidados[campo];
      if (!regex.test(valor)) {
        mostrarErro(campo, mensagem);
        valido = false;
      }
    }

    if (!valido) return;

    const userService = new UserService();
    const dadosAntigos = userService.getUserByEmail(email);

    const novoUsuario = {
      ...dadosAntigos,
      nome: camposValidados.nome.valor,
      sobrenome: camposValidados.sobrenome.valor,
      nascimento: camposValidados.nascimento.valor,
      genero: $('input[name="genero"]:checked').val() || "",
      telefone: camposValidados.telefone.valor,
      cep: camposValidados.cep.valor,
      cidade: $("#input-cidade").val(),
      estado: $("#input-estado").val(),
      endereco: camposValidados.endereco.valor,
    };

    userService.salvarAlteracoes(novoUsuario);
    localStorage.setItem("nomeUsuario", novoUsuario.nome);
    $("#saudacao-nome").text(novoUsuario.nome);
    alternarModoEdicao(false);
  }
});
