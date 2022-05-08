
// reversed
const nameValue = document.querySelector(".reverse-name__form input")
const buttonName = document.querySelector(".reverse-name__form button")
let nameAnswer = document.querySelector(".reverse-name__answer")
function valueName(space){
   buttonName.addEventListener("click", function(e){
      console.log(space.value.length)
      if (!space.value){
         nameAnswer.classList.add("_warning")
         nameAnswer.innerHTML = "впишите своё имя!!!"
      } else {
         nameAnswer.classList.remove("_warning")
         nameReverse(nameValue.value)
      }
   })
}
function nameReverse(name = "андрей"){
   let reverseName = ""
   for (let num = 0; num != name.length; num++){
      if (num === 0){
         reverseName = reverseName + name[name.length - 1].toUpperCase()
      } else {
         reverseName = reverseName + name[name.length - num - 1].toLowerCase()
      }
   }
   nameAnswer.innerHTML = `${reverseName}`
}

valueName(nameValue)

// title format
const titleText = document.querySelector(".reverse-main__textarea")
const buttonTitle = document.querySelector(".reverse-main__button")
const buttonTitleReset = document.querySelector(".reverse-main__reset-button")
let answerTitle = document.querySelector(".reverse-main__answer")

function totalResetTitle(){
   buttonTitleReset.addEventListener("click", function(e){
      answerTitle.innerHTML = ``
   })
}

function getValueForTitleFormat(getValue){
   buttonTitle.addEventListener("click", function(e){
      if (getValue.value){
         titleFormat(getValue.value)
      }  else  {
         getValue.style.borderColor = "red"
      }
   })
}

function titleFormat(text){
   if (text){
      let str = ""
      for (let num = 0 ; num != text.length ; num++ ){
         if(text[num - 1] == " "){
            str = str + text[num].toUpperCase()
         } else if (num == 0){
            str = str + text[num].toUpperCase()
         }
         else {
            str = str + text[num].toLowerCase()
         }
      } 
      answerTitle.innerHTML = `${str}`
   } 
}

totalResetTitle()
getValueForTitleFormat(titleText)

// show more
let showStillText = document.querySelector(".show-still__text")
let buttonForShowMore = document.querySelector(".show-still__button-zone button")
let buttonZone = document.querySelector(".show-still__button-zone")
const maxHeight = showStillText.offsetHeight

function showMore(h){
   if (h > 200){
      const dynamicHeight = showStillText.offsetHeight
      showStillText.style.maxHeight = `${200}px`
      buttonForShowMore.addEventListener("click", function(e){
         if (dynamicHeight == showStillText.offsetHeight){
            showStillText.style.maxHeight = `200px`
            buttonForShowMore.innerHTML = "показать ещё"
         } else {
            showStillText.style.maxHeight = `${dynamicHeight}px`
            buttonForShowMore.innerHTML = "скрыть"
         }
   }) } else {
      showStillText.style.marginBottom = `${0}px`;
      buttonZone.style.display = `none`
   }
}

showMore(maxHeight)

//квадратные уравнения

let parameterA = document.querySelector(".equation-squared__a-parameter input")
let parameterB = document.querySelector(".equation-squared__b-parameter input")
let parameterC = document.querySelector(".equation-squared__c-parameter input")
let answerSquare = document.querySelector(".equation-squared__answer")
const buttonSolving = document.querySelector(".equation-squared__button")

answerSquare.innerHTML = " "

function solvingEquation(a, b, c){
   buttonSolving.addEventListener("click", function(e){
      let realA = Number(a.value)
      let realB = Number(b.value)
      let realC = Number(c.value)
      if (!realA) {
         realA = 1
      }
      if (!realB) {
         realB = 1
      }
      if (!realC) {
         realC = 0
      }
      let d = ((Math.pow(realB,2)) - (4 * realA * realC))
      if (d < 0){
         answerSquare.innerHTML = "Нет корней"
      } else if (d == 0){
         let x = (-realB) / (2 * realA)
         answerSquare.innerHTML = `Ответ: x = ${x}`
      } else {
         let x1 = (-realB + Math.pow(d, 0.5)) / (2 * realA)
         let x2 = (-realB - Math.pow(d, 0.5)) / (2 * realA)
         answerSquare.innerHTML = `Ответ: x1 = ${x1} , x2 = ${x2}`
      }
   })
}

solvingEquation(parameterA, parameterB, parameterC)





