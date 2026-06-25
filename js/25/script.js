window.innerHeight
window.innerWidth

window.pageXOffset
window.pageYOffset



var someVar = 14;


// setTimeout(() => {
//     console.log('SOME DATA');
// }, 10);



// setInterval(() => {
//     console.log('interval');
// }, 1000);



// alert('1');
// window.alert('1');

// const someInput = prompt('Give me something', 'default value');

// const isCorrect = confirm('Підтверди це!');
// console.log('isCorrect > ', isCorrect);


// open('https://www.google.com');

// function getCookie(name) {
//     const cookies = document.cookie.split(';');

//     for (let i = 0; i < cookies.length; i++) {
//         const cookie = cookies[i].trim();

//         if (cookie.indexOf(name + '=') === 0) {
//             return cookie.substring(name.length + 1);
//         }
//     }

//     return "";
// }



// console.log(getCookie("AEC"));






// function setCookie(name, value, days) {
//     const date = new Date();

//     date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);

//     const expires = `expires=${date.toUTCString()}`;

//     document.cookie = `${name}=${value}; ${expires} path=/`;
// }

// const myKey = 'myStorage';
// const someData = 'someData';

// localStorage.setItem(myKey, someData);
// const readData = localStorage.getItem(myKey, someData);

// console.log('readData > ', readData);

// localStorage.removeItem(myKey);

// localStorage.clear();



// const testArray = [1, 2, 3, 4, 5];

// localStorage.setItem('array', JSON.stringify(testArray));

// const readArray = localStorage.getItem('array');

// console.log('readArray > ', JSON.parse(readArray));





// window
// window.document => DOM




// window.navigator => BOM



// Local
// en-US

// navigator.userAgent
// navigator.platform
// navigator.language

// navigator.geolocation.getCurrentPosition((position) => {
//     const coordinates = position.coords;

//     console.log('coordinates > ', coordinates);
// });




// window.screen => BOM


// console.log(screen.width);
// console.log(screen.height);
// console.log(screen.availWidth);
// console.log(screen.availHeight);
// console.log(screen.orientation.type);



// window.location => BOM

// console.log(location.href);
// console.log(location.hostname);
// console.log(location.pathname);
// console.log(location.search);
// location.assign('https://www.google.com');


// window.history => BOM

// history.back()
// history.forward()