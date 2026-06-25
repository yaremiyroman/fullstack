// // var a, myString;

// // const sum = function (a, b) {
// //     const result = a + b;

// //     return result;
// // };


// // function callMe() {
// //     return sum;
// // }


// // console.log(
// //     callMe()()
// // );



// // (function () {
// //     let x = 123;

// //     console.log('x > ', x);
// // })();



// // (function () {
// //     let x = 555;

// //     console.log('x > ', x);
// // })();




// // function greaterThan(n) {
// //     return function (m) {
// //         return m > n;
// //     };
// // }

// // var greaterThan10 = greaterThan(10);
// // console.log(greaterThan10(11)); // Виводить true




// // function sum(a, b) {
// //     const result = a + b;

// //     return result;
// // };



// // sum(4, 5); // =>  sum(4)(5)



// // function add(a) {
// //     return function (b) {
// //         return function (c) {
// //             return function (d) {
// //                 return a + b + c + d;
// //             }
// //         }
// //     }
// // }

// // console.log(add(4)(5)(1)(1));







// let someVar = 11;

// // console.log('globalVar > ', globalVar);



// const SUPER_GLOBAL_CONST = '123';

// function innerFunc() {
//     let someVar = 55;

//     SUPER_GLOBAL_CONST

//     console.log('someVar > ', someVar);

//     function deepFunc() {

//         SUPER_GLOBAL_CONST
//         console.log('someVar > ', someVar);
//     }


//     function anotherDeepFunc() {

//         SUPER_GLOBAL_CONST
//         console.log('someVar > ', someVar);
//     }

//     deepFunc();
// }

// // // console.log('innerVar > ', innerVar);


// // innerFunc();



// // Hoisting



// // console.log(a);

// // let a = 0;
// // let myString = 1;


// // sum();

// // const sum = function() {
// //     console.log(' >> ');

// //     return null;
// // }




// // function testFunc() {
// //     if (true) {
// //         const example = 45;

// //         console.log(example);
// //     }

// //     console.log(example);
// // }


// // testFunc();

// // function createHead(head) {
// //     return function (tail) {
// //         console.log(head + tail);
// //     };
// // }

// // const superHead = createHead('super');

// // superHead('tailHere');
// // superHead('another tail');




// // function createCounter() {
// //     let counter = 0;

// //     return function () {
// //         counter++;
// //         console.log('counter > ', counter);
// //     }
// // }

// // const myCounter1 = createCounter();

// // myCounter1();
// // myCounter1();
// // myCounter1();
// // myCounter1();

// // const myAnotherCounter = createCounter();

// // myAnotherCounter();
// // myAnotherCounter();
// // myCounter1();
// // myCounter1();
// // myAnotherCounter();


// const myConst = 500;

// const MAX_USERS = 100;



// const name = 'John';

// const isStud = false;

// const isStudent = true;
// const hasBooks = false;

// function doSum(a, b) {
//     console.log('-----');
//     return a + b;
// }

// function readValues() { };




// let nameExample = 'John Smith';

// // correct usage of global scope
// function addPlus(userName) {
//     console.log(userName + '+');
// }

// addPlus(nameExample);
// addPlus(nameExample);

// // another functions uses global scope
// function sayName() {
//     console.log('Name > ', nameExample);

//     {
//         {
//             {

//             }
//         }
//     }
// }

// console.log(nameExample);
// sayName()






// !5 = 1 * 2 * 3 * 4 * 5
// !7 = 1 * 2 * 3 * 4 * 5 * 6 * 7
// !0 = 1
// !1 = 1
// !2 = 1 * 2


function loopFactorial(n) {
    let result = 1;

    if (n === 0 || n === 1) {
        return result;
    }

    for (let i = 1; i <= n; i++) {
        result *= i;
    }

    return result;
}

// console.log('loopFactorial > ', loopFactorial(5));
// console.log('loopFactorial > ', loopFactorial(1));


// !5

function recursiveFactorial(n) {
    // 5
    if (n === 0 || n === 1) {
        return 1;
    }


    return n * recursiveFactorial(n - 1);
}


console.log(recursiveFactorial(5));