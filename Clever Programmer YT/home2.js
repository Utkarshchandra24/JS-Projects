console.log("Hello");
//alert("Hi how are u doing");

var b = "smoothie";
console.log(b);

var someNumber = 45;
console.log(someNumber);

//document.getElementById("sometext").innerHTML = "Hello How are u doing !!";

//var age = prompt("What is your age?")

//document.getElementById("sometext").innerHTML = age;

var num1 = 10;

num1++ //Increment by 1
console.log(num1);

num1--
console.log(num1);

console.log(num1 / 6);

console.log(num1 % 6);

//Functions

function fun() {
    alert("This is a function!");
}

fun();

//Lets create a function that takes in a name and returns a function followed by a name

function greeting() {
    var name = prompt("What is your name?");
    var res = "Hello " + name;
    console.log(res);  
}

//greeting();

function SumNum(n1,n2) {
    var res = n1 + n2;
    console.log(res);
}

SumNum(10,20);

/*
//While Loops

var num2 = 0;

while(num2 < 100) {
    num2+=1;
    console.log(num2);
}
*/

//**For Loops**
for(let num2=0;num2 < 100; num2++) {
    console.log(num2);
}

//**Data Types**

let yourage = 18;                                       //number
let yourname = "Bob";                                   //string
let name = {first: "Jane",last:"Jones"};                //object
let truth = false;                                      //boolean
let groceries = ["apple","banana","Mango","Oranges"];   //array
let random;                                             //undefined
let nothing = null;                                     //Null value


//**Strings in JavaScript (common methods)**

let fruit = "Banana,apple,mango,kiwi";
let morefruits = "banana \n apple";         //new Line '\n'
console.log(morefruits);
console.log(morefruits.length);             //length of the string
console.log(fruit.indexOf("q"));            //if the letter is not present in the string it gives "-1" as a output
console.log(fruit.indexOf("nan"));          //finds the word in the string 
console.log(fruit.slice(2,6));
console.log(fruit.replace("ban",'123'));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(2));
console.log(fruit[0]);
console.log(fruit.split(','));  //split by a comma
console.log(fruit.split(''));   //split by a characters

//**Array**

let fruit2 = ['banana','apple','mango','kiwi','watermelon'];
fruit2 = new Array('banana','apple','mango','kiwi','watermelon');

console.log(fruit2);
console.log(fruit2[2]);     //Accessing value from the array

fruit2[0] = "pear";         //Changing the value in the array
console.log(fruit2);

for(let i=0;i<fruit2.length;i++)
{
    console.log(fruit2[i]);
}

//**Array common methods */

console.log("to String", fruit2.toString());
console.log(fruit2.join(' - '));
console.log(fruit2.join(' * '));
console.log(fruit2,fruit2.pop(),fruit2);        //removes last item
console.log(fruit2.push("Blackberries"),fruit2);    //appends
console.log(fruit2.length);
console.log(fruit2[3]);
fruit2[fruit2.length] = 'new fruit';    //same as push
console.log(fruit2)

fruit2.shift();     //removes the first element from a list
console.log(fruit2);
fruit2.unshift("kiwi");     //add first element to an array
console.log(fruit2);

let vegetables = ["tomato","potato","broccoli"];
let allGroceries = fruit2.concat(vegetables);
console.log(allGroceries);
console.log(allGroceries.slice(1,4));
console.log(allGroceries.reverse());
console.log(allGroceries.sort());

let somenum = [5,10,2,20,3,255,1,67,321,123];
console.log(somenum);
console.log(somenum.sort());
console.log(somenum.sort(function(a,b) {return a-b}));  //sorted in ascending order
console.log(somenum.sort(function(a,b) {return b-a}));  //sorted in descending order

console.log(somenum.sort(function(b,a) {return a-b}));  //sorted in descending order
console.log(somenum.sort(function(b,a) {return b-a}));  //sorted in ascending order

let emptyArray = new Array()
for(let num=0;num<=10;num++) {
    emptyArray.push(num);
}
console.log(emptyArray);

//Objects in JavaScript
// dictionaries in Python

//let student = {first:"Rahul",last:"Mishra",age:24,height:180};    //this way also works
let student = {
    first:"Rahul",
    last:"Mishra",
    age:24,
    height:180,
    studentInfo : function() {
        return this.first + '\n' + this.last + '\n' + this.age;
    }

};                //this way also works


console.log(student.first);
console.log(student.last);
console.log(student);
console.log(student["first"]);        
console.log(student["last"]);
console.log(student.first + student.last);  //Concatinate the first name and the last name
console.log(student.first + " " + student.last);    //Giving space in between the names
console.log(student["first"] + student["last"]);
console.log(student["first"] + " " + student["last"]);
console.log(student['first']);                  //single quotation also works


//student.first = "Not Rahul";        //This is how you can change the value
//console.log(student.first); 


/*
student[last] = "not Mishra";       //This does'nt works 
console.log(student.last);
*/

console.log(student.age);
student.age++;
console.log(student.age);

console.log(student.studentInfo());


//Conditional control flows (if else)
//18-35 is my target demographic
// && - AND 
// || - OR

//var age = prompt("What is your age?");

var age = 26;

if((age >= 18) && (age <= 35)) {
    status = 'target demo';
    console.log(status);
} else {
    status = "not my audience";
    console.log(status);
}

//Switch Statements
//diffrentiate between weekday vs weekend
// day 0 -> Sunday  -> Weekend
// day 6 -> Saturday -> Weekend
// day 4 -> Thursday -> Weekday


switch(6) {
    case 0:
        text = "Weekend";
        break;
    case 5:
        text = "Weekend";
        break;
    case 6: 
        text = "Weekend";
        break;
    default:
        text = "Weekday";
}

console.log(text);






