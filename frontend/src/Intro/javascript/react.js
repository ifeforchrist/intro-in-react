// destructing Unpack array/object into variables fast.
// For Array
const numbers = [10, 20, 30]
const [first, second, third] = numbers
console.log(first, second) 

//For  Object - very important in React
const user = { name: "Ife", age: 20 }
const { name, age } = user
console.log(user)



// spead operator they opens an array or object
// for array
const arr1 = [1, 2]
const arr2 = [3, 4]
const all = [...arr1, ...arr2]
// for object
const users = { name: "Ife" }
const newUser = { ...users, age: 20 } 
console.log(all);
console.log(newUser)


// For function call
function add(a,b,c){ 
    return a+b+c 
}
console.log(add(1,2,3));





// rest Gathers remaining items into one array. Same ... but usage is opposite.
// In function - like varargs in Java!
function sum(...nums){
  return nums.reduce((a,b) => a+b, 0)
}
console.log(sum(1,2,3,4));


const {names, ...rest} = {name: "Ife", 
    age: 20, 
    city: "Lagos"
}      
console.log(rest) 


//Map - transforms every item, returns NEW array same length:
const nums = [1,2,3];
const doubled = nums.map(n => n * 2)
console.log(nums);


// Filter - keeps only items that pass condition:
const number = [1,2,3,4,5];
const even = number.filter(n => n % 2)
console.log(number);


// foreach is a ready-only
const numb = [1, 2, 3, 4, 5]
let result 