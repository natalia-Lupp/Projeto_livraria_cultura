export class StockService {
  constructor() {
    this.apiUrl = 'https://openlibrary.org/search.json';
    this.coverUrl = 'https://covers.openlibrary.org/b/id/';
  }

  async getLivros(query = 'books') {
    const url = `${this.apiUrl}?q=${encodeURIComponent(query)}&limit=20`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      const docs = data?.docs || [];

      return docs.map((doc) => ({
        product_title: doc.title,
        product_byline: doc.author_name?.join(", ") || "Autor desconhecido",
        product_photo: doc.cover_i
          ? `${this.coverUrl}${doc.cover_i}-L.jpg`
          : 'https://via.placeholder.com/150?text=Sem+Capa',
        product_price: doc.first_publish_year
          ? `Publicado em ${doc.first_publish_year}`
          : "Ano desconhecido",
        product_url: `https://openlibrary.org${doc.key}`,
      }));
    } catch (error) {
      console.error('Erro ao buscar livros:', error);
      return [];
    }
  }
}
