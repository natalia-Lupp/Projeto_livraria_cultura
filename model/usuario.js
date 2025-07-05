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
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nascimento = nascimento;
    this.telefone = telefone;
    this.cep = cep;
    this.idade = idade;
    this.estado = estado;
    this.endereco = endereco;
    this.email = email;
    this.senha = senha;
    this.genero = genero;
  }

  
}
