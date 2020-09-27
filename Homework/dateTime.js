// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**

// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date())

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}

// Write a JavaScript program to convert a number to a string.
let z = 15

const numString = (num) => {
  let str = num.toString()
  return str
}

let w = numString(z)

console.log("Convert number:", z, "to string:", w,)

// Write a JavaScript program to convert a string to the number.
let m = "54321"

const stringNum = () => {
  let number = Number()
  return number
}

let n = stringNum(m)

console.log("Function to convert", m, "to a number", n,)

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
let item = 55

const returnData = (item) => {
  return typeof item
}

console.log(returnData(item))

// Write a JavaScript program that adds 2 numbers together.
let s = 5
let t = 15

const together = (s, t) => {
  return s + t
}
let u = together(s, t)

console.log(u)


// Write a JavaScript program that runs only when 2 things are true.
let thing1 = true
let thing2 = true

const bothTrue = (thing1, thing2) => {
  if (thing1 === true && thing2 === true) {
  console.log("Run if both are True")
  }
}

bothTrue(thing1, thing2)

// Write a JavaScript program that runs when 1 of 2 things are true.
let thing10 = true
let thing11 = false

const onlyOneTrue = (thing10, thing11) => {
  if (!thing10 && thing11 || thing10 && !thing11) {
  console.log("Run if only one is true")
  }
}

onlyOneTrue(thing10, thing11)

// Write a JavaScript program that runs when both things are not true.

let thing100 = false
let thing101 = false

const bothNotTrue = (thing100, thing101) => {
  if (thing100 === false && thing101 === false) {
  console.log("Both are not true")
  }
}

bothNotTrue(thing100, thing101)

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24