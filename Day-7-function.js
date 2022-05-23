function sayLoveYou () {
    console.log("what is your name");
}
sayLoveYou();
var age = 20;
var place = "dhaka";
sayLoveYou();

function doubleIt (num) {
    var result = num * 2;
    return result;
}
var first = doubleIt(10);
 var second = doubleIt(20);
 var total = first + second
 console.log(total);

 function sleep (person, name) {
     console.log(person + "  name is " + name);
 }

 sleep("My", "hasan");
 sleep("which", "raju");
 console.log(4);

let x = myFunction(4, 3);   // Function is called, return value will end up in x

function myFunction(a, b) {
  return a * b;             // Function returns the product of a and b
}