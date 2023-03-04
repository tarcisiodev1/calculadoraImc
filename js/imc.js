import calcularIMC from "./calcularIMC.js";
class IMC {
  constructor(peso, altura) {
    this._peso = peso;
    this._altura = altura;
    this._data = new Date();
  }
  calcular() {
    const { imc, classificacao, consequencia } = calcularIMC(
      this.peso,
      this.altura
    );
    this._imc = imc;
    this._classificacao = classificacao;
    this._consequencia = consequencia;
  }
  get peso() {
    return this._peso;
  }
  get altura() {
    return this._altura;
  }
  get imc() {
    return this._imc;
  }
  get classificacao() {
    return this._classificacao;
  }
  get consequencia() {
    return this._consequencia;
  }
  get data() {
    return this._data;
  }
}
export default IMC;
