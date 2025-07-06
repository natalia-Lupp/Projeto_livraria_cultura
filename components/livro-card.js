import { LitElement, html, css } from 'lit';
import 'https://unpkg.com/@material/web/button/outlined-button.js';

class LivroCard extends LitElement {
  static properties = {
    titulo: { type: String },
    autor: { type: String },
    imagem: { type: String },
    preco: { type: String },
    livro: { type: Object }, // Para salvar no localStorage
  };

  static styles = css`
    .card {
      border: 1px solid #ccc;
      border-radius: 12px;
      padding: 1rem;
      text-align: center;
      background: white;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    img {
      max-height: 200px;
      object-fit: contain;
      margin-bottom: 1rem;
    }

    h6 {
      font-size: 1rem;
      font-weight: bold;
      color: #333;
      margin-bottom: 0.5rem;
    }

    p {
      font-weight: bold;
      color: #555;
      margin-bottom: 1rem;
    }

    md-outlined-button {
      margin-top: auto;
    }
  `;

  _irParaDetalhes() {
    localStorage.setItem("livroSelecionado", JSON.stringify({
      titulo: this.titulo,
      autor: this.autor,
      imagem: this.imagem,
      preco: this.preco,
    }));
    window.location.href = "../vendas/venda-descricao.html";
  }

  render() {
    return html`
      <div class="card">
        <img
          src="${this.imagem}"
          alt="${this.titulo}"
          @error=${(e) =>
            (e.target.src =
              "https://cdn.pixabay.com/photo/2016/11/29/05/45/book-1867160_1280.jpg")}
        />
        <h6>${this.titulo}</h6>
        <p>${this.preco}</p>
        <md-outlined-button @click=${this._irParaDetalhes} class="btn-detalhes-livro">
          COMPRAR
        </md-outlined-button>
      </div>
    `;
  }
}

customElements.define("livro-card", LivroCard);
