//$everything in the javascript happens inside the execution context
//consider a exceution context as a big container
// it has two parts memory component/ variable envirnoment - which includes all the varibale nd the functions and 2nd part-code compoenent or thread of execution
//js is the synchronous single threade language- exceute the one command @ time


//$2.what happens when you run js code
//when we run a code a gloable execution context is created
//memory component-for the variable it  assign undefined
//for the function it will directly stored in the memory space
//here the square2 nd square4 is undefined

//code execution phase-
//then the value of the n is stored in the n that is 2 by replacing thge undefined
//when the function squrae2 is invoked then in code-component it will again create the two blocks- memory  block nd code block

var n = 2;
function square(num) {
    var ans = num * num;
    return num;
}
var square2 = square(n);
var square4 = square(4);
//same happen for the square4 as it will also create the execution context
//once the execution is completed the whole execution context will be deleted


//everything in the js is managed by the call stack
//whenever the new exceution context is created it will move to the stack
//$call stack maintain the order od execution of execution context
//call stack is also known by
//executio context stack
//program stack
//control stack, runtime and machine stack

//$3 Hoisting

//$4.How function work in js and variable environmsnt
var x = 1;
a(); b();// cox of hoisting we are invoking these function
console.log(x);
function a() {
    var x = 10;
    console.log(x);
}

function b() {
    var x = 100;
    console.log(x);
}

//1st the gloabl execution context is created
// so the memory will be created for x, a,b
//x will store undefined
//a and b will be poiunt to the function code
//when we write var x=1,so x from undefined to 1
//
