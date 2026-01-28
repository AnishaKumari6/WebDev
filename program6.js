let name="Anisha"
console.log("Hello, " + name + "!");
let nums=[1,2,3,4,5]

const n=nums.find(num => num > 3);
console.log("Numbers array:", n);
let b=nums.some(num => console.log(num*2));
let a=nums.every(num => num < 10);
console.log("Are all numbers less than 10?", a);
console.log("Are there any numbers?", b);

