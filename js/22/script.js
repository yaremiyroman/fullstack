// // // // throw new Error("Вік має бути 18 або більше");


// // // function checkAge(age) {
// // //     try {
// // //         if (age < 18) {
// // //             throw new Error("Вік має бути 18 або більше");
// // //         }
// // //     } catch (error) {
// // //         console.log(error.message);
// // //     } finally {
// // //         console.log('finfally section');
// // //     }

// // //     console.log("Вік підтверджено");
// // // }

// // // // Виклик функції без try...catch для демонстрації. Увага: це призведе до зупинки скрипта, якщо вік менше 18.
// // // checkAge(16); // Генерує помилку: "Вік має бути 18 або більше"

// // // console.log('!!!');




// // // function double(x) {
// // //     return x * x;
// // // }




// // // const arrowDouble = x => x * x;



// // // function sum(a, b) {
// // //     return a + b;
// // // }

// // // const arrowSum = (a, b) => a + b;




// // // const sayName = () => console.log('Hello Name!');


// // // sayName();



// // // function sum(a, b) {
// // //     console.log('---------');
// // //     console.log('my SUM function');

// // //     return a + b;
// // // }

// // // sum(4, 5);


// // // const arrowSum = (a, b) => {
// // //     console.log('---------');
// // //     console.log('my SUM function');

// // //     console.log(a + b);
// // // };

// // // arrowSum(3, 4);

// // // const result = arrowSum(3, 4);

// // // console.log('result > ', result);



// // // function getObject() {
// // //     return {
// // //         name: 'John',
// // //         secondName: 'SMith'
// // //     };
// // // }

// // // console.log(getObject());

// // // const arrowGetObject = () => ({
// // //     name: 'John1',
// // //     secondName: 'SMith'
// // // });

// // // console.log(arrowGetObject());



// // // () => console.log('Hello!')


// // // function someFunc() {
// // //     // ...
// // // }



// // // setTimeout(() => console.log('I am callback'), 2000);

// // // setTimeout(() => console.log('I am callback'), 2000);

// // // "use strict";

// // // var num = 15; // Змінній потрібно явно присвоїти значення.

// // // function showNum() {
// // //     let message = "Number: " + num; // Помилка, якщо використовувати неоголошену змінну.
// // //     console.log(message);
// // // }

// // // showNum();



// // // number
// // // string
// // // ...

// // // Object => Array, Map, Set, Collection



// // // let myNumber = 15;
// // // let myString = 'Hello, World';

// // // let myNewNumber = myNumber;

// // // myNumber = 100;
// // // myNewNumber = 1000;

// // // console.log('myNumber > ', myNumber);
// // // console.log('myNewNumber > ', myNewNumber);

// // // const function = 123;


// // // const simpleNumber = 100;
// // // // const *simpleNumber = 8x12435423;



// // // const myUser = {
// // //     name: 'John',
// // //     age: 55,
// // //     data: {
// // //         pass: 'FN173542',
// // //         country: 'Ukraine',
// // //         averageScore: 11,
// // //     }
// // // };


// // // const anotherUser = myUser;

// // // myUser.name = 'New Name';

// // // console.log('myUser > ', myUser);
// // // console.log('anotherUser > ', anotherUser);


// // // CRUD


// // // Update
// // // Delete

// // // Create
// // // const myUser = {
// // //     name: 'John',
// // //     age: 55,
// // //     simpleHi: () => console.log('Hi!')
// // // };

// // // console.log('myUser > ', myUser);

// // // myUser.color = 'black';

// // // console.log('myUser > ', myUser);





// // // const anotherUser = {};



// // // anotherUser.name = 'Trevor';
// // // anotherUser.someProperty = 'Lorem Ipsum';
// // // anotherUser.age = 101;
// // // anotherUser.myNewMethod = function () {
// // //     console.log('Hello Hello!');
// // // }
// // // anotherUser.anotherMethod = () => console.log('Arrow Func');

// // // console.log('anotherUser > ', anotherUser);



// // // Read
// // // const myUser = {
// // //     name: 'John',
// // //     age: 55,
// // //     simpleHi: () => console.log('Hi!'),
// // //     data: {
// // //         Jan: 1,
// // //         Feb: 2,
// // //         Nov: 11,
// // //         Dec: {
// // //             fullName: 'december',
// // //             number: 12
// // //         }
// // //     }
// // // };

// // // console.log(myUser.name);
// // // console.log(myUser.age);

// // // myUser.simpleHi();


// // // console.log(myUser.data.Feb);
// // // console.log(myUser.data.Dec.fullName);


// // // // Update
// // // console.log(myUser.age);
// // // myUser.age = 100;
// // // console.log(myUser.age);


// // // // Delete
// // // delete myUser.age;
// // // delete myUser.simpleHi;
// // // delete myUser.data;
// // // delete myUser.name;
// // // console.log(myUser);



// // const myUser = {
// //     name: 'John',
// //     age: 55,
// //     simpleHi: () => console.log('Hi!'),
// //     data: {
// //         Jan: 1,
// //         Feb: 2,
// //         Nov: 11,
// //         Dec: {
// //             fullName: 'december',
// //             number: 12
// //         }
// //     }
// // };


// // // console.log(myUser.age);




// // // const myKeyName = 'age';

// // // console.log(myUser[myKeyName]);



// // // console.log('myUser > ', myUser);

// // // for in

// // // for (let key in myUser) {
// // //     console.log('key > ', key);
// // //     console.log('value > ', myUser[key]);
// // // }


// // // const myVar = 'Hello, world';

// // // function sum(a, b) {
// // //     const anotherVar = 55;

// // //     console.log(anotherVar);
// // //     console.log(myVar);
// // //     console.log(this);

// // //     console.log(a + b);
// // // }

// // // sum(4, 5);



// const someObject = {
//     a: 10,
//     b: 20,
//     sum: function (message, goodbye) {
//         console.log(message);
//         console.log(this.a + this.b);
//         console.log(goodbye);
//     }
// };

// someObject.sum('hi hello', 'goodbye');


// console.log('-------------');
// // console.log(someObject.sum);





// // const mySum = function () {
// //     // this === window
// //     console.log(this.a + this.b);
// // };






// const mySum = someObject.sum;

// // // mySum();


// const anotherObject = {
//     a: 2,
//     b: 4,
// };

// mySum.call(anotherObject, 'New Message', 'another goodbye');

// mySum.apply(anotherObject, ['New Message', 'another goodbye']);


// const bindedSum = mySum.bind(anotherObject);

// bindedSum('message1', 'messag2');


// const myUser = {
//     name: 'John',
//     age: 55,
//     data: {
//         pass: 'FN173542',
//         country: 'Ukraine',
//         averageScore: 11,
//     }
// };


// for (let key in myUser) {
//     console.log('key > ', key);
// }


// const allKeys = Object.keys(myUser);
// console.log('allKeys > ', allKeys);

// for (let i = 0; i < allKeys.length; i++) {
//     console.log(allKeys[i]);
// }


// const allValues = Object.values(myUser);
// console.log('allValues > ', allValues);


// const allpairs = Object.entries(myUser);
// console.log('allpairs > ', allpairs);


// const myUser = {
//     name: 'John',
//     age: 55,
//     data: {
//         pass: 'FN173542',
//         country: 'Ukraine',
//         averageScore: 11,
//     }
// };

// console.log(myUser.hasOwnProperty('hello'));


// const myUser2 = myUser;
// myUser2.age = 101;
// console.log('myUser > ', myUser);

// const myBrandNewObject = Object.assign({}, myUser);
// const myBrandNewObject = Object.assign(
//     {
//         newKey: 'new value',
//     },
//     myUser,
//     {
//         anotherKey: 'val val',
//         age: 999
//     }
// );

// console.log(myBrandNewObject);
// console.log(myUser);

// myBrandNewObject.



// const myUser = {
//     name: 'John',
//     age: 55,
// };


// myUser.age;


// const descriptors = Object.getOwnPropertyDescriptors(myUser);
// const descriptor = Object.getOwnPropertyDescriptor(myUser, "name");

// console.log('descriptor > ', descriptor);




const myUser = {
    name: 'John',
    age: 55,
};

// myUser.secondName = 'Прізвище';

Object.defineProperty(myUser, "secondName", {
    configurable: false,
    enumerable: false,
    value: "SECOND NAME",
    writable: false,
});

myUser.secondName = 'New Second Name';

// Object.defineProperty(myUser, "secondName", {
//     enumerable: true,
// });

for (let key in myUser) {
    console.log('key > ', key);
}

console.log(myUser.secondName);