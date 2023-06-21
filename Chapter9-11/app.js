// // // // Task 1

// let city = prompt("Enter City Name")

// if (city.toLowerCase() === "karachi") {
// alert("Welcome to the City Of Light")
// }else{
//     alert(`Welcom to ${city}`)
// }

// // // // Task 2

// let gender = prompt("Enter Your Gender")

// if (gender.toLowerCase() === "male") {
//   alert("Good Morning Sir")
// }else if (gender.toLowerCase() === "female"){
//     alert("Good Morning Ma’am")
// }

// // // // Task 3

// let color = prompt("Enter color of road traffic signal")

// if (color.toLowerCase() === "red") {
//     alert("Must Stop")
// } else if (color.toLowerCase() === "yellow") {
//     alert("Ready to move")
// } else if (color.toLowerCase() === "green") {
//     alert("Move now")
// }

// // // // Task 4

// let fuel = parseInt( prompt("Enter the remaining fuel in car in litres") )

// if (fuel <= 0.5) {
//     alert("Please refill the fuel in your car")
// }else{
//     alert("Fuel is enough")
// }

// // // // Task 5

// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// var c = 12
// if (c++ === 13) {
//   alert('condition 1 is true')
// }
// if (c === 13) {
//   alert('condition 2 is true')
// }
// if (++c < 14) {
//   alert('condition 3 is true')
// }
// if (c === 14) {
//   alert('condition 4 is true')
// }

// var materialCost = 20000
// var laborCost = 2000
// var totalCost = materialCost + laborCost
// if (totalCost === laborCost + materialCost) {
//   alert('The cost equals')
// }

// if (true) {
//   alert('True')
// }
// if (false) {
//     alert('False')
//   }  // Not Working


// if ('car' < 'cat') {
//   alert('car is smaller than cat')
// }

// // // // Task 6


// let marksObtained = parseInt(prompt("Enter The Total Marks Obtained in three Subject"))

// let totalMarks = parseInt(prompt("Enter the total marks"))

// let percentage = (marksObtained/totalMarks)*100
 
// var grade ;
// var remarks ; 
// if (percentage >= 80) {
//   grade = "A*"
//   remarks = "Excellent"
// }else if (percentage >= 70) {
//   grade = "A"
//   remarks = "Good"
// }else if (percentage >= 60) {
//   grade = "B"
//   remarks = "You need to improve"
// }else if (percentage < 60) {
//   grade = "Fail"
//   remarks = "Sorry"
// }


// document.write(`
// <h1>Marks Sheet</h1>
// <p> Total Marks :- ${totalMarks}</p>
// <p> Marks Obtained :- ${marksObtained}</p>
// <p> Percentage :- ${percentage}%</p>
// <p> Grade :- ${grade}</p>
// <p> Remarks :- ${remarks}</p>
// `)


// // // // //  Guess game

// let Secretnumber =Math.ceil(Math.random()*10)
// let guessedNumber = parseInt(prompt("Guess Any Number Between 1 to 10"))

// if (guessedNumber === Secretnumber) {
//   alert("Bingo! Correct answer")
// } else if(guessedNumber + 1 === Secretnumber) {
//   alert("Close enough to the correct answer")
// }else if (Secretnumber !== guessedNumber) {
//   alert(" Wrong but Not Even Closed")
// }


// // // // Task 8

// let number = parseInt(prompt("Enter Any Number"))

// if (number % 3 === 0) {
//   alert("The Number is Divisible By 3")
// } else {
//   alert("The Number is not Divisible By 3")
// }


// // // // Task 9

// let InputNumber = parseInt(prompt("Enter Any Number"))

// if (InputNumber % 2 === 0) {
//   alert(`${InputNumber} is even`)
// } else {
//   alert(`${InputNumber} is odd`)
// }


// // // // Task 10


// let T = parseFloat(prompt("Enter Todays temprature in celcius"))

// if (T >= 40) {
//   alert("It is too hot outside.")
// }else if (T >= 30) {
//   alert("The Weather today is Normal")
// } else if (T >= 20) {
//   alert("Today’s Weather is cool.")
// } else if (T >= 10) {
//   alert("OMG! Today’s weather is so Cool.")
// }else{
//   alert("OMG! Today’s weather is to cold.")
// }



// // // // Calculator


function num(a){
    //console.log(a)
    document.getElementById('answer').value += a
    if (document.getElementById('answer').value?.split(a)?.at(1) === 0) {
      alert("Math Error Occures")  
    } 

}


function result(){
    var equation = document.getElementById('answer')
    // 
    if ( eval(equation.value) === Infinity && equation.value?.at(equation?.value?.length-1===0)) {
        // alert("cannot be divided by Zero")
        equation.value = "Number Can not Be divided by zero"
    }else{
        equation.value = eval(equation.value)
    }
}

function clearAll() {
    var equation = document.getElementById('answer')
    equation.value =""
}


function Del() {
   let output = document.getElementById("answer").value;
    document.getElementById("answer").value=output.substring(0,output.length -1);
}