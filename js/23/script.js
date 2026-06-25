// const a = 5;
// const mystrin = ' my string';


// const myArray = [3, 4, 5];

// const user = {
//     name: 'John',
//     age: 333,
//     sayName: function () {
//         console.log(this.john);
//     }
// };

// // for (let key in user) {
// //     console.log('key > ', key);
// // }


// const myMap = new Map();



// // CRUD

// myMap.set('name', 'John');
// myMap.set(55, 'John 5');
// myMap.set(null, 'John 5');
// myMap.set(null, 'John 54');
// myMap.set(55, 'John 58');

// const emptyObject = {
//     some: 'Value',
// };

// myMap.set(emptyObject, 'OBJ');


// myMap.set(55, 'NEW VALUE');

// const readValue = myMap.get(55);
// myMap.delete(55);

// console.log(myMap);
// console.log('readValue > ', readValue);


// const mapSize = myMap.size;
// console.log('mapSize > ', mapSize);




// const cityCode = new Map();

// cityCode.set('Kyiv', '044');
// cityCode.set('Mykolaiv', '0512');

// console.log('cityCode > ', cityCode);


// const objCityCodes = {
//     'Kyiv': '044',
//     'Mykolaiv': '0512',
// }


// const cacheMap = new Map();
// cacheMap.set('result1', 'RESULT1');


// const sum = (a, b) => a + b;

// const arguments1 = [3, 5];
// const result1 = sum(...arguments1);

// cacheMap.set(arguments1, result1);

// cacheMap.get(arguments1);



// Set

// const arrayHello = [1, 4, 5, 6, 5, 5, 5, 5, 5, {}];
// console.log('arrayHello > ', arrayHello);


// const myNewSet = new Set();


// myNewSet.add('1');
// myNewSet.add(45);
// myNewSet.add({});
// myNewSet.add(45);


// const setSize = myNewSet.size;

// const contains45 = myNewSet.has(45);

// console.log('myNewSet > ', myNewSet);
// console.log('setSize > ', setSize);
// console.log('contains45 > ', contains45);


// for (let value of myNewSet) {
//     console.log('value > ', value);
// }



// const testArr = [4, 5, 6, 7, 8, 9, 9];


// for (let value of testArr) {
//     console.log('value > ', value);
// }



// function a () {}
// function b () {
//     a();
// }
// function c () {
//     b();
// }

// c();




// function a () {}
// function b () {
//     return a;
// }
// function c () {
//     return b()();
// }

// c();

// // f(x) = y;

// OOP

// C
// C++
// LISP

// PHP



// Prototype OOP
// Class OOP



// Поліморфізм

// Абстракція

// Успадкування, Інкапусляція,




// const cat = {
//     legs: 4,
//     sayMeow: function () {
//         alert('meow');
//     }
// };

// const catParent = {
//     breed: 'sphinx',
//     color: 'red',
//     name: 'Son',
//     __proto__: cat,
// };

// const anotherCatParent = {
//     breed: 'sphinx',
//     color: 'blue',
//     name: 'Son',
//     __proto__: cat,
// };

// const catChild = {
//     name: 'Junior',
//     __proto__: anotherCatParent,
// }

// console.log('catParent > ', catParent);
// console.log('anotherCatParent > ', anotherCatParent);
// console.log('catChild > ', catChild);


// console.log('catChild > ', catChild.legs);



// const newMap = new Map();


// function makeCat(breed, legs, name) {
//     const cat = {};

//     cat.breed = breed;
//     cat.legs = legs;
//     cat.name = name;

//     return cat;
// }

// const myCat = makeCat('breed', 'legs', 'name');

// console.log('myCat > ', myCat);





// function MakeCat(breed, legs, name) {
//     this.breed = breed;
//     this.legs = legs;
//     this.name = name;
// }

// const myCat = new MakeCat('breed', 'legs', 'name');

// console.log('myCat > ', myCat);


// MakeCat.prototype.sayMeow = function () {
//     alert('meow');
// };

// myCat.sayMeow();




// const newMap = new Map();

// Map.prototype.sayMeow = function () {
//     alert('meow');
// };

// console.log('newMap > ', newMap);

// newMap.sayMeow();






// const catParent = {
//     breed: 'sphinx',
//     color: 'red',
//     name: 'Son',
//     __proto__: cat,
// };

// const anotherCatParent = {
//     breed: 'sphinx',
//     color: 'blue',
//     name: 'Son',
//     __proto__: cat,
// };

// const catChild = {
//     name: 'Junior',
//     __proto__: anotherCatParent,
// }

// function MakeCat(breed, legs, name) {
//     this.breed = breed;
//     this.legs = legs;
//     this.name = name;
// }


// class Cat {
//     constructor(breed, legs, name) {
//         this.breed = breed;
//         this.legs = legs;
//         this.name = name;
//         this.eyes = 2;
//     }

//     static typeOfAnimal = 'mammal';
//     static sayTypeOfAnimal = function() {
//         console.log('typeOfAnimal > ', this.typeOfAnimal);
//     };

//     get catName() {
//         return this.name.toUpperCase();
//     }


//     set catName(newValue) {
//         this.name = newValue.toLowerCase() + '1';
//     }

//     // Public
//     eyes = 2;
//     // Private
//     #isEating = false;

//     // Public
//     #sayMeow() {
//         console.log('Meow');
//     }

//     // Pulic
//     doEat() {
//         this.#isEating = true;
//         console.log('I am eating');
//         this.#sayMeow();

//         console.log(this.#isEating);
//     }
// }


// const myCat = new Cat('sphinx', 4, 'Tom');
// const myCat2 = new Cat('sphinx', 4, 'Tom');
// const myCat3 = new Cat('sphinx', 4, 'Tom');

// // myCat.doEat();
// // console.log(myCat.isEating);

// // console.log(Cat.typeOfAnimal);
// // Cat.sayTypeOfAnimal();

// // console.log(Math.PI);

// // console.log(Math.abs(-123));

// console.log(myCat.catName);

// myCat.catName = 'TOM';

// console.log(myCat.catName);






class Vehicle {
    constructor(mark, model) {
        this.mark = mark;
        this.model = model;
    }

    getInfo() {
        console.log(`${this.mark} ${this.model}`);
    }
}

class Car extends Vehicle {
    constructor(mark, model, color) {
        super(mark, model);

        this.color = color;
    }

    getColor() {
        console.log(`${this.color}`);
    }

    getCarInfo() {
        super.getInfo();
        console.log(`${this.color}`);
    }
}

// const vehicle = new Vehicle('Toyota', 'Corolla');
// vehicle.getInfo();


const car = new Car('Toyota', 'Corolla', 'Black');

car.getCarInfo();