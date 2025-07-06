// stock.service.js
export class StockService {
  constructor() {
    this.apiUrl = 'https://openlibrary.org/search.json';
    this.coverUrl = 'https://covers.openlibrary.org/b/id/';
    // Usando o placeholder anterior ou o URL da imagem genérica que você escolheu
    this.defaultCoverUrl = 'https://via.placeholder.com/150/CCCCCC/808080?text=Capa+Indispon%C3%ADvel'; 
  }

  async getLivros(query = 'books') {
    const url = `${this.apiUrl}?q=${encodeURIComponent(query)}&limit=20`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      const docs = data?.docs || [];

      return docs.map((doc) => ({
        product_title: doc.title,
        product_byline: doc.author_name?.join(", ") || "Autor desconhecido", // Se quiser exibir a editora, a Open Library não fornece diretamente "editora" de forma consistente no 'search.json' como um campo fácil. 'product_byline' é o autor.
        product_photo: doc.cover_i
          ? `${this.coverUrl}${doc.cover_i}-L.jpg`
          : this.defaultCoverUrl,
        // --- AQUI É ONDE VOCÊ VAI MUDAR ---
        product_price: `R$ ${Math.floor(Math.random() * 100) + 20},90`, // <--- Opção 1: Preço Fictício Fixo
        // OU
        // product_price: "Preço indisponível", // <--- Opção 2: Mensagem de indisponibilidade
        // OU
        // product_price: `R$ ${Math.floor(Math.random() * 100) + 20},90`, // <--- Opção 3: Preço Aleatório (apenas para simulação visual)
        // --- FIM DA MUDANÇA ---
        product_url: `https://openlibrary.org${doc.key}`,
      }));
    } catch (error) {
      console.error('Erro ao buscar livros:', error);
      return [];
    }
  }
}