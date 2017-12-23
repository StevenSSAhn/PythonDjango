var psOne = document.querySelector('#one')
var psTwo = document.querySelector('#two')
var psThree = document.querySelector('#three')
var psFour = document.querySelector('#four')
var psFive = document.querySelector('#five')
var psSix = document.querySelector('#six')
var psSeven = document.querySelector('#seven')
var psEight = document.querySelector('#eight')
var psNine = document.querySelector('#nine')
var reStart = document.querySelector('#btn')

var numClick1 = 0
var numClick2 = 0
var numClick3 = 0
var numClick4 = 0
var numClick5 = 0
var numClick6 = 0
var numClick7 = 0
var numClick8 = 0
var numClick9 = 0
var xOBlank = [" ","X","O"]

psOne.addEventListener("click",function(){  numClick1 ++; this.textContent = xOBlank[numClick1%3]})
psTwo.addEventListener("click",function(){  numClick2 ++; this.textContent = xOBlank[numClick2%3]})
psThree.addEventListener("click",function(){  numClick3 ++; this.textContent = xOBlank[numClick3%3]})
psFour.addEventListener("click",function(){  numClick4 ++; this.textContent = xOBlank[numClick4%3]})
psFive.addEventListener("click",function(){  numClick5 ++; this.textContent = xOBlank[numClick5%3]})
psSix.addEventListener("click",function(){  numClick6 ++; this.textContent = xOBlank[numClick6%3]})
psSeven.addEventListener("click",function(){  numClick7 ++; this.textContent = xOBlank[numClick7%3]})
psEight.addEventListener("click",function(){  numClick8 ++; this.textContent = xOBlank[numClick8%3]})
psNine.addEventListener("click",function(){  numClick9 ++; this.textContent = xOBlank[numClick9%3]})

// reStart.addEventListener("click",function(){
//   numClickOne ++;
//   if(numClickOne%3 === 0){
//   psOne.textContent = " ";
//   }else if(numClickOne%3 === 1){
//   psOne.textContent = "X";
//   }else if(numClickOne%3 === 2){
//   psOne.textContent = "O";
//   }
// })

// function fillText(){
//   numClick ++;
//   this.textContent = xOBlank[numClick%3]
// }
// psOne.addEventListener("click",fillText())




// psOne.addEventListener("click",function(){
//   numClickOne ++;
//   if(numClickOne%3 === 0){
//   psOne.textContent = " ";
//   }else if(numClickOne%3 === 1){
//   psOne.textContent = "X";
//   }else if(numClickOne%3 === 2){
//   psOne.textContent = "O";
//   }
// })

// Double Click
headThree.addEventListener("dblclick",function(){
  headThree.textContent = "Double Clicked!";
  headThree.style.color = 'red';
})
