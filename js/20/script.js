// const myString = '123';
// const myNumber = 13;

// const transformedNumber = +myString;
// console.log('transformedNumber > ', transformedNumber);

// const transformedString = '' + 13;
// console.log('transformedString > ', transformedString);


// Number
// Number()


// const userAge = 20;

// if (userAge < 18) {
//     console.log('Юзер НЕповнолітній');
// } else {
//     console.log('Юзер повнолітній');
// }



// switch (expression) {
//     case value1:
//         // Виконується, якщо expression дорівнює value1
//         break;
//     case value2:
//         // Виконується, якщо expression дорівнює value2
//         break;
//     default:
//     // Виконується, якщо жоден з вищезазначених випадків не відбувся
// }


// const day = 4;

// const day = +prompt('ВВедіть день тижня:');
// console.log('day > ', day);

// switch (day) {
//     case 1: {
//         console.log('----------');
//         console.log("Понеділок");
//         console.log('----------');
//         break;
//     }
//     case 2:
//         console.log("Вівторок");
//         break;
//     case 3:
//         console.log("Середа");
//         break;
//     case 4:
//     case 5:
//     case 6:
//     case 7: {
//         console.log('----------');
//         console.log("Будь який інший день");
//         console.log('----------');
//         break;
//     }
//     default:
//         console.log("Інший день тижня");
// }



// if (condition) { // true | false

// }

// const age = +prompt('ВВедіть ваш рік:');
// const gender = 'female';

// const canVote = (age > 18 && age < 100) ? 'так' : 'ні';

// console.log('canVote > ', canVote);


// if (age > 18 && age < 100) {
//     console.log('так');
// } else {
//     console.log('ні');
// }


// const marks = 85;

// const grade = marks >= 90 ? 'A' :
//     marks >= 80 ? 'B' :
//         marks >= 70 ? 'C' :
//             marks >= 60 ? 'D' : 'F';

// console.log("Оцінка: " + grade); // Виведе: "Оцінка: B"



// let a = 10, b = 100, c;

// console.log(a, b, c);


// let a = 10;
// let b = 100;
// let c = 0;

// let a = 10, b = 100, c = 0;

// console.log(a, b, c);



// const iterations = 10;


// // з лічильником
// for (let i = 0; i < iterations; i++) {
//     console.log('i > ', i);
// }

// з передумовою
// let counter = 0;

// while (counter < 9) {
//     console.log('counter > ', counter);

//     counter++;
// }

// з постумовою

// let counter = 4;

// do {
//     console.log('counter > ', counter);

//     counter++;
// } while (counter < 9);



// for (let i = 0; i < 10; i++) {
//     if (i >= 6 && i <= 8) {
//         continue;
//     }

//     console.log(i);
// }


// // function declaration
// function sum(a, b) {
//     console.log('---');
//     return a + b;
// }

// // console.log(sum(4, 5));

// console.log(sum);

// const sumNew = sum;

// const result = sumNew(4, 5);

// console.log('result > ', result);




// function Expression

// const sum = function (a, b) {
//     return a + b;
// };

// sum();


// const result = sum(4, 5);

// console.log('result > ', result);



// let myFutureFunc = null;

// const operation = prompt('Яку операцію ви хочете створити?'); // + | -


// if (operation === '+') {
//     myFutureFunc = function (a, b) {
//         return a + b;
//     }
// } else {
//     myFutureFunc = function (a, b) {
//         return a - b;
//     }
// }

// console.log(myFutureFunc(4, 5));



// function sum(a, b = 100) {
//     // console.log('a > ', a);
//     // console.log('b > ', b);

//     // console.log(arguments);
//     // console.log(arguments.length);

//     for (let i = 0; i < arguments.length; i++) {
//         console.log(arguments[i]);
//     }

//     const result = a + b;

//     return result;
// }

// const result = sum(4, 6, 64, 26,7,8,9,);

// console.log('result > ', result);




// function sayHello() {
//     console.log('Hello Hello!');
// }

// function sum(a, b) {
//     sayHello();

//     return a + b;
// }



// const result = sum(4, 5);

// console.log('result > ', result);








// function sayHello(name) {
//     console.log('Hello Hello! ' + name);
// }

// function sum(a, b, myFunc) {
//     const total = a + b;

//     if (typeof b === 'number') {
//         myFunc();
//     }

//     return total;
// }



// const result = sum(4, 5, function() {
//     console.log(' I am Anon');
// });

// console.log('result > ', result);






// setTimeout(


//     function () {
//         alert('I am');
//     },


//     3000



// );




// function washDishes(callback) {
//     console.log('Початок миття посуду.');

//     setTimeout(() => {
//         callback();
//     }, 3000);
// }

// washDishes(function () {
//     console.log('Посуд вимито!');
// });




// const myNumber = 12;
// const myString = 'Hello';
// const isMorning = false;



const student = {
    name: 'John',
    secondName: 'Smith',
    age: 21,
    sayHello: function () {
        console.log('Hello !!!');
    },
    sayMyData: function () {
        console.log('Name: ' + this.name);
        console.log('Second Name: ' + this.secondName);
        console.log('Age: ' + this.age);
        this.sayHello();
    }
};

// console.log(student);
// console.log(student.name); // dot notation
// console.log(student.secondName); // dot notation
// console.log(student.age);


student.sayMyData();
