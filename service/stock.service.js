// stock.service.js
export class StockService {
  constructor() {
    this.apiUrl = 'https://openlibrary.org/search.json';
    this.coverUrl = 'https://covers.openlibrary.org/b/id/';
    this.defaultCoverUrl = 'https://via.placeholder.com/150/CCCCCC/808080?text=Capa+Indispon%C3%ADvel';
  }

  async getLivros(query = 'books') {
    // Aumentei o limite para ter mais dados para testes
    const url = `${this.apiUrl}?q=${encodeURIComponent(query)}&limit=50`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      const docs = data?.docs || [];

      return docs.map((doc) => ({
        product_title: doc.title,
        product_byline: doc.author_name?.join(", ") || "Autor desconhecido",
        product_photo: doc.cover_i
          ? `${this.coverUrl}${doc.cover_i}-L.jpg`
          : this.defaultCoverUrl,
        product_price: `R$ ${Math.floor(Math.random() * 100) + 20},90`,
        product_url: `https://openlibrary.org${doc.key}`,
        // Campos adicionais que podem vir da API de busca (nem todos os livros terão todos eles)
        first_publish_year: doc.first_publish_year,
        isbn: doc.isbn || [], // Pode ser um array de ISBNs
        language: doc.language || [], // Pode ser um array de códigos de idioma
        number_of_pages_median: doc.number_of_pages_median, // Número médio de páginas
        // Outros campos da API que você pode considerar:
        // doc.subject (assuntos/categorias)
        // doc.publisher (publicadores - pode ser útil para "Editora")
        // doc.first_sentence (primeira frase - pode ser uma sinopse curta)
        // doc.key (chave da obra, para buscar detalhes mais tarde)
      }));
    } catch (error) {
      console.error('Erro ao buscar livros:', error);
      return [];
    }
  }
}