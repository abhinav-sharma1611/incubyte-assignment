import { add } from '../../utils/stringCalculator';

describe('String Calculator', () => {
    // Test that the add function returns 0 for an empty string
    test('should return 0 for an empty string', () => {
        expect(add('')).toBe(0);
    });

    // Test that the add function returns the number for a single number string
    test('should return the number for a single number string', () => {
        expect(add('1')).toBe(1);
        expect(add('5')).toBe(5);
    });

    // Test that the add function returns the sum for two numbers
    test('should return the sum for two numbers', () => {
        expect(add('1,5')).toBe(6);
    });

    // Test that the add function returns the sum for multiple numbers
    test('should return the sum for multiple numbers', () => {
        expect(add('1,2,3')).toBe(6);
        expect(add('1\n2,3')).toBe(6);
    });

    // Test that the add function handles different delimiters
    test('should handle different delimiters', () => {
        expect(add('//;\n1;2')).toBe(3);
    });

    // Test that the add function throws an error for negative numbers
    test('should throw an error for negative numbers', () => {
        expect(() => add('1,-2,3,-4')).toThrow('Negative numbers not allowed: -2, -4');
    });
})
