let inputnum = document.getElementById('inputnum')
let outputnum = document.getElementById('outputnum')
let Todaysdate = document.getElementById("date")
let RoundOffFloat = document.getElementById("RoundOffFloat")
let birthYear = document.getElementById("birthYear")
let age = document.getElementById("age")
let occurrences = document.getElementById("occurrences")


function findMean(e) {
  e?.preventDefault()

  let value = prompt('Enter Positive Number')

  while (isNaN(value) === true) {
    value = prompt('Enter Correct Positive Number')
  }
    while (Number(value) <= 0) {
        value = prompt('Enter Only Positive Number')
    }

  inputnum.innerHTML = value
 let num = 0
  for (let index = 0; index < value.length; index++) {
      num=num+Number(value[index])
  }
   num = num/value.length
  outputnum.innerHTML = num

}


function getDate() {
   
   let newDate = new Date().toLocaleString().split("/")[1]

   if (newDate <= 15) {
    return Todaysdate.innerHTML = "“First fifteen days of the month”" 
   }else{
    return Todaysdate.innerHTML = " “Last days of the month” " 
   }
   
}


function round_Off_Fload_value(e) {
  e?.preventDefault()

  let value = prompt('Enter Positive Number')

  while (isNaN(value) === true) {
    value = prompt('Enter Correct Positive Number')
  }

  while (Number(value) <= 0) {
    value = prompt('Enter Only Positive Number')
  }

 let float =  parseInt(prompt("How much Decimal"))

 while (float <= 0) {
  float =  parseInt(prompt("How much Decimal Positive Only"))
}

  RoundOffFloat.innerHTML = Number(value).toFixed(float)

}


function guessTheAge() {
  let yearOfBirth = parseInt(prompt("Please enter your date of birth:"))

  let date = new Date();
  let year = date.getFullYear()

   age.innerHTML =  year - yearOfBirth
   birthYear.innerHTML = yearOfBirth
}

function getTheOccurence() {
  let string = "The quick brown fox jumps over the lazy dog"

let newString = string.split("the");

occurrences.innerHTML = newString.length

}


