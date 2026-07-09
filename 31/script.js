// console.log('1');



// setTimeout(() => {
//     console.log('TIMEOUT');
// }, 2000);



// console.log('3');

// console.log('4');


// const queue = [
//     'operation1': {
//         callback: () => {},
//         isReady: true
//     },
//     'operation2': {
//         callback: () => {},
//         isReady: false
//     },
//     'operation3': {
//         callback: () => {},
//         isReady: false
//     },
// ];

// const stack = [];

// // event loop
// while (1) {
//     if (queue.filter(item => item.isReady === true)) {
//         stack.push(queue[index].callback());
//     }
// }

// stack.forEach(operation => operation());

// JIT
// Just in Time compilation




// async callback

// setTimeout(() => {
//     console.log('TIMEOUT 1');
// }, 2000);



// setTimeout(() => {
//     console.log('TIMEOUT 2');
// }, 1000);


// function time(callback, duration = 1234, number = 3) {
//     setTimeout(() => {
//         console.log('TIMEOUT ' + number);

//         callback();
//     }, duration);
// }


// // callback hell
// setTimeout(() => {
//     console.log('TIMEOUT 1');

//     setTimeout(() => {
//         console.log('TIMEOUT 2');

//         setTimeout(() => {
//             console.log('TIMEOUT 3');
//         }, 1500);
//     }, 1000);
// }, 2000);


// time(() =>
//     time(() =>
//         time(console.log('END'), 1000, 1),
//     ), 2000, 2
// );



// let newPromise = new Promise((resolve, reject) => {
//     const a = 1;
//     const b = '35';

//     if (typeof a === 'number' && typeof b === 'number') {
//         resolve(a + b);
//     } else {
//         reject('Error...');
//     }
// });

// // fullfiled
// // pending
// // rejected

// newPromise
//     .then(
//         (response) => {
//             console.log('response > ', response);

//             return response + 100;
//         }
//     )
//     .then(
//         (response2) => {
//             console.log("response2 > ", response2);

//             return response2;
//         }
//     )
//     .catch((reject) => {
//         console.log('reject > ', reject);
//     },)
//     .finally(() => {
//         console.log('finally');
//     });






// const timePromise = new Promise((resolve) => {
//     setTimeout(() => {
//         console.log('TIMEOUT');
//         resolve('1');
//     }, 2000);
// });

// timePromise.then(res => {
//     console.log('res > ', res);
// });





// // // Виконання GET-запиту за допомогою fetch
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => {
//         console.log('response > ', response);

//         return response.json();

//     })
//     .then(json => console.log(json))





// const timePromise = new Promise((resolve) => {
//     setTimeout(() => {
//         console.log('Promise');
//         resolve('7');
//     }, 2000);
// });

// timePromise
//     .then(res => {
//         console.log('Then 1');

//         return fetch(`https://jsonplaceholder.typicode.com/todos/${res}`)
//             .then(response => response.json())
//             .then(json => json)
//     })
//     .then(res => {
//         console.log('Then 2');

//         return res;
//     })
//     .then(res => {
//         console.log('Then 3 > ', res);
//     });



// function delay(time) {
//     console.log('Started > ', time);

//     return new Promise(resolve => setTimeout(() => resolve(), time))
// }


// async function fetchTodos() {
//     await delay(1000);
//     const sum = 1 + 5;

//     await delay(1500);
//     await delay(3000);
// }


// fetchTodos().then(result => console.log('resolved'));










// console.log(1);

// function fn1() {
//     console.log(2);
//     fn2();
//     console.log(3);
// }

// console.log(5);

// setTimeout(() => console.log(6), 1);

// setTimeout(() => console.log(7), 0);

// setTimeout(() => console.log(8), 100);

// function fn2() {
//     console.log(4);
// }

// Promise.resolve().then(() => console.log(9));

// setTimeout(() => console.log(10), 0);

// Promise.resolve().then(() => console.log(11));

// console.log(12);

// fn1();

// console.log(13);







const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';


// GET

// fetch(BASE_URL)
//     .then(response => {
//         // console.log(response, JSON.parse(response.json()));

//         return response.json();
//     })
//     .then(data => console.log('data > ', data));



// https://jsonplaceholder.typicode.com/todos/4


// // POST

// const newTodo = {
//     "userId": 1,
//     "id": 4,
//     "title": "HELLO WORKLD porro tempora",
//     "completed": true
// };

// fetch(
//     BASE_URL,
//     {
//         method: "POST",
//         headers: {
//             'Content-Type': 'application/json', //mime type
//         },
//         body: JSON.stringify(newTodo)
//     }
// )
//     .then(response => {
//         // console.log(response, JSON.parse(response.json()));

//         return response.json();
//     })
//     .then(data => {
//         console.log('data >>> ', data)

//         fetch(BASE_URL)
//             .then(response => {
//                 // console.log(response, JSON.parse(response.json()));

//                 return response.json();
//             })
//             .then(data => console.log('data > ', data));


//         ;
//     });

// // REST API






// // PUT

// const newTodo = {
//     "userId": 1,
//     "id": 4,
//     "title": "HELLO WORKLD porro tempora",
//     "completed": true
// };

// fetch(
//     BASE_URL + '/3',
//     {
//         method: "PUT",
//         headers: {
//             'Content-Type': 'application/json', //mime type
//         },
//         body: JSON.stringify(newTodo)
//     }
// )
//     .then(response => {
//         // console.log(response, JSON.parse(response.json()));

//         return response.json();
//     })
//     .then(data => console.log('data > ', data));



// // PATCH

// const newTodo = {
//     "title": "HELLO WORKLD porro tempora 3",
// };

// fetch(
//     BASE_URL + '/3',
//     {
//         method: "PATCH",
//         headers: {
//             'Content-Type': 'application/json', //mime type
//         },
//         body: JSON.stringify(newTodo)
//     }
// )
//     .then(response => {
//         // console.log(response, JSON.parse(response.json()));

//         return response.json();
//     })
//     .then(data => console.log('data > ', data));



// // DELETE
fetch(
    BASE_URL + 'zxcfzdfg/3',
    {
        method: "DELETE",
    }
)
    .then(response => {
        console.log(response.ok, response.status);

        return response.json();


        // 2xx

        // 4xx
        // 5xx
    })
    .then(data => console.log('data > ', data));


// 1xx - info
// 2xx - OK 
// 3xx - redirect
// 4xx - client error
// 5xx - server error


// OPTIONS
// HEAD
