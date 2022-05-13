var student = {id: 121, phone: 1868, name: "mahim"};
var student2 = {id: 131, phone: 1122, name: "rohim"};

var phoneNo = student.phone;
// or var phoneNo = student["phone"];

// update phone
student2.phone = 5555;

console.log(phoneNo);
console.log(student2);