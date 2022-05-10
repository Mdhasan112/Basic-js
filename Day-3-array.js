var friendsAge = [10, 12, 13, 15, 17];

var sonaliAge = friendsAge[1];

friendsAge[3] = 20;

var position = friendsAge.indexOf(17);

console.log(position);

// element add .push
friendsAge.push(19);
friendsAge.push(20);

console.log(friendsAge);

// element out .pop
friendsAge.pop();
console.log(friendsAge);

// element 1st (inn/out) .shift/unshift
friendsAge.shift();
console.log(friendsAge);

var tealine = ["salam", "balam", "kalam", "rofiq"];
var part = tealine.slice(2, 4);
console.log(part);
console.log(tealine);