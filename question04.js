function generateNumbers(min, max) {
    // Handle invalid input (min greater than max)
    if (min > max) {
      return [];
    }
  
    const numbers = [];
    // Use for loop to iterate from min to max (inclusive)
    for (let num = min; num <= max; num++) {
      numbers.push(num);
    }
    return numbers;
  }
  
  // Example usage
  const num1 = 10;
  const num2 = 25;
  const numbers = generateNumbers(num1, num2);
  
  console.log(numbers); // Output: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
  