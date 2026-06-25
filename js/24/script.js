// const emptyArray = [];

// console.log('emptyArray > ', emptyArray);

// const emptyArraySize = emptyArray.length;

// console.log('emptyArraySize > ', emptyArraySize);




// const numberArray = [1, 2, 3, 4];

// const mixedArray = [4, 'hello', null, false];

// console.log('mixedArray >', mixedArray);
// console.log('mixedArray length >', mixedArray.length);

//                     0   1    2     3
// const spanedArray = [9, 12, null, 14];

// // console.log('spanedArray > ', spanedArray);

// const firstElement = spanedArray[0];


// spanedArray[1 + 2] = 'NEW VALUE';

// const thirdElement = spanedArray[3];

// console.log('thirdElement > ', thirdElement);




// const newArray = [];

// for (let i = 0; i < 100; i++) {
//     newArray[i] = i;
// }

// console.log('newArray > ', newArray);


// const spanedArray = [9, 12, null, 14];

// spanedArray['something'] = 'value';

// console.log('spanedArray > ', spanedArray);


// const spanedArray = [9, 12, null, 14];


// for (let i = 0; i < spanedArray.length; i++) {
//     console.log(spanedArray[i]);
// }



// const moreNumbers = new Array(3).fill(Math.random()); // Масив з трьома пустими слотами

// console.log('moreNumbers > ', moreNumbers);




// const spanedArray = [9, 12, 13, 14];

// // delete spanedArray[2];
// spanedArray[2] = null;

// console.log('spanedArray > ', spanedArray);



// console.log(typeof spanedArray);

// console.log(Array.isArray(spanedArray));

// 'some string'
// ['s', 'o', 'm' ...];

// const elements = ['Вогонь', 'Повітря', 'Вода'];

// const joinedElements = elements.join();

// console.log(joinedElements); // "Вогонь - Повітря - Вода"


// const splittedElements = joinedElements.split('=');

// console.log(splittedElements);



// const numbers = [1, 2, 3];

// console.log(numbers.reverse()); // [3, 2, 1]


// const numbers = [3, 1, 2];
// console.log(numbers.sort()); // [1, 2, 3]


// Bubble sorting




// const alpha = ['a', 'b', 'c'];
// const numeric = [1, 2, 3];
// const newArr = [false, true];

// const alphaNumeric = alpha.concat(numeric, newArr, [1,2,3]);


// console.log(alphaNumeric); // ['a', 'b', 'c', 1, 2, 3]



// const first = [1, 2];
// const second = first.concat();

// first[2] = '2';

// console.log(first);
// console.log(second);

//               0  1  2  3  4  
// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers.slice(1, 4)); // [2, 3]
// console.log(numbers); // [2, 3]



// const splicedNumbers = [1, 2, 4, 9, 8, 7];

// splicedNumbers.splice(2, 3, 3, 10, 100); // Додає 3 перед індексом 2

// console.log(splicedNumbers); // [1, 2, 3, 4]



// const mixedArray = [4, 'hello', 'hi', false];


// mixedArray.push('index 4');
// mixedArray.push('index 5');
// mixedArray.push('index 6', 'index new');

// mixedArray.pop();
// mixedArray.pop();
// mixedArray.pop();


// mixedArray.unshift('unshifted value');
// mixedArray.unshift('zero');

// mixedArray.shift();
// mixedArray.shift();
// mixedArray.shift();
// mixedArray.shift();


// console.log('mixedArray > ', mixedArray);





// [4, 'hello', 'hi', false]




const spanedArray = [9, 12, false, 14];

// for (let i = 0; i < spanedArray.length; i++) {
//     console.log(spanedArray[i]);
// }

// spanedArray.forEach((item, index, basicArr) => {
//     basicArr[1] = 'yyy';
//     console.log('item > ', item);
//     console.log('index > ', index);
//     console.log('basicArr > ', basicArr);
// });


// spanedArray.forEach(item => console.log('item > ', item));



// const numbers = [1, 2, 3, 8, 10];
// // map

// const mappedNumber = numbers.map((item, index) => {
//     console.log('----');
//     console.log(item);

//     return item * 2;
// });

// console.log(mappedNumber);



// const numbers = [11, 3, 52, 23, 14, 5];

// const filteredNumbers = numbers.filter(item => {
//     return item > 10;
// });

// console.log('filteredNumbers ', filteredNumbers);




// const numbers = [11, 3, 52, 23, 14, 5];

// const isAllPositive = numbers.every(item => {
//     return item > 0;
// });

// console.log('isAllPositive > ', isAllPositive);





// const numbers = [11, 3, -52, 23, 14, 5];

// const isSomeNegative = numbers.some(item => {
//     return item < 0;
// });

// console.log('isSomeNegative > ', isSomeNegative);




// const numbers = [11, 3, 52, 23, 14, 5];


// const sumAll = numbers.reduce(
//     (accum, item) => {
//         return accum + item
//     },
//     0
// );

// console.log('sumAll > ', sumAll);





// let sumForEach = 0;

// numbers.forEach(
//     (item) => {
//         sumForEach += item;
//     }
// );

// console.log('sumForEach > ', sumForEach);



// const numbers = [11, 3, 52, 23, 14, 5];


// const sumAll = numbers.reduce(
//     (accum, item) => {
//         return accum + item
//     },
//     0
// );

// console.log('sumAll > ', sumAll);



// const animals = ['панда', 'коала', 'броненосець', 'коала'];

// // if (animals.indexOf('коала') === -1) {
// //     console.log(' NO THIS VALUE ');
// // }

// console.log(animals.indexOf('коала')); // 1
// console.log(animals.lastIndexOf('коала')); // 3



// KaiOS
// AndroidTV



// const array = [1, 2, 3, 4, 5, 2];

// // Перевіряємо, чи масив містить число 2
// console.log(array.includes(22)); // true




// const numbers = [1, 2, 3, 4];

// const found = numbers.find(number => number > 2);

// console.log(found); // 3


// const numbers = [1, 6, 3, 8, 4, 2, 7];

// const processedNumbers = numbers
//     .filter(number => number > 5)  // [6, 8, 7].sort()
//     .sort() // [ 6, 7, 8].map
//     .map(number => number * 2); // [12, 14, 16]

// console.log(processedNumbers);





// Locale datetime
// 10.01.26;

// January 10, 2026



// 10.01.26
// 10.01.2026
// 10 Січня 2026
// 10 січня 2026


// timestamp

// 1.01.1970

// 10.01.25  10:05:30 = > 13425202643346
// 10.01.26  10:05:30 = > 13425332643346



// const now = new Date();
// console.log(' now > ', now);

// const sometime = new Date('10.01.26');
// console.log(' sometime > ', sometime);

// const ms = new Date(1000);
// console.log('ms > ', ms);



// function SomeFun() {
//     this.someProp = 4;
// }

// const myObj = new SomeFun();
// console.log('myObj > ', myObj);




// const detailedDate2 = new Date(2021, 0, 1, 10, 30, 0); // 1 січня 2021, 10:30:00
// console.log('Детальна дата1:', detailedDate2);

// // for (let key in detailedDate2) {
// //     console.log('key > ', key);
// // }


// const myNumber = new Number('5');

// console.log('myNumber > ', myNumber);


// console.log(performance.now());


// // console.time та console.timeEnd
// console.time('Вимірювання');

// for (let i = 0; i < 1000000; i++) { }

// console.timeEnd('Вимірювання');


// // console.time та console.timeEnd
// console.time('Вимірювання VAR');

// for (var i = 0; i < 1000000; i++) { }

// console.timeEnd('Вимірювання VAR');


// const sum = () => a + b;



// DOM
// Document Object Model

// BOM
// Browser Object Model
