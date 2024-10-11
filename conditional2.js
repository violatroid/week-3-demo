// LOGICAL OPERATORS
// && AND (all must be true) 
// || OR (either must be true)
// == comparison (are the same)
// === strict comparison (compares both value and data type)
// ! = NOT Equal (not the same)
// ! == strict
// >= greater than or equal to
// <= less than or equal to 
// > greater than 
// < less than 

//inputs 
let height = 50;
let minimum = 55;

//precalculating the boolean expression into variable
let canRide = height >= minimum; // no/false vs yes/true

console.log("START") //unconditional - always

if(canRide){
    //expression was true
    console.log("WOOOOOOOOOO!!!!"); sometimes depending on the condition
}else{
    //expression was false
    console.log("sadly watching the fun"); sometimes depending on the condition
}

console.log("END"); //unconditional - always