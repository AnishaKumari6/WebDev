let name="Anisha"
console.log("Hello, " + name + "!");
let nums=[1,2,3,4,5]

const n=nums.find(num => num > 3);
console.log("Numbers array:", n);
let b=nums.some(num => console.log(num*2));
let a=nums.every(num => num < 10);
console.log("Are all numbers less than 10?", a);
console.log("Are there any numbers?", b);
let  topic="JavaScript";
let nums1=["car", "bike", "bus", "train"];
// let html=`<h1>${topic} is fun!</h1><ol>`;
// for(const num of nums1  ){
//     html+=`<li>${num}</li>`;
// }
// html+=`</ol>`;
// document.body.innerHTML=html;

let str="aeiou"
console.log(`String : ${str}`);
console.log("performinf string operation: ");
console.log(str.concat(" ","yz"))
console.log(str.charAt(1))//returns str if empty
console.log(str.charCodeAt(6))//returns ascii val
console.log(str.at(2))// more flexible than charAt as it can also take negative val str.at(-1)
console.log(str[0]) //returns[] if empty
console.log(str.slice(-4,-2))
console.log(str.substring(0,3))//similar to slice but if index <0 will be considered as 0
let l=str.length;
console.log(str.slice(-3));
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.isWellFormed());

let str1="  Anisha Kumari Anisha "
console.log(str1.isWellFormed())//if it contains any uni-code chara. then it will return false
// A lone surrogate is a Unicode surrogate code point that is not part of a valid surrogate pair used to represent characters in UTF-16 encoding.

console.log(str1)
console.log(str1.trim())
console.log(str1.trimStart())
console.log(str1.trimEnd())
let str2="1"
console.log(str2.padEnd(5,"x"))//use to only pad a number str
console.log(str2.padStart(3,"x"))
console.log(str2.repeat(3))
console.log(str1.replace("Anisha" ,"Arpit"))//only first match, doesn;t change the string
console.log(str1.split("#"))
//important search method
console.log(str1.indexOf("Anisha"))//starting from 0
console.log(str1.indexOf("Anisha",5))//starting from 5
console.log(str1.lastIndexOf("Anisha"))
console.log(str1.endsWith(" "))
console.log(str1.startsWith(" "))
console.log(str1.includes("Anisha",16)); 

//Working on Numbers
let x=456.94;
console.log(x.toPrecision(4))//returns str
console.log(x.toFixed(2))//returns str
console.log(x.toExponential(3))//returns str
console.log(x.valueOf())//returns number

//There are 3 JavaScript methods that can be used to convert a variable to a number:
//1. Number()	Returns a number converted from its argument.
//2. parseFloat()	Parses its argument and returns a floating point number
//3. parseInt()	Parses its argument and returns a whole number

console.log(Number(new Date("2017-09-23")))// returns no. in millisec
console.log(parseFloat("43.55"))
console.log(parseFloat("43"))
console.log(parseFloat("43.55 num"))
console.log(parseFloat(" num 43.55"))

console.log(parseInt("23"))
console.log(parseInt("23.4"))
console.log(parseInt("23 num"))
console.log(parseInt(" num 23"))

console.log(Number.isFinite("23.23"))
console.log(Number.isInteger("23.23"))
console.log(Number.isNaN("23.23"))

let m=BigInt(44444444444444444444)//or
let q= 4555555555555555555n;
console.log(typeof(q))
let y = 5;
let z = Number(m) + y;//we cannot directly perform arithmatic on number and bigInt

















