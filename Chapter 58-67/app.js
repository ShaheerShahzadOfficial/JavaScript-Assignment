// // // // Task 1

var main = document.getElementById('main-content')

let element = main.innerHTML

document.write(` 
<br/>
<h1>Getting the main-content element</h1>
${element} `)

var render = document.querySelectorAll('.render')
let array = []
for (var i = 0; i < render.length; ++i) {
  var item = render[i]
  array.push(item.innerHTML)
}

document.write(`
<h1>Getting the render element</h1>
${array.map((item) =>  item  )} `)


    var firstName = document.getElementById("first-name")
    firstName.value= "Shaheer"    

var lastName = document.getElementById("last-name")
lastName.value = "Shahzad"

var email = document.getElementById("email")
email.value = "mshaheer861@gmail.com"

// // // // Task 2

const formContent = document.getElementById("form-content")

document.write(`
<h1> the node type of form-content is : ${formContent.nodeType} </h1>


${lastName.childNodes.values()}
`)

lastName.childNodes.forEach(element => {
  console.log(element.childNodes)
})

// console.log('====================================');
// console.log(lastName.childNodes.forEach(element => {
//   console.log(element)
// }))
// console.log('====================================');