const numbers = [3, 7, 12, 5, 8];

const squaredNumbers = numbers.map(num => num * num);
console.log("Squared Numbers:", squaredNumbers);

const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even Numbers:", evenNumbers);

const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum of Numbers:", sum);

const checkNumbers = (num) => {
  return num > 10 && num % 2 === 0;
}

console.log("Check 12:", checkNumbers(12));

