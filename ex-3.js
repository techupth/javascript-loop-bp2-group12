// Exercise #3: Find a Minimum Number
let numbers = [100, 20, 3, 1000];
let minNumber;
let sum = 0;
// Start coding here
for (let a = 0; a < numbers.length; a++) {
    if (numbers[a] < numbers[a + 1]) {
        minNumber = numbers[a]
    }
}

console.log(minNumber);
