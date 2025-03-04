//variables practice

// *what is variables?
//Ans : Variables are containers of data. Variables store data in a memory location.
let firstName = "Ramkanta";
let lastName = "Pramanik";
let age = 22;
let city = "Santipur";

const PI = 3.14;  //const variable , we can't change it later 

let friendName = "Ram",
age1=23,
city1 = "Kolkata";

var g=0;
g=1 && g++;
//console.log(g); // output = 0

//console.log(employeeId); //output : undefined
var employeeId = "19000";

//we are use typeof keyword for checking the type of variables.
var a1 = 1.2;
//console.log(typeof a); //output : number

const a = { 
    msg: "Hi"  //this is a object
};
const b = a;
b.msg = "Hello";

//console.log(a, b); //{ msg: "Hello" } { msg: "Hello" }

//console.log('The value of num is: ' + num);  // num is not defined

var num = 8;
var num = 10;

//console.log(num); //output : 10

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


//Data types

/*Data Types : 1.Primitive data types - String,Number,bigInt,boolean,undefined,symbol,null
   2. Non Primitive data types  - Arrays ,objects*/

   let x = 10;
   let y = x;
   y = 20;
   //console.log(x, y); //output : 20
   
   
   let a = "Hello";
   let b = a;
   b = "World";
   //console.log(a, b); //output : Hello World
   /*
   console.log(typeof 42); //output : number
   console.log(typeof "Hello"); //output : string
   console.log(typeof true); //output : boolean
   console.log(typeof undefined); //output : undefined
   console.log(typeof null); //output : object  , this is a error/bugs in javascript
   */
   
   let obj1 = { 
       name: "Alice" 
   };
   let obj2 = obj1;
   obj2.name = "Bob";
   console.log(obj1, obj2); //output : { name: 'Bob' } { name: 'Bob' }
   
   
   let numOne = 3
   let numTwo = 3
   console.log(numOne == numTwo) //output : true
   
   
   let nums = [1, 2, 3]
   nums[0] = 10
   console.log(nums)  // [10, 2, 3] it return first index 0 number from array
   
   let nums1 = [1, 2, 3]
   let numbers = [1, 2, 3]
   console.log(nums1 == numbers) //output will be false , because two are separate arrays but hold same vaues
   
   let nums2 = [1, 2, 3]
   let numbers2 = nums2
   //console.log(nums2 == numbers2) //output : true
   
   
   let arr1 = [1, 2, 3];
   let arr2 = arr1;
   arr2.push(4);  // 4 will be push arr2[] on last index or position
   console.log(arr1, arr2);//output : [1,2,3,4] [1,2,3,4]



   - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

   //conditional problems

   //*if condition

let age=15;
if(age>=18){
    console.log("You are eligible for vote");
}else
{
    console.log("Not eligble for vote ");
}
//output : Not eligble for vote .(because 15 is lase than 18)
    

//*if else condition , even or odd number
let num=11;
if(num %2 ===0){  // if number is divided by 2 and remainder is 0 then it will return "even number"
    console.log("even number");
}else{
    console.log("odd number");  //output : odd number
}
    

//*if else if else condition

let marks=30;
if(marks>=90){
    console.log("Grade-A");
}else if(marks>=75){
    console.log("Grade-B");
}else if(marks>=45){
    console.log("Grade-C");
}else
{
    console.log("Fail");
}
//output : Fail
    


//*switch statement
let day="Sunday";
switch(day){
    case "Monday":
        console.log("Starting of week");
        break;
    case "Friday":
        console.log("weekend is near");
        break;
    case "Sunday":
        console.log("It is holiday");
        break;
    default:
        console.log("It is regular days");
}

//output will be : It is holiday
        

//*Ternary Operator:
let age = 17;
let canVote = (age >= 18) ? "Yes, you can vote." : "No, you cannot vote.";
console.log(canVote);
//output : No, you cannot vote , because 17 is lase than 18, so condition is false


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


//loops problems

//For loop
//*print number from 1 to 5
for(let i=1;i<=5;i++){
    console.log(i);  //output : 1 2 3 4 5
}
    

//*while loop

let i=1;
while(i<=5){
    console.log(i);  //output : 1 2 3 4
    i++;
}
    

//*do while loop

let i=1;
do{
    console.log(i);  //output : 1 2 3 4 5
    i++;
}while(i<=5);


//*for in loop

const person = {
    name : "Ramkanta",
    age : 22,
    city : "Santipur"
}
for(let key in person){
    console.log(key + ":"+ person[key]);
}
    
//*for....of loop

const fruits=["apple","mango","coconut"];
for(let fruit of fruits){
    console.log(fruit); //output will be : apple  mango  coconut
}
    


//*print characters of a string


let name ="Ramkanta";
for(let firstName of name){
    console.log(firstName);  //output will be :R  a  m  k  a  n  t  a
}
    

//*break Statement (Exit Loop) problem

for(let i=1;i<=10;i++){
    if(i==5){
        break;//exit loop when i=5
    }
    console.log(i); //output will be 1   2   3   4
}



- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

//arrays problem

//*basic array itteration

const colors = ["red", "white", "green", "pink"];
for(let i=0;i<=colors.length-1;i++){
    console.log(colors[i]); //output : red  white  green  pink
}
    

//*Looping Backward Through an Array

const colors = ["red", "white", "green", "pink","black"];
for(let i=colors.length-1;i>=0;i--){
    console.log(colors[i]);  //output: black  pink  green  white  red
}
    


//forEach loop , alternate of for loop

const colors = ["red", "white", "green", "pink","black"];
colors.forEach(function(color,index){
    console.log(`color ${index+1} : ${color}`);
})
    


//Filtering Even Numbers from an Array
//first create array of numbers 
const nums = [1,2,8,6,5,3,10];

//create empty array
const newNum = [];
for(let i=0; i<=nums.length-1;i++){
    if(nums[i]%2==0){   //finding even number from an array and will push within empty array
        newNum.push(nums[i])
    }
}
console.log(newNum);  //output : [2 , 6 , 8 ,10]






   
   
   
   



