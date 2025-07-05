export class AddressService {
    constructor() {}

async buscarEnderecoPorCEP(cep) {
    const cepLimpo = cep.replace(/\D/g, "");
    if (cepLimpo.length !== 8) {
      throw new Error("CEP inválido");
    }

    try {
      const response = await $.get(`https://viacep.com.br/ws/${cepLimpo}/json/`);
      if ("erro" in response) {
        throw new Error("CEP não encontrado");
      }
      return {
        logradouro: response.logradouro,
        bairro: response.bairro,
        cidade: response.localidade,
        estado: response.uf,
      };
    } catch (error) {
      throw new Error("Erro ao buscar o CEP");
    }
  }
}