export class UserService {
  constructor() {}

  updateUser(user) {}

  getUserByEmail(email) {
    const dadosAntigos = JSON.parse(localStorage.getItem(email));
    return dadosAntigos;
  }

  salvarAlteracoes(novoUsuario) {

    localStorage.setItem(novoUsuario.email, JSON.stringify(novoUsuario));
  }

  atualizarNomeUsuario(nome) {
  localStorage.setItem("nomeUsuario", nome);
}
}
