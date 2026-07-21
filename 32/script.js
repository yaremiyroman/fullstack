'use strict';

// function demo(param = 'value') {
//     var someVar = 10;

// console.log(someVar);
// }

// demo();

// anotherVar = 10;

// async await

// es8 es9 es 1135


// spread

// const firstArr = [];
// const secondArr = [11, 33, 55];


// const newArray = [...firstArr, ...secondArr, 9, ...[5, 6]];

// // console.log('newArray > ', newArray);




// const user = { name: 'John', secondName: 'Smith' };
// const data = { age: 77, status: 'student' };
// const userUpdated = { name: 'John', secondName: 'Hightower' };

// // const userProfile = Object.assign({}, user, data);
// const userProfile = {
//     ...user,
//     ...data,
//     transport: true,
//     mail: 'user@mail',
//     phone: +380123456789,
//     ...userUpdated
// };

// // console.log('userProfile > ', userProfile);


// const incomingUser = userProfile;


// console.log('incomingUser > ', incomingUser);


// // const userName = incomingUser.name;
// // const secondName = incomingUser.secondName;



// const { name: firstName, secondName, ...restProps } = incomingUser;

// console.log(firstName, secondName);
// console.log(restProps);





// function sumAll(main, secondary, ...operands) {
//     console.log(' operands >', operands);

//     return main + secondary +
//         operands.reduce((accum, operand) => accum + operand, 0);
// }


// console.log(sumAll(4, 5, 6));



// const myArray = ['one', 'two', 'three', 'dgfds', 'sdfgdsg'];


// const [a, , c, ...others] = myArray;

// console.log('a > ', a);
// console.log('b > ');
// console.log('c > ', c);
// console.log('others > ', others);


// function displayStudentInfo({ name, age, ...dataRest }) {
//     console.log(`Name: ${options.name}, Age: ${options.age}`);
// }

// displayStudentInfo({
//     name: 'Alex',
//     age: 22,
//     asdfgsag: 4
// });
// Виведе: "Name: Alex, Age: 22"



// function* numberGenerator() {
//     yield 12;
//     yield 22;
//     yield 33;

//     return 'some result';
// }



// const gen = numberGenerator();


// console.log(gen.next());
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next());



// const paragraphs = document.querySelectorAll('.par');

// console.log('paragraphs > ', paragraphs);
// console.log('paragraphs > ', paragraphs.length);

// paragraphs.forEach(par => console.log(par));


// for of 





// const collection = {
//     0: {
//         element: 'par1',
//         someData: 'someValue',
//     },
//     1: {
//         element: 'par2',
//         someData: 'someValue',
//     },
//     2: {
//         element: 'par3',
//         someData: 'someValue',
//     },
//     3: {
//         element: 'par4',
//         someData: 'someValue',
//     },
// };


// ['par1', 'par2', 'par3', 'par4']



// const nonIterableObject = {
//     a: [1, 24, 53425, 56, 745, 7, 45687, 4568, 546, 854],
//     b: 'someData',
//     c: true,
//     d: 'string'
// };




// [nonIterableObject].forEach(prop => {
//     console.log(prop)
//     if (typeof prop === 'object' && Array.isArray(prop)) {
//         console.log('prop > ', prop);

//         prop.forEach(prop => console.log(prop));
//     }
// });




const nonIterableObject = {
    a: [1, 24, 53425, 56, 745, 7, 45687, 4568, 546, 854],
    b: 'someData',
    c: true,
    d: 'string'
};



// nonIterableObject['method'] = () => console.log('1');

// nonIterableObject[Symbol.iterator] = function () {
//     const keys = Object.keys(this);
//     let arrayToIterate = null;

//     keys.forEach((key) => {
//         if (Array.isArray(this[key])) {
//             arrayToIterate = this[key];
//         }
//     });

//     let index = 0;

//     return {
//         next: () => {
//             if (index < arrayToIterate.length) {
//                 return {
//                     value: arrayToIterate[index++],
//                     done: false
//                 }
//             } else {
//                 return {
//                     done: true
//                 }
//             }
//         }
//     };
// };

// for (let item of nonIterableObject) {
//     console.log('item > ', item);
// }

// // console.log('nonIterableObject ?> ', nonIterableObject);








// const user = {
//     name: 'Олексій',
//     address: {
//         street: 'Шевченка',
//         city: 'Lviv'
//     }
// };

// const city = user && user.address && user.address.city
//     ? user.address.city
//     : 'NO CITY';


// const city = user?.address?.city ?? 'NO CITY';




// console.log('city > ', city);










// // Використання оператора необов'язкового ланцюжка
// const safeStreet = user?.address?.street ?? 'Вулиця не вказана';

// console.log(street); // 'Шевченка'
// console.log(safeStreet); // 'Шевченка'


// const API_BASE_URL = 'https://www.omdbapi.com/?apikey=8a313b38&i=tt3896198';
// const movieSearch = document.getElementById('movieSearch');
// const movieList = document.getElementById('movieList');



// function debounce(fn, delay) {
//     let timeoutID = null;

//     return function (...args) {
//         if (timeoutID) clearTimeout(timeoutID);

//         timeoutID = setTimeout(() => fn.apply(this, args), delay);
//     };
// }


// async function searchBy(title = '') {
//     try {
//         const response = await fetch(`${API_BASE_URL}&s=${title}`);
//         const data = await response.json();

//         renderMovies(data);
//     } catch (error) {
//         console.error('Fetch failed: ', error.message);
//     }
// }

// function renderMovies(movies) {
//     clearSearch();

//     console.log(movies.Search);

//     movies.Search.forEach(movie => {
//         const movieItem = document.createElement('div');
//         movieItem.className = 'movie-item';

//         movieItem.innerHTML = `
//             <h2>${movie.Title}</h2>
//             <img src="${movie.Poster}" alt="${movie.Title}" />
//         `;

//         movieList.append(movieItem);
//     });
// }

// function clearSearch() {
//     movieList.innerHTML = '';
// }

// const debouncedSearchBy = debounce(searchBy, 1000);

// movieSearch.addEventListener('input', (event) => {
//     // console.log('val > ', event.target.value);
//     if (event.target.value.length >= 3) {
//         debouncedSearchBy(event.target.value);
//     }

//     if (!event.target.value.length) {
//         clearSearch();
//     }
// });



// // Init
// clearSearch();

alert('1');

async function getData(segment) {
  const baseUrl = 'https://jsonplaceholder.typicode.com';
  try {
    const response = await fetch(`${baseUrl}${segment}`);
    if (!response.ok) {
      return response.status;
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    return error.message;
  }
}

async function postData(segment, data) {
  const baseUrl = 'https://jsonplaceholder.typicode.com';
  try {
    const response = await fetch(`${baseUrl}${segment}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    if (!response.ok) {
      return `Error: ${response.status}`;
    }
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
    return error.message;
  }
}

async function putData(id, data) {
  const baseUrl = 'https://jsonplaceholder.typicode.com/posts';
  try {
    const response = await fetch(`${baseUrl}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    if (!response.ok) {
      return `Error: ${response.status}`;
    }
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
    return error.message;
  }
}

async function patchData(id, data) {
  const baseUrl = 'https://jsonplaceholder.typicode.com/posts';
  try {
    const response = await fetch(`${baseUrl}/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    if (!response.ok) {
      return `Error: ${response.status}`;
    }
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
    return error.message;
  }
}

async function deleteData(id) {
  const baseUrl = 'https://jsonplaceholder.typicode.com/posts';
  try {
    const response = await fetch(`${baseUrl}/${id}`, {
      method: 'DELETE'
    });
    if (!response.ok) {
      console.log(`Failed to delete post with id ${id}. Status: ${response.status}`);
      return response.status;
    }
    console.log(`Post with id ${id} has been successfully deleted.`);
    return true;
  } catch (error) {
    console.error(`Error during deletion: ${error.message}`);
    return error.message;
  }
}


getData('/posts/1');

postData('/posts', {
  title: 'Мій новий пост',
  body: 'Перевірка запиту POST',
  userId: 1
});

putData(1, {
  title: 'Оновлений заголовок',
  body: 'Новий текст для старого поста',
  userId: 1
});

patchData(1, {
  title: 'Частково оновлений заголовок через PATCH'
});

deleteData(1);

