//functions
function findmax2(...args){
    let sum=0;
    for(let arg of args ){
        sum+=arg;
    }
    return sum;
}
function findmax(){
    let max=-Infinity;
    for(let i=0;i<arguments.length;i++){//arguments ia an inbuild function used when we are working with array
        if(arguments[i]>max){
            max=arguments[i];
        }
    }
    return max;
}
console.log(findmax(3,6,7,9,0));//function declaration
console.log(findmax2(3,6,7,9,0));

const sum=function(a,b){return a+b}//function expression
console.log(sum(2,8))

const q=()=>"Hello";//anonimous funtion, works for only one statement
console.log(q());
const str=(a)=> "Hello "+a;
console.log(str("Anisha !"))

//OBJECT CREATION(k:value pair)
const obj={
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
  fullName: function(){
        return (this.firstName+" "+this.lastName);
  }
};

console.log(obj);
console.log(obj.fullName());
//the other way is
const obj1={};
obj1.firstName="John";
obj1.age=50;
obj1.eyeColor="Black";
console.log(obj1);
console.log(obj1['eyeColor'])

// now i am going to create a function with constructor inside it and whith the objects i wil call it
function Person(name, age){
    this.name = name;
    this.age = age;
}

const male = new Person("anshul", 20);
const female = new Person("Anisha", 22);

console.log(male.age + " " + female.age);
male.eyecolor="blue";


//LETS ATART WITH ARRAY:

