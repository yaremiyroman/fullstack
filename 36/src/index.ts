import './slider';

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
