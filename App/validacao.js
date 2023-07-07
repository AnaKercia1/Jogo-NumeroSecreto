function verificaSeOChutePossuiUmValorValido(chute) {
  const numero = +chute;

  if (chute.toUpperCase() === "GAME OVER") {
    document.body.innerHTML = `
    <h2> GAME OVER </h2>
    <h3> O número secreto era ${numeroSecreto} </h3>

    <button id="jogar-novamente" class="btn-jogar"> Jogar novamente </button> 
    `;
    document.body.style.background = "#404258";
  }

  if (chuteForInvalido(numero)) {
    elementoChute.innerHTML += "<div>Valor inválido</div>";
    return;
  }
  if (numeroForMenorOuMaiorQueValorPermitido(numero)) {
    elementoChute.innerHTML += `<div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>`;
    return;
  }
  if (numero === numeroSecreto) {
    document.body.innerHTML = `
        <h1>Parabéns!Você acertou</h1>
        <h2>O número secreto era ${numeroSecreto}<h2/>
        <button id="jogar-novamente" class="btn-jogar">
        Jogar Novamente
        </button>
        `;
    const startit = () => {
      setTimeout(function () {
        confetti.start();
      }, 100);
    };

    const stopit = () => {
      setTimeout(function () {
        confetti.stop();
      }, 5000);
    };
    startit();
    stopit();
  } else if (numero > numeroSecreto) {
    elementoChute.innerHTML += ` 
    <div>O número secreto é menor <i class="fa-solid fa-circle-arrow-down"></i></div-->
    `;
  } else {
    elementoChute.innerHTML += ` 
    <div>O número secreto é maior <i class="fa-solid fa-circle-arrow-up"></i></div-->
    `;
  }
}

function chuteForInvalido(numero) {
  return Number.isNaN(numero);
}

function numeroForMenorOuMaiorQueValorPermitido(numero) {
  return numero > maiorValor || numero < menorValor;
}
document.body.addEventListener("click", (e) => {
  if (e.target.id === "jogar-novamente") {
    window.location.reload();
  }
});
