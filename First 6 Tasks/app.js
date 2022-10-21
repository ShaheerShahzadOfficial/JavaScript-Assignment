const city = document.getElementById('city')
const AfterReplacement = document.getElementById('AfterReplacement')
const value = document.getElementById('value')
const type = document.getElementById('type')
let password = document.getElementById('password')
let error = document.getElementById('error')
let email = document.getElementById('email')
let Emailerror = document.getElementById('Emailerror')
let number = document.getElementById('number')
let roundoffvalue = document.getElementById('roundoffvalue')
let floorvalue = document.getElementById('floorvalue')
let ceilvalue = document.getElementById('ceilvalue')
let randomDiceValue = document.getElementById('randomDiceValue')
let randomDiceValue2 = document.getElementById('randomDiceValue2')

// Task 1

function Toggle() {
  var getHyder = city.innerHTML
  const replace = getHyder
  var getIslam = AfterReplacement.innerHTML

  city.innerHTML = getIslam
  AfterReplacement.innerHTML = replace
}

// Task 2

const changeType = () => {
  let change = typeof Number(value.innerHTML)
  type.innerHTML = change
}

// Task 3
function checkPassword() {
  setTimeout(() => {
    error.innerHTML = ''
  }, 5000)

  const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  if (password.value?.length < 8) {
    return (error.innerHTML =
      'Password should greater than or equal to 8 character')
  }

  for (var i = 0; i < num.length; i++) {
    if (password?.value[0]?.includes(num[i])) {
      return (error.innerHTML = 'Number Should Not be in start')
    }
  }

  let passreg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,16}$/
  if (passreg.test(password.value)) {
    error.innerHTML = 'Password is correct'
  } else {
    error.innerHTML =
      'Password Must Contain Capital and small Letter and number and special character'
  }
}

// Task 4

function checkEmail(e) {
  e?.preventDefault()
  setTimeout(() => {
    Emailerror.innerHTML = ''
  }, 6000)

  if (!email.value.includes('@')) {
    return (Emailerror.innerHTML = 'Email must contain @')
  }

  if (email.value.indexOf('.') - email.value.indexOf('@') < 0) {
    return (Emailerror.innerHTML = ' (.) must be after @')
  }

  if (email.value.indexOf('.') - email.value.indexOf('@') < 3) {
    return (Emailerror.innerHTML = 'Invalid Email Address')
  }
}

// // Task 5

function addNumber(e) {
  e?.preventDefault()

  let value = prompt('Enter Positive Number')

  while (isNaN(value) === true) {
    value = prompt('Enter Correct Positive Number')
  }

  while (Number(value) <= 0) {
    value = prompt('Enter Only Positive Number')
  }

  number.innerHTML = value
  roundoffvalue.innerHTML = Math.round(value)
  floorvalue.innerHTML = Math.floor(value)
  ceilvalue.innerHTML = Math.ceil(value)
}

// // Task 6

function rollTheDice() {
  let rollTheDice = Math.ceil(Math.random() * 6)
  let rollTheDice2 = Math.ceil(Math.random() * 6)

  randomDiceValue.innerHTML = rollTheDice
  randomDiceValue2.innerHTML = rollTheDice2
}


