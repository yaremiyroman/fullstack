const Calculator = require('../src/Calculator');

describe('Calculator', () => { // Suite
    let calc = null;


    beforeEach(() => {
        calc = new Calculator();
    });

    test('+ adds two numbers', () => { // Test
        expect(calc.add(3, 9)).toBe(12); // Test Case
        expect(calc.add(3, -10)).toBe(-7); // Test Case
        expect(calc.add(-1, -10)).toBe(-11); // Test Case
        expect(calc.add(0, 0)).toBe(0); // Test Case
    });

    test('- substracts two numbers', () => { // Test
        expect(calc.substract(3, 9)).toBe(-6); // Test Case
        expect(calc.substract(3, -10)).toBe(13); // Test Case
        expect(calc.substract(-1, -10)).toBe(9); // Test Case
        expect(calc.substract(0, 0)).toBe(0); // Test Case
    });


    test('* multiplies two numbers', () => { // Test
        expect(calc.multiply(3, 9)).toBe(27); // Test Case
        expect(calc.multiply(3, -10)).toBe(-30); // Test Case
        expect(calc.multiply(-1, -10)).toBe(10); // Test Case
        expect(calc.multiply(10, 0)).toBe(0); // Test Case
    });

    test('/ divides two numbers', () => { // Test
        expect(calc.divide(10, 2)).toBe(5); // Test Case
        expect(calc.divide(100, -10)).toBe(-10); // Test Case

        expect(() => calc.divide(100, 0)).toThrow('Cannot divide by zero');
    });
});

// TDD

// === 
// >=
// >
// <
// <= 
// !
