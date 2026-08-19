// import './slider';

// const message: string = "TypeScript + Webpack setup is working.";

// const age: number = 55;

// const isActive: boolean = true;

// const b = null;
// const undef: undefined = undefined;



// let numberArr: number[] = [1, 2, 3, 4];


// let numberTuple: [string, number] = ['1', 2];

// let anyArr: any[] = ['1', 2, null, 4];


// let mixedArr: (string | number)[] = ['string', 77, 9, 'value'];


// let  someVar: any = '234';
// someVar = 124;


// function greet(): string {
//     return 'Hello, World!';
// }

// console.log(greet());



// function greet2(message: string, additional?: any): void {
//     if (additional)  {
//         console.log(message + additional + '...');
//     } else {
//         console.log(message + additional);
//     }
// }

// greet2('SOME MESSAGE', null);




// const add = (x: unknown, y: unknown): any => {
//     if (typeof x === 'number' && typeof y === 'number') {
//         return x + y;
//     }
// };

// console.log(add(5, 6));

// function err(): Error {
//     throw new Error('NEW ERROR');
// }

// console.log(err());


// enum Color {
//     Red = 'red',
//     Green = 'green',
//     Blue = 'blue'
// }

// const myColor = Color.Green;

// console.log('myColor > ', myColor);


// type htmlVariations = HTMLBodyElement | HTMLAreaElement | HTMLCollection | HTMLCollection | HTMLElement;


// const body: htmlVariations = document.body;

// type customType = string | number | null | Color;

// const myVar: any = Color.Green;


// console.log('myVar > ', myVar);


// interface Address {
//     city: string,
//     code: string,
//     readonly population: number
// }


// interface UserObject {
//     name: string,
//     age: number,
//     isActive?: boolean,
//     address: Address
// };


// let user: UserObject = {
//     name: 'John',
//     age: 77,
//     isActive: false,
//     address: {
//         city: 'Kyiv',
//         code: '044',
//         population: 2
//     }
// };

// user.address.city = 'Mykolaiv';
// user.address.population = 5;



// interface StringArray {
//     [key: string]: string;
// }

// const myStringObject: StringArray = {
//     1244: '1234',
//     34235: '1234',
//     3456346: '1234',
//     23452354: '1234',
//     13456436244: '1234',
// };





// interface Address {
//     city: string,
//     code: string,
//     readonly population: number
// }


// interface UserObject {
//     name: string,
//     age: number,
//     isActive?: boolean,
//     address: Address,
//     greet(additionalMessage: string): void,
//     sayStatus: () => string
// };


// let user: UserObject = {
//     name: 'John',
//     age: 77,
//     isActive: false,
//     address: {
//         city: 'Kyiv',
//         code: '044',
//         population: 2
//     },
//     greet: function(additionalMessage: string = 'defaultValue') {
//         console.log(this.name) + additionalMessage;

//         return 123;
//     },
//     sayStatus: () => 'this.isActive'
// };



// alert('1');







// interface User {
//     name: string;
//     age: number;
//     sayName(): void;
//     notMandatoryProp?: string;
// };


// const user: User = {
//     name: 'John',
//     age: 33,
//     sayName: function () {
//         console.log(this.notMandatoryProp)
//     },
//     notMandatoryProp: 'string',
// };

// user.sayName();



// interface IEmployee {
//     name: string | null;
//     greet(): void;
// }


// interface IBuilding {
//     amountOfFloors: number;
// }

// interface IWorkplace extends IBuilding {
//     employees: IEmployee[];
//     amountEmployess(): number;
//     addEmployee(employee: IEmployee): void;
// }




// class Building implements IBuilding {
//     constructor(public amountOfFloors: number = 0) {
//     }
// }


// class Workplace implements IWorkplace {
//     constructor(
//         public employees: IEmployee[] = [],
//         public amountOfFloors: number = 0
//     ) {

//     }

//     addEmployee(employee: IEmployee): void {
//         this.employees.push(employee);
//     }

//     amountEmployess(): number {
//         return this.employees.length;
//     }
// }

// class Employee implements Employee {
//     // name: null | string =  null;

//     constructor(public name: string | null) {
//         // this.name = name;
//     }

//     public greet() {
//         console.log('>>> ', this.name);
//     }
// }






// const employ = new Employee('John');
// const employ2 = new Employee('John2');
// const employ3 = new Employee('John3');

// const myWorkPlace = new Workplace();

// myWorkPlace.addEmployee(employ);
// myWorkPlace.addEmployee(employ2);
// myWorkPlace.addEmployee(employ3);


// employ.greet();

// console.log(myWorkPlace.amountEmployess());



// interface Swimmer {
//     swim(): void;
// }

// interface Runner {
//     run(): void;
// }


// interface Sportsman extends Swimmer, Runner {
//     getApplause(): void;
//     run(): number;
// }




// interface Animal {
//     speak(): void;
// }


// class Dog implements Animal {
//     speak() {
//         console.log('I AM DOG');
//     }
// }

// class Cat implements Animal {
//     speak() {
//         console.log('I AM CAT');
//     }
// }



// let value: string | number; // or або  ||

// type UnionType = string | number;

// const someVar: UnionType = 'string';




// type Person = { name: string };
// type Worker = { company: string };

// type Employee = Person & Worker2; // && and i

// const emp: Employee = {
//     name: 'Johnm',
//     company: 'LLC',
// }


// ServiceWorker
// Worker




// interface IPerson {
//     name: string
// };

// interface IWorker2 {
//     company: string
// };

// interface Employee extends IPerson, IWorker2 {}

// // const emp: Employee = {
// //     name: 'Johnm',
// //     company: 'LLC',
// // }





// function identify<T>(arg: T): T {
//     return arg;
// }

// identify<number>(123);

// type nameType = { name: string };
// type ageType = { age: number };

// function merge<A, B>(a: A, b: B): A & B {
//     return { ...a, ...b };
// }


// console.log(merge<nameType, ageType>({ name: 'John' }, { age: 33 }));




// // Декларуємо декоратор logClass, який приймає клас як параметр
// function logClass(target: Function) {
//     // Виводимо в консоль ім'я класу, до якого застосовано декоратор
//     console.log(`Клас ${target} був створений`) // "Class [class name] has been created"
// }

// // Застосовуємо декоратор @logClass до класу Person
// @logClass
// class Person {
//     // Конструктор класу Person приймає два параметри: name та age
//     constructor(
//         public name: string, // Публічна властивість name, яка зберігає ім'я особи
//         public age: number // Публічна властивість age, яка зберігає вік особи
//     ) { }
// }

// // Створюємо екземпляр класу Person з ім'ям 'Аліса' та віком 30
// const person = new Person('Аліса', 30)


// Оголошуємо декоратор uppercase у сучасному стилі TypeScript decorators
// function uppercase(
//     target: ClassAccessorDecoratorTarget<unknown, string>
// ): ClassAccessorDecoratorResult<unknown, string> {
//     return {
//         init(initialValue: string): string {
//             return initialValue.toUpperCase()
//         },
//         set(this: unknown, newValue: string): void {
//             target.set.call(this, newValue.toUpperCase())
//         }
//     }
// }

// // Клас Person з властивістю name (accessor), до якої застосовано декоратор uppercase
// class Person {
//     @uppercase
//     accessor name: string;

//     // Конструктор класу, який приймає ім'я і призначає його властивості name
//     constructor(name: string) {
//         this.name = name
//     }
// }

// // Створення екземпляра класу Person з ім'ям 'alice'
// const person = new Person('alice')
// // Виведення імені екземпляра в консоль, очікуємо побачити 'ALICE'
// console.log(person.name) // Виведе "ALICE"



// namespace Frontend {
//     export class Animal {
//         say() {
//             console.log('Meow');
//         }
//     }

//     export const myVar = 18;
// }


// namespace Backend {
//     export class Animal {
//         say() {
//             console.log('Bark');
//         }
//     }
// }


// const cat = new Frontend.Animal();
// const dog = new Backend.Animal();

// cat.say();
// dog.say();

// console.log(Frontend.myVar)