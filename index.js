import IMC from "./js/imc.js";
import IMCHistory from "./js/imcHistory.js";
const form = document.forms["formIMC"];
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let peso = form.peso.value;
  let altura = form.altura.value;
  if (!peso || !altura) return;
  peso = peso.replace(",", ".");
  altura = altura.replace(",", ".");
  peso = Number.parseFloat(peso);
  altura = Number.parseFloat(altura);
  const imc = new IMC(peso, altura);
  imc.calcular(peso, altura);
  apresentarResposta(imc);
  const history = new IMCHistory();
  history.add(imc);
});

const apresentarResposta = (imc) => {
  const div = document.getElementById("resultado");
  if (div.classList.contains("visible")) {
    div.classList.remove("visible");
  }
  div.innerHTML = `
<h3>${imc.imc.toFixed(1)}kg/m2</h3>
<h2>${imc.classificacao}</h2>
<p><strong>O que pode acontecer:</strong></p>
<p>${imc.consequencia}</p>
`;
  setTimeout(() => div.classList.add("visible"), 500);
};
const btnHistory = document.getElementById("btnHistory");
btnHistory.addEventListener("click", () => {
  const history = new IMCHistory();
  apresentarHistorico(history);
});
const apresentarHistorico = (history) => {
  const div = document.getElementById("history");
  if (div.classList.contains("visible")) {
    div.classList.remove("visible");
    return;
  }
  div.innerHTML = history.history.reduce((template, hist) => {
    const data = new Date(hist._data);
    return (
      template +
      `
<div class="imc">
<p>${data.toLocaleDateString()}</p>
<h3>${hist._imc.toFixed(1)}Kg/m2</h3>
<h2>${hist._classificacao}</h2>
</div>
`
    );
  }, "");
  setTimeout(() => div.classList.add("visible"), 500);
};
