const fs = require('fs');

// // // Читання файлу
// fs.readFile('/Users/rx/fullstack/node/file.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.error('Помилка читання файлу:', err);

//         return;
//     }

//     console.log('Вміст файлу:', data);
// });


// // Читання файлу синхронне
// const myData = fs.readFileSync('/Users/rx/fullstack/node/file2.txt', 'utf8');

// console.log('myData > ', myData);


// Запис у файл
// const content = 'Це нові дані для запису у файл.';

// fs.writeFile('node/output88.txt', content, (err) => {
//     if (err) {
//         console.error('Помилка запису файлу:', err);

//         return;
//     }

//     console.log('Файл успішно записаний!');
// });

// const newContent = '\nMY NEW CONTENT\n';

// // appendFile
// // Створення каталогу
// fs.appendFile('/Users/rx/fullstack/node/file.txt', newContent, (err, data) => {
//     if (err) {
//         console.error('Помилка ', err);

//         return;
//     }

//     console.log('data > ', data);

// });



// Створення каталогу
// fs.rmdir('node/myFiles', (err) => {
//   if (err) {
//     console.error('Помилка створення каталогу:', err);

//     return;
//   }
//   console.log('Каталог успішно ВИДАЛЕНИЙ!');
// });


// fs.unlink('node/output88.txt', (err) => {
//     if (err) {
//         console.error('Помилка видалення ФАЙЛу:', err);

//         return;
//     }

//     console.log('ФАЙЛ успішно ВИДАЛЕНИЙ!');
// });

// fs.rename('node/file.txt', 'node/file2.txt', (err) => {
//     if (err) {
//         console.error('Помилка видалення ФАЙЛу:', err);

//         return;
//     }

//     console.log('ФАЙЛ успішно ПЕРЕЙМЕНОВИНАЙ!');
// });

// fs.copyFile('node/file2.txt', 'node/fileCOPY.txt', (err) => {
//     if (err) {
//         console.error('Помилка видалення ФАЙЛу:', err);

//         return;
//     }

//     console.log('ФАЙЛ успішно COPY!');
// })

// const asyncFunction1 = () => { console.log('1'); };
// const asyncFunction2 = () => { console.log('1'); };
// const asyncFunction3 = () => { console.log('1'); };


// await asyncFunction1();
// await asyncFunction2();
// await asyncFunction3();


// await asyncFunction1();
// await asyncFunction2();
// await asyncFunction3();


// // promises, fetch, timeout, asyncawait...
// const callQueue = [asyncFunction1, asyncFunction2, asyncFunction3];



// // Event loop
// while (true) {
//     process.nextTick();

//     check(callQueue); //  microtasks, macrotasks

//     setImmediate();
// }




// f1
// f2
// f3


// f1()
// f2()
// f3()




// Sync code
function syncFun() {
    console.log('1 Sync Fun');
}

const stream = fs.createReadStream('node/file2.txt');


syncFun();


// Microtasks
Promise.resolve().then(() => {
    console.log('2 Promise Resolve');
});


process.nextTick(() => {
    console.log('3 NextTick');
});


setTimeout(() => {
    console.log('4 TimeOut');
}, 0);


fetch('https://jsonplaceholder.typicode.com/users/1').then(data => {
    console.log('5 FETCH > ');
});


setImmediate(() => {
    console.log('6 SET IMMEDIATE');
});

stream.on('close', () => {
    console.log('7 STREAM CLOSED');
});

stream.close();
