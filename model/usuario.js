import { Generos } from "./generos";

export class Usuario {
  constructor(
    nome,
    sobrenome,
    nascimento,
    telefone,
    cep,
    cidade,
    estado,
    endereco,
    email,
    senha,
    genero
  ) {
    this._nome = nome;
    this._sobrenome = sobrenome;
    this._nascimento = nascimento;
    this._telefone = telefone;
    this._cep = cep;
    this._cidade = cidade;
    this._estado = estado;
    this._endereco = endereco;
    this._email = email;
    this._senha = senha;
    this._genero = genero;
  }

  // Getters
  get nome() {
    return this._nome;
  }
  get sobrenome() {
    return this._sobrenome;
  }
  get nascimento() {
    return this._nascimento;
  }
  get telefone() {
    return this._telefone;
  }
  get cep() {
    return this._cep;
  }
  get cidade() {
    return this._cidade;
  }
  get estado() {
    return this._estado;
  }
  get endereco() {
    return this._endereco;
  }
  get email() {
    return this._email;
  }
  get senha() {
    return this._senha;
  }
  get genero() {
    return this._genero;
  }

  // Setters
  set nome(valor) {
    this._nome = valor;
  }
  set sobrenome(valor) {
    this._sobrenome = valor;
  }
  set nascimento(valor) {
    this._nascimento = valor;
  }
  set telefone(valor) {
    this._telefone = valor;
  }
  set cep(valor) {
    this._cep = valor;
  }
  set cidade(valor) {
    this._cidade = valor;
  }
  set estado(valor) {
    this._estado = valor;
  }
  set endereco(valor) {
    this._endereco = valor;
  }
  set email(valor) {
    this._email = valor;
  }
  set senha(valor) {
    this._senha = valor;
  }
  set genero(valor) {
    if (valor === Generos.MASCULINO || valor === Generos.FEMININO) {
      this._genero = valor;
    } else {
      throw new Error("Gênero inválido.");
    }
  }
}
