let life = 100; // life bar
let name = "Dante"; // character name STRING

/* ^ Global variables are listed above ^ */

life = life - 50; // damage taken MATH

{
    let life = 80; // block variable
}

const person = {age:"40's", sex:"male", species: "half-demon"};


function greet (firstName) {
    console.log("Hello World" + " " + firstName);
    
}

function personInfo (personObj) {
    console.log(person);
    document.getElementById("demo2").innerHTML = person.age;
}

function myFunction() {
    let text = document.getElementById("demo").innerHTML; 
    document.getElementById("demo").innerHTML =
    text.replace("Vergil","Dante");
  }

function restore(a, b) {
    return a * b;
  
}

greet("Professor");
greet("Classmate");
//personInfo(person);
document.getElementById("demo3").innerHTML = restore(5, 10);

