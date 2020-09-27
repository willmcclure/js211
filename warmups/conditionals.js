let color = "black"; // red, blue, purple
let type = "sedan"; // trucke, SUV, cars


// write some code that will print
// red, yes
// sports car, yes
// blue sedan, yes
// purple SUV, yes

// if it is white, no
// if it is a sedan that is any color other than black or blue, no
// if it is an suv, that is not purple I will not buy it
// everything else, maybe

if(color === "red") {
    console.log("Buy")
}
else if(type === "sports") {
    console.log("Buy it")
}
else if(type === "sedan" && color === "blue") {
    console.log("Buy it more")
}
else if(type === "suv" && color === "purple") {
    console.log("Buy it more")
}
else if(color === "white") {
    console.log("No to white")
}
else if(type = "sedan" && color !== "blue" && color === "black") {
    console.log("No")
}



