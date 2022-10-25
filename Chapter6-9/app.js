// // // //     Task 1

// let a = 10

// document.write(`
// Results: <br/>
// <br/>
// The Value Of a is ${a} <br/>
// ...................................... <br/>
// The Value Of  ++a is ${++a} <br/><br/>
// Now the value of a is ${a} <br/> <br/><br/>

// The Value Of  a++  is ${a++} <br/><br/>
// Now the value of a is ${a} <br/> <br/><br/>

// The Value Of  --a  is ${--a} <br/><br/>
// Now the value of a is ${a} <br/> <br/><br/>

// The Value Of  a--  is ${a--} <br/><br/>
// Now the value of a is ${a} <br/> <br/><br/>

// `)


// // // //     Task 2

// var a = 2;

// var b = 1;


// document.write(`
// a is ${a} <br/>
// b is ${b} <br/> <br/>
// --a  is  ${--a} <br/>  --b is  ${--b} <br/>  ++b  is  ${++b} <br/>  b-- is  ${b--} <br/>
// `)


// var result = --a - --b + ++b + b--;


// document.write(`
// <br/>
// result is ${result}
// `)


// // // //     Task 3

// let user = prompt("Enter your name")

// alert(`Welcome ${user} on this web page`)


// // // //     Task 5

// let num = parseInt(prompt("Enter The Number"))

// for (let index = 1; index <= 10; index++) {
    
//     document.write(`${num?num:5} x ${index} = ${(num?num:5)*index} <br/> <br/>`)
    
// }


// // // //     Task 6

let sub1 = prompt("Enter the name of subject 1")
let sub2 = prompt("Enter the name of subject 2")
let sub3 = prompt("Enter the name of subject 3")

let TotalMark = 100

let mark1 = parseInt(prompt("Enter the Marks of Subject 1"))
let mark2 = parseInt(prompt("Enter the Marks of Subject 2"))
let mark3 = parseInt(prompt("Enter the Marks of Subject 3"))

let total = mark1+mark2+mark3

document.write(`
<table>
<tr>
<th>Subject  &nbsp</th>

<th>Total Marks	&nbsp</th>

<th>Marks Obtained 	&nbsp</th>

<th>Percentage 	&nbsp</th>
</tr>

<tr>
<td>${sub1}</td>
<td>${TotalMark}</td>
<td>${mark1}</td>
<td>${(mark1/TotalMark)*100}%</td>
</tr>

<tr>
<td>${sub2}</td>
<td>${TotalMark}</td>
<td>${mark2}</td>
<td>${(mark2/TotalMark)*100}%</td>

</tr>

<tr>
<td>${sub3}</td>
<td>${TotalMark}</td>
<td>${mark3}</td>
<td>${(mark3/TotalMark)*100}%</td>

</tr>

<br/>


<tr>
<td>&nbsp</td>
<td><h3>${300}</h3></td>
<td><h3>${total}</h3></td>
<td><h3>${(total/300)*100}%</h3></td>

</tr>

</table>
`)