import { StockService as e } from "../../service/stock.service.js";
let stockService = new e();
async function renderizarCards(e, t, r = 10, o = !1) {
  let a = document.getElementById(e);
  if (!a) {
    console.error(`Container com ID "${e}" n\xe3o encontrado.`);
    return;
  }
  a.innerHTML = "";
  try {
    let i = await stockService.getLivros(t),
      s = r ? i.slice(0, r) : i;
    if (0 === s.length) {
      a.innerHTML = `<div class="col-12"><p class="text-center text-muted">Nenhum livro encontrado para esta se\xe7\xe3o.</p></div>`;
      return;
    }
    s.forEach((e) => {
      let t = document.createElement("div");
      (t.className = o ? "item" : "mb-4"),
        (t.innerHTML = `
        <div class="card card-uniform-height text-center shadow p-3 mb-5 bg-white rounded">
        <div class="position-relative">
      <img
        src="${e.product_photo}"
        class="card-img-top"
        alt="${e.product_title}"
        onerror="this.onerror=null; this.src='https://cdn.pixabay.com/photo/2016/11/29/05/45/book-1867160_1280.jpg';"
      />
      <div class="position-absolute bottom-0 start-0 w-100 bg-secondary bg-opacity-75 px-2 py-1 text-center">
        <small class="text-light">${
          e.product_byline || "Autor desconhecido"
        }</small>
      </div>
    </div>

    <div class="card-body d-flex flex-column">
      <h6 class="card-title text-muted fs-6 ">${e.product_title}</h6>
<p class="text-muted fs-5 fw-bold">${
          e.product_price || "Pre\xe7o indispon\xedvel"
        }</p>
      <button class="btn btn-primary btn-sm mt-auto btn-detalhes-livro">COMPRAR</button>
    </div>
  </div>
`),
        a.appendChild(t);
      let r = t.querySelector(".btn-detalhes-livro");
      r.addEventListener("click", () => {
        console.log("Livro selecionado para localStorage:", e),
          localStorage.setItem("livroSelecionado", JSON.stringify(e)),
          (window.location.href = "../vendas/venda-descricao.html");
      });
    }),
      o &&
        $(a).owlCarousel({
          loop: !0,
          margin: 10,
          nav: !0,
          dots: !1,
          autoplay: !1,
          autoHeight: !1,
          responsive: {
            0: { items: 1, nav: !0 },
            576: { items: 2, nav: !0 },
            768: { items: 3, nav: !0 },
            992: { items: 4, nav: !0 },
            1200: { items: 5, nav: !0 },
          },
          navText: [
            '<i class="bi bi-chevron-left bg-opacity-75 bg-light.bg-gradient shadow-lg"></i>',
            '<i class="bi bi-chevron-right bg-light.bg-gradient shadow-lg"></i>',
          ],
        });
  } catch (n) {
    console.error(`Erro ao buscar livros para "${t}":`, n),
      (a.innerHTML =
        '<div class="col-12"><p class="text-center text-danger">Erro ao carregar livros.</p></div>');
  }
}
document.addEventListener("DOMContentLoaded", async () => {
  await renderizarCards("livros-novidades", "new release books", 4),
    await renderizarCards(
      "livros-mais-vendidos-carousel",
      "best sellers",
      15,
      !0
    ),
    await renderizarCards("livros-pequenos", "children books", 4);
});
