// console.log('this is the console window');
// it is the dynamic typed language
// let is used to store the variable
// var a = 5;
// var a = 6;
// console.log(a);
// var is also used to store the variable
// the difference between the let and the var is the scope
// scope of the let is local.
// scope od the var is global.
// if (true) {
//     var b = 8;
//     console.log(b);
// }
// console.log(b);
// in case of the let redeclaration is not possible
// in case of the var redeclaration is possible
// for the const the redeclaration is not possible

// Dynamic typed language
// means an array can store everything , integer, float everything
// with the help of the node we can also serach outside of the browser



// == loose equality === strict equality
//     == only value should be same
//         === both the value and the data should be same

//$ object in the Javascript

objects - rectangle is the  property which is having the two property

const rec = {
    length: 1,
    breadth: 2,
    draw: function () {
        console.log('drawing')
    }
}
console.log(rec);

//$object creation = factory function
//     factory function -factory function is used to create the object - then we have to store the
// object


// creation of the factory function
// function createRectangle() {
//     return reactangle = {
//         length: 5,
//         breadth: 4,
//         draw() {
//             console.log('factory function');
//         }

//     };
// }

//let rectangle1 = createRectangle();
//$factory function is a function that create the object and returns it

// function createtriangle() {
//     return triangle = {
//         height: 1,
//         width: 2,
//         base: 3,
//         function() {
//             console.log('triangle3');
//         }
//     }
// }
// let triangle3 = createtriangle();

//

function cube(len, bred) {
    return cube3 = {
        length: len,
        breadth: bred,
        function() {
            console.log(' cube3');
        }
    }
}

let cube3 = cube(6, 7);
let cube4 = cube(8, 9);

//$factory function eg 2

function employeeinfo(initial) {
    return data = {
        name: initial,
        work: function () {
            console.log("the name is" + initial);

        }
    }

}
let official = employeeinfo('tim');
official.work();

function data1(naam) {
    return {
        name1: naam,
        work: function () {
            console.log('this is different ' + naam);
        }

    }
}

let data2 = data1('steve');
data2.work();

// //example 2 of the constructor function
var data3 = function (rollno, name, age) {
    var student = {};
    student.rollno = rollno;
    student.name = name;
    student.age = age;
    student.greeting = function () {
        return (
            'hello i am' + student.name + 'my roll no is' + student.rollno + 'my age is' +
            student.age
        );
        return student;
    };



}
var student1 = data3(1, 'gary', 23);
student1.greeting();


// var Student = function (rollNo, name, age) {
//     // creating Student object
//     var student = {};
//     // parameters as keys to this object
//     student.rollNo = rollNo
//     student.name = name;
//     student.age = age;
//     // function to greet
//     student.greeting = function () {
//         return (
//             'Hello I am ' + student.name +
//             ' My roll no is ' + student.rollNo + '. I am ' + student.age + ' years old. '
//         );
//     };
//     return student;
// };
// var student1 = Student(1, 'Mark', 16);
// console.log(student1.greeting());
// var student2 = Student(21, 'Bill', 13);
// console.log(student2.greeting());


//$Constructor Function
//this keyword is used to create a new object.
function user1() {
    this.object1 = 'Bob';
}

var user1 = new user1();

//new is udes to create a empty object

//for in and for each loop
// let intro = {
//     firstname: "g",
//     lastname: 's',

// };
// for (let key in intro) {
//     console.log(key, intro[key]);
// }

//$for in loop different variation
const studentdetail = {
    data1: "g",
    data2: "y",
    data3: "s",
}
for (let i in studentdetail) {
    console.log(`${i} => ${studentdetail[i]}`);
}

const company = {
    data1: "apple",
    data2: "microsoft",
    data3: "google",
}
for (let i in company) {
    console.log(`${i} company are ${company[i]}`);
}

let salaries = {
    j: 24000,
    k: 3000,
    r: 5000,
}
for (let i in salaries) {
    const salary = "$" + salaries[i];
    console.log(`${i} are ${salary}`);
}

//for in for the string
const string = 'garima';
for (let i in string) {
    console.log(`${string[i]}`);
}

// strings:it is primitive type
// let lastname = "garima";//this is string
// there are the different methods avaliable for the string

// let firstname = new String('love');
// slice method, and the split method, replace,



//$Array
// Searching -If we are doing searching wrt to the reference and the objects then we will use the
// call back function-A callback function is a function passed into another function as an argument, 
// which is then invoked inside the outer function to complete some kind of routine or action.

// objects inside the array-object wala array
// let studentdata = [
//     { no: 1, student: "scientiest" },
//     { no: 2, student: "doctor" },
// ];
// let details = studentdata.find(function (a) {
//     return a.student == "doctor";
// })
// console.log(details);
// above code will return the predicate function

// if we want to search anything in the object then we will use the find function

//removing the element
//end-pop
//begin-shift
//middle-splice(from which index, how many element you want to delete)
//combining- help to combine the two array
//slice-help to slice the array(first number, second number)
//spread operator
//filter
//map
//join
//split
//sort

// let randomno = [3, 5, 7, 8, 10, 34, 23];
// const randomdata = randomno.map((a) => {
//     return a;
// })
// console.log(randomdata);

//in the array select the number which is more than 2 and then add it 
//applying the mapping and the filter in the same array
// let array = [2, 3, 4, 5, 6, 7, 8];
// let filtered = array.filter((data) => {
//     return data = data > 3;
// })
// console.log(filtered);
// let mapped = filtered.map((data2) => {
//     return data2 + 1;
// })
// console.log(mapped);

//function: a block of the code that fulfils the specific task
//Hoisting -it is the process of moving the all the function declaration to the top
//it is done by the js engine
//hoisting-done already by the js engine
// run();
// function run() {
//     console.log('running');
// }

//function assignment
//stand();//if we define the function assigment it will give the error
// let stand = function walk() {
//     console.log('walking');
// }
//in the case of the function assignment the declatration cannot be called in the
//staring of the 
//the function assignment have to be called after declaring it
//stand();

//arguments
//this is the dynamic function
// function sum() {
//     let total = 0;
//     for (let value of arguments)
//         total = total + value;
//     return total;
// }
// let ans = sum(1, 2, 4);
// console.log(ans);


//spreac operator-for copt and concat
//rest operator-the rest operator in the javascript allow the indefinite number of the
//argument and bundle them in the array, thus allowing us to write function that can accept
//a variable number of the argumnent , irrespective of the number of the parameter defined.

// function data(...args) {
//     console.log(args);
// }
// data(1, 2, 3, 4);

// function data2(a, ...args) {
//     console.log(args);
// }
// data2(1, 2, 3, 4);

//in this 1 will be assigned to a and rest to the args
//matlab rest ka naam args h 
//but we cannot write any parameter after the args

//default parameter-if we are dierectly assigning the value to the argument
// if the default parameter is assigned to one number than left to it we have to assign all as the default parameter


//error handling-
//try and catch block
//the code will be executed in the try block and if it throws any exception than it will
// passedto the catch block .

let person = {
    fName: 'Garima',
    lName: 'Singh',
    get fullName() {
        return `${person.fName} ${person.lName}`;
    }
    ,
    set fullName(value) {
        if (typeof value !== string) {
            throw new Error('you  have not sent a string');
        }
        let parts = value.split('');
        this.fName = part[0];
        this.lName = part[1];
    }
};
try {
    person.fullName = true;
}
catch (e) {
    alert(e);
}
console.log(person.fullName);

//reducing the array
//using the reduce method
// let array = [1, 2, 3, 4, 5, 6];
// let reduced = array.reduce((accumulator, currentValue) => accumulator + currentValue);
// console.log(reduced);
//reduce-iunction is a built-in method for arrays that is used to reduce an array to a single value. It iterates over each element in the array and accumulates a result by applying a specified callback function to each element

// let array1 = [1, 2, 3, 4, 5, 6];
// let reduced1 = array.reduce((accumulator, currentValue) => accumulator + currentValue,0);
// console.log(reduced);
//the 0 will be used to assign the initial value

//DOM manipulation
//window- it is the global object
//in window-DOM,BOM, Js core is present
//dom-document object model
//Bom- if you want to communicate with the browser then we will use the Bom-browser object model

//DOM-dom is the tree like structure
//character-tags-token-nodes-then the dom will be ready
//getElementbyID('heading')
//getElementbyClassname()
//getElementbyTagName()
//querySelector
//querySelectorAll


//if we want to update the existing content in the web page
//.innerHTML
//.outerHTML
//.textContent
//.innerText

//.innerHTML- get a element / or all of its descendent
//set an element's HTML elemnet

//browser events
//clicking
//scrolling
//double click
//resize aand etc
//broser announcement that is the events
//events
//respond to events
//data stored in events
//lifecycle of the events
//monitor events- when we will use this then whenever any event is triggered it will be shown
//unmonitorevents-to turn off all the events
//event target-it is the interface implemented by the objects that can receive events and may have the
//listener for that-the action which is happened by the events is defined by the listener
//event targer-- add event listener, remove event listenter, dispatch the event
//event targer is the top level event
//event target se node receive karta h, means node will inherit everything from the  event
//node se inherit element karte h 
//event target is the top level entity-- it's child node--it's child element
//add event listener-listen to event,or respond to event, or hook into event


//pseudo code
//window is the global object
//event target- it is the interface
//<event target>.addEventListener(<event-to-listen-for>,<function-to respond when event happened)
//to apply any event we need the below things
//event target-kis compoenent ke upar listener apply karna h
//event type-click, etc
//function-define what to do when event happen
// let content = document.querySelector('h1');
// content.addEventListener('click', function () {
//     content.style.backgroundColor = 'red';
//     console.log('i am color red');
// })

// let mouseover = function mouse() {
//     console.log('i am in');
// }
// let content2 = document.querySelector('h2');
// content2.addEventListener('mouseover', mouseover);

// let x = document.getElementById('my-button');
// let y = document.getElementById('hover');
// y.addEventListener("mouseover", myfunction);
// y.addEventListener('mouseout', myfunction2);
// x.addEventListener('click', myfunction3);
// function myfunction() {
//     document.getElementById('effect').innerHTML += "Entering the button" + "<br>";
//     console.log('entering the button');
// }
// function myfunction2() {
//     document.getElementById('effect').innerHTML += "leaving the button" + "<br>";
//     console.log('leaving the button');
// }
// function myfunction3() {
//     document.getElementById('effect').innerHTML += "you clicked on button" + "<br>";
// }
//+= is used to append the data to the effect
//phases of the event-life cycle
//capturing
//Target phase
//bubbling

//Document-HTML-Body-div-button
//usecapture-in ehich phase you want to capture the phase
//by default- addeventlistener will execute in the bubbling phase
//capturing phase - in this phase the event goes from top to the down
//Target Phase - the target phase is when the event reaches the target
//Bubbling - Bubbling phase is when the event bubbles up from the target


//$ the addeventlistener will be called during the bubbling phase, also in the addeventlistener the three parameter is passed
//$ when the third parameter is said to be true then it will invoke the listener to be in capturing phase
// let z = document.getElementById('btn');
// z.addEventListener('click', function () {
//     alert('the mouse is clicked')
// })

//all the three phases capturing ,event target , bubbling-->the bubbling will start from the btn ->div-> body
// document.getElementById('bdy').addEventListener('click', function () {
//     alert('bdy');
// })
// document.getElementById('div').addEventListener('click', function () {
//     alert('div');
// })
// document.getElementById('btn').addEventListener('click', function () {
//     alert('btn');
// })

//$passing the third parameter true to the addeventlistener-since we have the true in the div phase so it will render first in the capturing phase
//In the below code, the body and button are in the bubbling phase (default) while the div is set to capturing phase.
//  When a button is clicked it starts at the top again.When it comes to the body element, it does not run function
// because we are still in the capturing phase.But when it reaches div it runs the function because the third parameter of addEventListener() is “true”. 
// So it has to run in the capturing phase.When it reaches the button it switches from the capturing phase to the target phase and lastly to the bubbling phase.
// It fires the addEventListener which is in default mode.
// So the above code will give an alert msg box showing “div”, then “button” and lastly “body”.
//$code
// document.getElementById('bdy').addEventListener('click', function () {
//     alert('body');
// })
// document.getElementById('div').addEventListener('click', function () {
//     alert('div');
// }, true);

// document.getElementById('btn').addEventListener('click', function () {
//     alert('btn');
// })


//the default action
//prevent default ()-it will help to stop all the default actions
// let links = document.querySelectorAll('a');
// let link3 = links[2];
// link3.addEventListener('click', function (e) {
//     e.preventDefault();
//     console.log('prevented the default action');
// })

//addimg the 100 para
// for (let i = 1; i <= 100; i++) {
//     let newelement = document.createElement('p');
//     newelement.textContent = 'this is para' + i;
//     document.body.appendChild(newelement);
// }
// //optimising a bit
// let myDiv = document.createElement('div');
// for (let i = 1; i <= 100; i++) {
//     let element = document.createElement('p');
//     element.textContent = 'this is para' + i;
//     myDiv.appendChild(element);
// }

//single threading -js is the single threaded language
//processing of one command at a time

//$by this we are creating the new p tag and adding the content to it
// function addPara() {
//     let para = document.createElement('p');
//     para.textContent = 'js is defined';
//     document.body.appendChild(para);
// }

// function appendNewMessage() {
//     let newmessage = document.createElement('p');
//     newmessage.textContent = "going to do my best";
//     document.body.appendChild(newmessage);
// }

// addPara();
// appendNewMessage();
// the nature of the cod ei sthe run to completiion
//js will not execute the multiple function at the same time


//$ EVENT LOOOP
//synchronous- occuring at the same time
//all the asynch code will be executed by= the event loop
//event listener- it is not the synchronous
// in the event loop there are call stack- browser-queue
// read-https://www.geeksforgeeks.org/what-is-an-event-loop-in-javascript/

//$Set time out method
// console.log('message1');
// setTimeout(function () {
//     console.log('message2');
// }, 5000);
// console.log('message3');
//o/p- message1, message3, message2
//there will be the three parts, 
//1st - call stack
//2nd-browser
//3rd-queue
//the message 1 will be go to stack -it will print
//the settomeout function- it will go to stack then go to browser then there it will wait for the 5 sec
//meanwhile the messge 3 will be in the queue and it will go to stack and print
//then the message2 will be printed


//Asynchronous Js
// this is the code which will tell it will happen but don't know when
//$ the below code is the anyschronous
// setTimeout(function () {
//     console.log('third');
// }, 3000)
// function sync() {
//     console.log('first');
// }
// sync();
// console.log('second');
//output-first,second,third
//Ansyc code will be run by the settimeout

//$API- it allows the communication between the two softwares
//$features of the async code-
//clean and concise
//better error handling
//easier debugging

//$Promises-it has two parameter resolve and reject
// let meraPromise = new Promise(function (resolve, reject) {
//     console.log('i am inside promise');
//     resolve(1998);
// })
// console.log('pehla'); 
//o/p-i am inside promise, pehla

//making the promise async
// let promise2 = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log('i am inside the settime out')
//     }, 3000);
//     resolve(233);
// })
// console.log('pehla');
//output-pehla, after 3s- i am inside the settime out
//if we write the promise2 in console then - we will get the fulfilled because of the resolved

//if we use the rejected in the promise then 
// let promise3 = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log('promise3')
//     }, 3000);
//     reject(new Error('new error is there'));
// })
// console.log('dusra');
//if the function will be executed succesffuly then we will get the fulfilled, otherwise we will get the rejected

//whenever we will be writing the async code we will be using most of the time promise
//in the promises we can two method
//then -if we want to work anything on the value then we will use then
//catch-if is generally help to catch the error
let promise1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('text1')
    }, 2000);
    resolve(true);
})
let data = promise1.then(() => {
    let promise2 = new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log('text2');
        }, 3000);
        resolve('promise 2 resolved');
    })
    return promise2;
})
data.then((value) => console.log(value));
//let there are 50 promises that are depended on each other, for that we will not use the :then: for thr 50 times for that
//there is a concept called as the async and await
//$ async and await is the special syntax that is used for the promise
//let there are two promises p1 and p2 , then after completion the one promise then only the second promise can start
//for that we will uuse the await

async function abcd() {
    return 7;
}
//abcd will return the promise because of the async function
//$using the await and async function
async function utility() {
    let delhi = new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve('delhi')
            console.log('delhi')
        }, 5000);
    })
    let bnglr = new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve('bangalore')
            console.log('bangalore')
        }, 6000);
    })

    let d = delhi;
    let b = bnglr;
    return [d, b];
}

//so what is happening in this is  we are getting the o/p simuntaneously or parallely
//but if we don't want like that if we want one output after the other then we will use the await
//$using the await 
async function checkingAwait() {
    let await1 = new Promise(function (reslove, reject) {
        setTimeout(() => {
            reslove('await1');
            console.log('await1');
        }, 6000)
    });
    let await2 = new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve('await2');
            console.log('await2');

        }, 10000)
    })
    let aw1 = await await1;
    let aw2 = await await2;
    return [aw1, aw2];
}

//$Fetch APi
//https://jsonplaceholder.typicode.com/todos/1
// whenever we will be using the fetch mwthod it will always return the promise.
//json= javascript object notation format
//fecthing the detail from the api
//get call
async function fetchingApi() {
    let content = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let data = await content.json();// converted the data in the json format
    console.log(data);

}
fetchingApi();
//fetch api ke output mein hamesha promise rehta h
//$ Post call using the api- that is sending the data
//#POST method


//$closure































