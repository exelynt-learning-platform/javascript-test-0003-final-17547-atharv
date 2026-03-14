// Number of rows for the pattern
const rows = 6;

// Outer loop controls the number of rows
for (let i = 1; i <= rows; i++) {
  let line = ""; // Stores the pattern for the current row

  // Inner loop controls the number of elements printed in each row
  for (let j = 1; j <= i; j++) {

    // Determine starting value based on row parity
    // Odd rows start with '1', even rows start with '0'
    if (i % 2 === 1) {
      // For odd rows, alternate values starting from 1
      line += (j % 2 === 1) ? "1 " : "0 ";
    } else {
      // For even rows, alternate values starting from 0
      line += (j % 2 === 1) ? "0 " : "1 ";
    }
  }

  console.log(line.trim());
}