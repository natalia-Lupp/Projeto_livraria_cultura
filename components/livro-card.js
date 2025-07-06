import { html, css, LitElement } from 'https://unpkg.com/lit@2/index.js?module';

export class LivroCard extends LitElement {
  static properties = {
    titulo: { type: String },
    autor: { type: String },
    imagem: { type: String },
    preco: { type: String },
  };

  static styles = css`
    .card {
      display: flex;
      flex-direction: column;
      height: 100%;
      max-width: 250px;
      box-shadow: var(--bs-box-shadow-sm);
      border: 1px solid #dee2e6;
    }
    .card-img-top {
      height: 200px;
      object-fit: contain;
      padding: 20px;
      background-color: #fff;
    }
    .card-title {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      min-height: calc(2 * 1.2em);
      margin-bottom: 0.5rem;
    }
    .card-body {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex-grow: 1;
    }
    .btn {
      margin-top: auto;
    }
  `;

  render() {
    return html`
      <div class="card card-uniform-height text-center shadow p-3 mb-5 bg-white rounded">
        <div class="position-relative">
          <img
            src="${this.imagem}"
            class="card-img-top"
            alt="${this.titulo}"
            @error=${this.substituirImagem}
          />
          <div class="position-absolute bottom-0 start-0 w-100 bg-secondary bg-opacity-75 px-2 py-1 text-center">
            <small class="text-light">${this.autor}</small>
          </div>
        </div>
        <div class="card-body d-flex flex-column">
          <h6 class="card-title text-muted fs-6">${this.titulo}</h6>
          <p class="text-muted fs-5 fw-bold">${this.preco}</p>
          <button class="btn btn-primary btn-sm mt-auto" @click=${this.abrirDetalhes}>COMPRAR</button>
        </div>
      </div>
    `;
  }

  substituirImagem(e) {
    e.target.src = 'https://cdn.pixabay.com/photo/2016/11/29/05/45/book-1867160_1280.jpg';
  }

  abrirDetalhes() {
    const livro = {
      product_title: this.titulo,
      product_byline: this.autor,
      product_photo: this.imagem,
      product_price: this.preco,
    };
    localStorage.setItem('livroSelecionado', JSON.stringify(livro));
    window.location.href = '../vendas/venda-descricao.html';
  }
}

customElements.define('livro-card', LivroCard);
