export class StockService {
  constructor() {
    this.apiUrl = 'https://real-time-amazon-data.p.rapidapi.com/search';
    this.apiKey = 'cdf6d1ee7dmsh568db3689299c59p1f7cecjsnef44a5f3b863';
    this.host = 'real-time-amazon-data.p.rapidapi.com';
  }

  async getLivros(query = 'books') {
    const url = `${this.apiUrl}?query=${query}&page=1&country=US&category_id=stripbooks`;

    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': this.apiKey,
        'x-rapidapi-host': this.host,
      },
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      return data?.data?.products || [];
    } catch (error) {
      console.error('Erro ao buscar livros:', error);
      return [];
    }
  }
}
