var firstName = prompt("What is your firstname?")
var lastName = prompt("What is your last name?")
var years = prompt("How old are you?")
var tall = prompt("How tall are you?")
var petName = prompt("What is your petname?")

alert("Thanks for answer")

var spy = false

if (firstName[0] === lastName[0]){
  if(years > 20 && years < 30){
    if(tall > 170){
      if(petName[petName.length - 1] === "y"){
        spy = true
      }
    }
  }
}

if (spy === true){

  console.log("This man is spy")
}
