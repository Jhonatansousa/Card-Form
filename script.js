const inputNumber = document.getElementById("inputNumber")
const inputNumberMirror = document.getElementById('inputNumberMirror')
const imageFlag = document.getElementById("cardFlag")
const warning = document.getElementById("inputCardNumber")
//function que ao digitar no input do número do cartão ele vai mostrar a imagem da bandeira do cartão, de acordo com seu número
inputNumber.addEventListener("input", () => {
  const value = inputNumber.value
  let image = ""

  if (value.match(/^4/)) { // Começa com 4: Visa
    image = 'Visa.svg';
    imageFlag.classList.add("imgFlagShow")
  } else if (value.match(/^5[1-5]/)) { // Começa com 51 a 55: Mastercard
    image = 'Mastercard.svg';
    imageFlag.classList.add("imgFlagShow")
  } else if (value.match(/^6/)) { // Começa com 6: Elo
    image = 'Elo.svg';
    imageFlag.classList.add("imgFlagShow")
  } else if (value === '') {
    warning.classList.remove('incorreto');
    imageFlag.classList.remove("imgFlagShow")
    image = ""
  }
  else { // Número incorreto
    warning.classList.add('incorreto');
    imageFlag.classList.remove("imgFlagShow")
    return;
  }

  warning.classList.remove('incorreto');
  imageFlag.src = `assets/${image}`;


})
//essa função faz com que ao digitar no input do número do cartão, a cada 4 números ele adiciona um espaço automaticamente, faz com que não seja permitido digitar letras, apenas números, e por útimo ele faz com que ao digitar o número, ele apareca virtualmente no cartão 
inputNumber.addEventListener("input", () => {
  inputNumberMirror.value = inputNumber.value
  let value = inputNumber.value

  value = value.replace(/\s/g, "")

  value = value.replace(/[^0-9]/g, '')

  value = value.replace(/(.{4})/g, "$1 ")

  value = value.trim()

  value = value.substr(0, 19)

  inputNumber.value = value

})

const inputName = document.getElementById("inputName")
const inputNameMirror = document.getElementById("inputNameMirror")



//abaixo são fuções que fazem que ao digitar no input, será espelhado no cartão
inputName.addEventListener("input", () => {
  inputNameMirror.value = inputName.value
})

const inputValidity = document.getElementById("inputValidity")
const inputValidityMirror = document.getElementById("inputValidityMirror")

inputValidity.addEventListener("input", () => {
  inputValidityMirror.value = inputValidity.value

})
// card flip animation
const cvvInput = document.getElementById("inputCvv")
const cvvMirror = document.getElementById("inputSecurityMirror")

cvvInput.addEventListener("input", () => {
  inputSecurityMirror.value = cvvInput.value
})

// aqui é a animação de mostrar a parte de trás do cartao, quando o input cvv estiver focado, a animação irá ser executada, também foi colocado um atraso no estilo da parte de trás do cartão, para que o efeito fique o mais natural possivel
const flipCard = document.getElementById("flipCard")

cvvInput.addEventListener("focus", () => {
  flipCard.classList.add("flip-vertical-left")
  setTimeout(function () {
    flipCard.classList.add("flip-style")
  }, 200)
})

cvvInput.addEventListener("blur", () => {
  flipCard.classList.remove("flip-vertical-left")
  flipCard.classList.remove("flip-style")
})


//button se torna ativo para o click quando 
// Seleciona todos os input text
const inputs = document.querySelectorAll("input[type=text]")
// Seleciona o botão que será habilitado/desabilitado
const button = document.querySelector("button")

inputs.forEach(input => {
  input.addEventListener('input', () => {
    // Verifica se todos os input text estão preenchidos
    const allInputsFilled = Array.from(inputs).every(input => input.value !== '');

    // Habilita/desabilita o botão com base na condição acima
    button.disabled = !allInputsFilled;
  });
});