document.querySelector("#igual").addEventListener("click", resultado);
document.getElementById('igual').addEventListener('mouseout', saiu)
document.querySelector('#clear').addEventListener('click', limpa)
function resultado() {
  let num1 = document.querySelector("#txtnum").value; //Primeiro número
  let num2 = document.querySelector("#txtnum1").value; //Segundo número
  let op = document.querySelector("#selop").value; //operação
  let resultado = 0;

  function numreal() { //Função que checa se a operação pode ser feita
    if (op == "divide" && (num1 == 0 || num2 == 0)) { //Checa se algum número está sendo divido por zero
      return false;
    } else {
      return true;
    }
  }

  if (num1.length == 0) { //Se a caia estiver vazia então o valor será zero
    num1 = 0;
  } else if (num2.length == 0) {
    num2 = 0;
  }

  if (numreal()) { //Espera o resultado da função e faz a operação de acordo
    switch (op) {
      case "mais":
        resultado = Number(num1) + Number(num2); //soma
        break;
      case "menos":
        resultado = Number(num1) - Number(num2); //subtração
        break;
      case "vezes":
        resultado = Number(num1) * Number(num2); //multiplicação
        break;
      default:
        resultado = Number(num1) / Number(num2); //divisão
        break;
    }
  }

  document.querySelector("#res").innerHTML = resultado; //Mostra o resultado
  document.querySelector("#txtnum").value = resultado; //Preenche o primeiro espaço com o último resultado
  document.querySelector("#txtnum1").value = null; //Limpa o segundo espaço
  document.getElementById('igual').style.backgroundColor = '#bbbbbb' //Muda a cor do botão de igual qunado clicado
}

function saiu(){ //Faz a cor do botão de igual voltar ao normal quando o mouse sai
  document.getElementById('igual').style.backgroundColor = 'white'
}
function limpa(){ //Quando o botã C for clicado tudo fica vazio
  document.querySelector('#txtnum').value = null
  document.querySelector('#txtnum1').value = null
  document.querySelector('#res').innerHTML = null
}
