// Verifica os links das páginas
const links = document.querySelectorAll(".header-menu a");

// Função que ativa o link
function ativarLink(link) {
  const url = location.href;
  const href = link.href;

  // o método .includes() verifica se na string existe a palavra escrita nos parênteses
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

// Ativa a função para cada um dos links
links.forEach(ativarLink);

// Ativar items do Orçamento
// Retorna os parâmetros indicados na URL
const parametros = new URLSearchParams(location.search);

// Função que verifica os parâmetros no HTML e deixa checado na url.
function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(ativarProduto);

// Perguntas  Frequentes

const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", ativa);

  console.log(resposta);
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

// Galeria de Bicicletas

const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

function trocarImagem(event) {
  const img = event.currentTarget;
  const media = matchMedia("(min-width: 1000px").matches;
  if (media) {
    galeriaContainer.prepend(img);
  }
}

function eventosGaleria(img) {
  img.addEventListener("click", trocarImagem);
}

galeria.forEach(eventosGaleria);

// Animação
if (window.SimpleAnime) {
  new SimpleAnime();
}
