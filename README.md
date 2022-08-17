## Tests

Describe: countUp()

Test: "It should console.log the count to number and count by number."
Code:
  const countTo = 30;
  const countBy = 5;
  countUp(countTo, countBy);
Expected Output: 30 5

Test: "It should count to 30, starting at 0, by 5, and console.log each time it counts"
Code:
  const countTo = 30;
  const countBy = 5;
  countUp(countTo, countBy);
Expected output: 0 5 10 15 20 25 30

Test: "It should count to 30, starting at 0, by 5, STORE the count into an array, and console.log the array"
Code:
  const countTo = 30;
  const countBy = 5;
  countUp(countTo, countBy);
Expected output: 30 5 (7) [0, 5, 10, 15, 20, 25, 30]

