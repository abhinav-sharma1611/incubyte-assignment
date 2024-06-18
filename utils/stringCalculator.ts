export function add(numbers: string): number {
    // If the input string is empty, return 0
    if (!numbers) {
        return 0;
    }
    // Determine the delimiter to use for splitting the input string
    let delimiter = /,|\n/;
    if (numbers.startsWith('//')) {
        // If the input string starts with '//' followed by a delimiter, use that delimiter
        const parts = numbers.split('\n', 2);
        delimiter = new RegExp(parts[0].slice(2));
        numbers = parts[1];
    }
    // Split the input string into a list of numbers
    const numList = numbers.split(delimiter).map(Number);
    // Filter out any negative numbers
    const negatives = numList.filter(num => num < 0);
    // If there are any negative numbers, throw an error
    if (negatives.length) {
        throw new Error(`Negative numbers not allowed: ${negatives.join(', ')}`);
    }
    // Calculate the sum of the non-negative numbers
    return numList.reduce((sum, num) => sum + num, 0);
}