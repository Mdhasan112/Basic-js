
// function fun() {
//     var num = 20;
// var num2 = 10;

// console.log(num * num2);
// }

// fun();
// fun();
// fun();

function fun (num, num2){
    var total = num + num2;
    console.log(total);
}

fun(10, 20);
fun(50, 100);

function moja(num){
    var total = num * 10;
    return total;
}

var x = moja(10);
var y = moja(20);

console.log(x);
console.log(y);
console.log(x *y);