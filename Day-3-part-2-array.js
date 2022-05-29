var frnd = ["hasan", "raju", "naim", "rofiq"] 

console.log(frnd[2]);


var frndName = ["hasan", "raju", "naim", "rofiq"] 

frndName.push("Lamiya");  // last item remove korte .push
frndName.pop();           // last item add korte .pop
frndName.shift("khalek"); // 1st item remove korte .push
frndName.unshift("khalek"); // 1st item remove korte .push

// console.log(frndName.slice(0,2));  .slice jekono akta remove korte
frndName.splice(0, 2, "hasan khan"); //  .spice remove kore new add

console.log(frndName);