let MainDiv = document.getElementById('MainDiv')

/////// TASK 1 AND 2

// let h1_1  = document.createElement("h1")
// let h1_2  = document.createElement("h1")
// let h1_3  = document.createElement("h1")
// let h1_4  = document.createElement("h1")
// let h1_5  = document.createElement("h1")

// let num1 = parseInt(prompt("Enter Value"))
// let num2 = parseInt(prompt("Enter Value"))

// h1_1.innerHTML = (`Sum of ${num1} and ${num2} is ${num1 + num2}`)
// h1_2.innerHTML = (`Differnce of ${num1} and ${num2} is ${num1-num2}`)
// h1_3.innerHTML = (`Product of ${num1} and ${num2} is ${num1*num2}`)
// h1_4.innerHTML = (`division of ${num1} and ${num2} is ${num1/num2}`)
// h1_5.innerHTML = (`Modules of ${num1} and ${num2} is ${num1%num2}`)

// MainDiv.appendChild(h1_1)
// MainDiv.appendChild(h1_2)
// MainDiv.appendChild(h1_3)
// MainDiv.appendChild(h1_4)
// MainDiv.appendChild(h1_5)










//////// Task 3

// let declaration = document.createElement("h1")
// let init = document.createElement("h1")
// let increment = document.createElement("h1")
// let Add = document.createElement("h1")
// let decrement = document.createElement("h1")
// let remainder = document.createElement("h1")

// let number ;
// declaration.innerHTML =  `Value after variable declaration is: ${number}`

// number = 5
// init.innerHTML = (`Initial value: ${number}`)

// number = number + 1
// increment.innerHTML = `Value after increment is: ${number}.`

// number = number + 7
// Add.innerHTML =  `Value after addition is: ${number}`

// number = number - 1
// decrement.innerHTML = `Value after increment is: ${number}.`

// number = number/3
// remainder.innerHTML = `The remainder is : ${number}`

// MainDiv.appendChild(declaration)
// MainDiv.appendChild(init)
// MainDiv.appendChild(increment)
// MainDiv.appendChild(Add)
// MainDiv.appendChild(decrement)
// MainDiv.appendChild(remainder)

////// tICKET pRICE

// let ticketPrice = 600

// let NumberOfTickets = 5

// let TotalPrice = ticketPrice * NumberOfTickets

// let h1 = document.createElement("h1")

// h1.innerHTML = `Total Cost to buy ${NumberOfTickets} tickets to a movie is ${TotalPrice} PKR`

// MainDiv.appendChild(h1)








//// PRINTING TABLE

// let value = parseInt(prompt("Enter the number whose table is required"))
// let limit = parseInt(prompt("Enter the Limit"))

// document.write(`Table Of ${value} <br/> `)

// for (let index = 1; index <= limit; index++) {

//     document.write(`<br/> ${value} x ${index} = ${value * index} <br/>` )

// }

// // // // Temprature Conversion

// let C = parseInt(prompt("Enter Temprature in Celcius"))

// let F = parseInt(prompt("Enter Temprature in Fahrenheit"))

// let Celsius = ((F - 32) * 5/9);

// let Fahrenheit = ( (C * 9 / 5 ) + 32 )

// document.write(` <br/> <br/> ${C}C is ${Fahrenheit}F <br/>  <br/>`)
// document.write(`<br/> <br/> ${F}F is ${Celsius}C   <br/> <br/>`)






// // // //  Shopping Cart


// let price1 = parseInt(prompt('Enter Price of Item 1'))
// let price2 = parseInt(prompt('Enter Price of Item 2'))
// let quantity1 = parseInt(prompt('Enter Quantity of Item 1'))
// let quantity2 = parseInt(prompt('Enter Quantity of Item 2'))
// let shippingCost = 200

// let TotalCost = price1 * quantity1 + price2 * quantity2 + shippingCost

// let h1 = document.createElement('h1')
// let h2 = document.createElement('h3')

// h1.innerHTML = 'Shopping Cart'

// h2.innerHTML = ` <br/>   Price of item1:  $${price1} <br/>
// <br/> Ordered quantity of item1:   ${quantity1} <br/>
// <br/> Price of item2:   $${price2} <br/> 
// <br/>  Ordered Quantity of item2 :  ${quantity2} <br/>
// <br/> Shipping charges :   $${shippingCost} <br/>
// <br/> Total Cost For Our Order is:   $${TotalCost} <br/> `

// MainDiv.appendChild(h1)
// MainDiv.appendChild(h2)


// // // Percentage Calculater

// let totalMarks = parseInt(prompt("Enter Total Marks"))

// let MarksObtain = parseInt(prompt("Enter Marks Obtain"))

// let percentage =( (MarksObtain/totalMarks)*100 )

// document.write(`<h1> Marks Sheet</h1> <br/>
// <h3> Total Marks : ${totalMarks} </h3> <br/>
// <h3> Marks Obtained :  ${MarksObtain}</h3> <br/>
// <h3> Percentage :  ${percentage} <span> % </span> </h3> <br/>
// `)





// // // // Task 10

// let num = parseInt(prompt("Enter Number"))

// num = ( ( (num+5) *10 ) /2  )

// document.write(`<h1>${num} </h1>`)



// // // // Age Calculator

// let birthYear = parseInt(prompt("Enter Your Birth Year"))
// let date = new Date().getFullYear();

// let Age = date - birthYear

// document.write(`
// <h1>Age Calculator</h1> <br/>
// <h2>Current Year ${date}</h2> <br/>
// <h2>Birth Year ${birthYear}</h2> <br/>
// <h2>Your Age is  ${Age}</h2> <br/>
// `)





// // // // The Geometrizer

let radius = parseInt(prompt("Enter Radius"))
let π = 3.142
let circumference =  2 * π * radius
let area = π * radius ** 2

document.write(`
<h3>Radius of a circle is : ${radius}</h3> <br/>
<h3>The Circumference is : ${circumference}</h3>  <br/>
<h3>The Area is : ${area}</h3>  <br/>

`)

// Circumference of a circle