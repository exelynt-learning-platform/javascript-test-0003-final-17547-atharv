// Number of rows to print in the pattern
const TOTAL_ROWS = 6;

// Outer loop controls the number of rows
for (let i = 1; i <= TOTAL_ROWS; i++) {
  let line = ""; // Variable to store the pattern for the current row

  // Inner loop controls how many elements are printed in each row
  for (let j = 1; j <= i; j++) {

    // Check if the current row number is odd
    if (i % 2 === 1) {

      // If row is odd:
      // Print 1 at odd positions and 0 at even positions
      line += (j % 2 === 1) ? "1" : "0";

    } else {

      // If row is even:
      // Print 0 at odd positions and 1 at even positions
      line += (j % 2 === 1) ? "0" : "1";

    }

  }

  // Print the completed line for the current row
  console.log(line);
}