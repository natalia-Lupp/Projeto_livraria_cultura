document.addEventListener("DOMContentLoaded", () => {
  const livro = JSON.parse(localStorage.getItem("livroSelecionado"));
  console.log("Livro recuperado do localStorage em venda-descricao.js:", livro);

  if (!livro) {
    document.body.innerHTML =
      '<p class="text-center text-danger mt-5">Livro não encontrado.</p>';
    console.error("Erro: Livro não encontrado no localStorage.");
    return;
  }

  // Popula os elementos, se existirem
  const setText = (id, text) => {
    const el = document.getElementById(id);
    if (el) {
      el.textContent = text || "Não disponível";
      console.log(`Elemento #${id} preenchido com:`, text);
    } else {
      console.warn(`Elemento com ID "${id}" não encontrado no DOM.`);
    }
  };

  const img = document.getElementById("livro-capa");
  if (img) {
    img.src =
      livro.product_photo ||
      "https://cdn.pixabay.com/photo/2016/11/29/05/45/book-1867160_1280.jpg";
    img.alt = `Capa do livro ${livro.product_title}`;
    console.log("Capa do livro preenchida. src:", img.src);
  } else {
    console.warn("Elemento #livro-capa não encontrado no DOM.");
  }

  setText("livro-titulo", livro.product_title);
  setText("livro-editora", livro.product_byline); // Editora aqui é o Autor, como discutimos
  setText("livro-preco-base", livro.product_price);
  setText("livro-preco-final", livro.product_price);

  // Preenchendo a Sinopse (o span precisa ter o id "sinopse" dentro da tag <p>)
  // Seu HTML atual está assim: <div class="col-md-12 mt-3"><p><strong>Sinopse:</strong></p></div>
  // Para que o setText funcione, você precisa de um span com id="sinopse" dentro do p:
  // <p><strong>Sinopse:</strong> <span id="sinopse"></span></p>
  // Como a API de busca não fornece sinopse, vamos deixar como "Não disponível" por enquanto,
  // a menos que você adicione essa informação.
  setText("sinopse", livro.sinopse || "Sinopse não disponível.");


  // Preenchendo a tabela de detalhes
  // Certifique-se de que cada <td> que você quer preencher tenha um ID único ou seja acessível
  // de forma consistente para que o JS possa encontrá-lo.
  // Ou use querySelector para acessar pelo índice da célula (tr:nth-child(X) td)

  // Autor (MIH TANINO no seu HTML)
  const autorCell = document.querySelector('table.table-bordered tbody tr:nth-child(1) td');
  if (autorCell) {
      autorCell.textContent = livro.product_byline || "Não disponível";
      console.log("Autor da tabela preenchido:", livro.product_byline);
  } else {
      console.warn("Célula de Autor da tabela não encontrada.");
  }

  // Ano (2025 no seu HTML)
  const anoCell = document.querySelector('table.table-bordered tbody tr:nth-child(2) td');
  if (anoCell) {
      anoCell.textContent = livro.first_publish_year || "Não disponível";
      console.log("Ano da tabela preenchido:", livro.first_publish_year);
  } else {
      console.warn("Célula de Ano da tabela não encontrada.");
  }

  // Edição (1 no seu HTML) - A API de busca não fornece isso.
  const edicaoCell = document.querySelector('table.table-bordered tbody tr:nth-child(3) td');
  if (edicaoCell) {
      edicaoCell.textContent = livro.edition || "Não disponível";
      console.log("Edição da tabela preenchido:", livro.edition);
  } else {
      console.warn("Célula de Edição da tabela não encontrada.");
  }

  // Origem (NACIONAL no seu HTML) - A API de busca não fornece isso.
  const origemCell = document.querySelector('table.table-bordered tbody tr:nth-child(4) td');
  if (origemCell) {
      origemCell.textContent = livro.origin || "Não disponível";
      console.log("Origem da tabela preenchido:", livro.origin);
  } else {
      console.warn("Célula de Origem da tabela não encontrada.");
  }

  // Idioma (PORTUGUÊS no seu HTML) - A API de busca pode ter language_code
  const idiomaCell = document.querySelector('table.table-bordered tbody tr:nth-child(5) td');
  if (idiomaCell) {
      // OpenLibrary search.json tem language[], pode pegar o primeiro
      idiomaCell.textContent = livro.language?.[0] || "Não disponível";
      console.log("Idioma da tabela preenchido:", livro.language?.[0]);
  } else {
      console.warn("Célula de Idioma da tabela não encontrada.");
  }

  // País (BRASIL no seu HTML) - A API de busca não fornece isso diretamente
  const paisCell = document.querySelector('table.table-bordered tbody tr:nth-child(6) td');
  if (paisCell) {
      paisCell.textContent = livro.country || "Não disponível";
      console.log("País da tabela preenchido:", livro.country);
  } else {
      console.warn("Célula de País da tabela não encontrada.");
  }

  // EAN (9788593448888 no seu HTML) - Geralmente o ISBN-13
  const eanCell = document.querySelector('table.table-bordered tbody tr:nth-child(7) td');
  if (eanCell) {
      eanCell.textContent = livro.isbn?.[0] || "Não disponível"; // Pode ter múltiplos ISBNs
      console.log("EAN da tabela preenchido:", livro.isbn?.[0]);
  } else {
      console.warn("Célula de EAN da tabela não encontrada.");
  }

  // ISBN (8593448887 no seu HTML) - O ISBN-10 ou outro
  const isbnCell = document.querySelector('table.table-bordered tbody tr:nth-child(8) td');
  if (isbnCell) {
      // Se houver mais de um ISBN, você pode escolher qual mostrar ou concatenar
      isbnCell.textContent = livro.isbn?.[1] || livro.isbn?.[0] || "Não disponível";
      console.log("ISBN da tabela preenchido:", livro.isbn?.[1] || livro.isbn?.[0]);
  } else {
      console.warn("Célula de ISBN da tabela não encontrada.");
  }

  // Formato (LIVRO no seu HTML) - Não disponível diretamente na API de busca
  const formatoCell = document.querySelector('table.table-bordered tbody tr:nth-child(9) td');
  if (formatoCell) {
      formatoCell.textContent = livro.format || "Não disponível";
      console.log("Formato da tabela preenchido:", livro.format);
  } else {
      console.warn("Célula de Formato da tabela não encontrada.");
  }

  // Encadernação (BROCHURA no seu HTML) - Não disponível diretamente na API de busca
  const encadernacaoCell = document.querySelector('table.table-bordered tbody tr:nth-child(10) td');
  if (encadernacaoCell) {
      encadernacaoCell.textContent = livro.binding || "Não disponível";
      console.log("Encadernação da tabela preenchido:", livro.binding);
  } else {
      console.warn("Célula de Encadernação da tabela não encontrada.");
  }

  // Páginas (48 no seu HTML) - A API de busca pode ter number_of_pages_median
  const paginasCell = document.querySelector('table.table-bordered tbody tr:nth-child(11) td');
  if (paginasCell) {
      paginasCell.textContent = livro.number_of_pages_median || "Não disponível";
      console.log("Páginas da tabela preenchido:", livro.number_of_pages_median);
  } else {
      console.warn("Célula de Páginas da tabela não encontrada.");
  }

  // Altura, Comprimento, Largura, Peso - Não disponíveis na API de busca
  const alturaCell = document.querySelector('table.table-bordered tbody tr:nth-child(12) td');
  if (alturaCell) {
      alturaCell.textContent = livro.height || "Não disponível";
      console.log("Altura da tabela preenchido:", livro.height);
  } else {
      console.warn("Célula de Altura da tabela não encontrada.");
  }

  const comprimentoCell = document.querySelector('table.table-bordered tbody tr:nth-child(13) td');
  if (comprimentoCell) {
      comprimentoCell.textContent = livro.length || "Não disponível";
      console.log("Comprimento da tabela preenchido:", livro.length);
  } else {
      console.warn("Célula de Comprimento da tabela não encontrada.");
  }

  const larguraCell = document.querySelector('table.table-bordered tbody tr:nth-child(14) td');
  if (larguraCell) {
      larguraCell.textContent = livro.width || "Não disponível";
      console.log("Largura da tabela preenchido:", livro.width);
  } else {
      console.warn("Célula de Largura da tabela não encontrada.");
  }

  const pesoCell = document.querySelector('table.table-bordered tbody tr:nth-child(15) td');
  if (pesoCell) {
      pesoCell.textContent = livro.weight || "Não disponível";
      console.log("Peso da tabela preenchido:", livro.weight);
  } else {
      console.warn("Célula de Peso da tabela não encontrada.");
  }
});