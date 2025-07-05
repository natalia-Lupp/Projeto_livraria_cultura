import { StockService } from "../../service/stock.service.js";

const stockService = new StockService();

// Função genérica para renderizar cards em um container específico
// Adicionamos um novo parâmetro 'isCarousel'
async function renderizarCards(containerId, queryTerm, limit = 20, isCarousel = false) {
  const container = document.getElementById(containerId);

  if (!container) {
    console.error(`Container com ID "${containerId}" não encontrado.`);
    return;
  }

  container.innerHTML = ''; // Limpa o conteúdo atual

  try {
    const livros = await stockService.getLivros(queryTerm);
    const livrosParaRenderizar = limit ? livros.slice(0, limit) : livros;

    if (livrosParaRenderizar.length === 0) {
      container.innerHTML = `<div class="col-12"><p class="text-center text-muted">Nenhum livro encontrado para esta seção.</p></div>`;
      return;
    }

    livrosParaRenderizar.forEach((livro) => {
      const col = document.createElement("div");
      // Se for um carrossel, cada item precisa da classe 'item' do Owl Carousel
      // Caso contrário, usa as classes de coluna do Bootstrap
      col.className = isCarousel ? "item" : "col";

      col.innerHTML = `
        <div class="card card-uniform-height text-center">
          <img
            src="${livro.product_photo}"
            class="card-img-top"
            alt="${livro.product_title}"
            onerror="this.onerror=null;this.src='https://via.placeholder.com/150?text=Capa+Indisponível';"
          />
          <div class="card-body">
            <small class="text-muted">${livro.product_byline || "Editora Desconhecida"}</small>
            <h6 class="card-title">${livro.product_title}</h6>
            <p class="text-primary">${livro.product_price || "Preço indisponível"}</p>
            <a href="${livro.product_url}" target="_blank" class="btn btn-outline-primary btn-sm">Comprar</a>
          </div>
        </div>
      `;
      container.appendChild(col);
    });

    // Se for um carrossel, inicializa o Owl Carousel APÓS os itens serem adicionados
    if (isCarousel) {
      // Usamos $(container).owlCarousel para garantir que o jQuery esteja carregado
      $(container).owlCarousel({
          loop: true,
  margin: 10,
  nav: true,
  dots: false,
  autoplay: false,
  autoHeight: false, // ← aqui!
  responsive: {
    0: { items: 1, nav: true },
    576: { items: 2, nav: true },
    768: { items: 3, nav: true },
    992: { items: 4, nav: true },
    1200: { items: 5, nav: true }
  },
  navText: ['<i class="bi bi-chevron-left"></i>', '<i class="bi bi-chevron-right"></i>']
});
    }

  } catch (error) {
    console.error(`Erro ao buscar livros para "${queryTerm}":`, error);
    container.innerHTML = `<div class="col-12"><p class="text-center text-danger">Erro ao carregar livros.</p></div>`;
  }
}

// Quando o DOM estiver carregado, chamamos a função para cada seção
document.addEventListener("DOMContentLoaded", async () => {
  // Seção: Novidades da Cultura (Livros variados, sem carrossel)
  // Limitei a 4 para não ficar visualmente muito longo na página inicial sem rolagem
  await renderizarCards("livros-novidades", "new release books", 4);

  // Seção: Mais vendidos Veja e Publishnews (AGORA COM CARROSSEL)
  // Buscamos mais livros aqui (ex: 15-20) para o carrossel ter o que rolar
  await renderizarCards("livros-mais-vendidos-carousel", "best sellers", 15, true);

  // Seção: Para os PEQUENOS (Livros infantis, sem carrossel)
  // Limitei a 4
  await renderizarCards("livros-pequenos", "children books", 4);
});