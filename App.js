// Advance JS(ES6)
// chapter 1(Var, let,const)


//     Global Scope:-
// const FirstName = "Arsh"
// console.log(FirstName)
// {
//     const FirstName = "Amirali"
//     console.log(FirstName)
// }


// Function Scope: -
//     function abc() {
//         const a = 10
//         console.log(a)
//     }
// abc()

// { Hositing }
// In JavaScript, hoisting refers to the built -in behavior of
// the language through which declarations of functions, variables, and classes
// are moved to the top of their scope – all before code execution.
// JS ma hoisting 2 cheezo per hoti hai.
// 1) var keyword se bana howa variable,
// 2) keyword function se bana howa function per hoti hai.


//     var
// console.log(num)
// var num = 20
// Result: - undefined


// function
//     abc()
// function abc() {
//     console.log('hello user')
// }
// Result = hello user


//      let
// console.log(num);
// let num = 50
// Error: - Cannot not access "num" before initialization.


//     constant
// console.log(num);
// const num = 50
// Error: - Cannot not access "num" before initialization.


//     fun()
// var fun = function () {
//     console.log("Hello User")
// }
// Error: - fun is not a function.


// console.log(fun)
// var fun=function (){
// console.log("Hello User")
// }
// Result:- undefined.