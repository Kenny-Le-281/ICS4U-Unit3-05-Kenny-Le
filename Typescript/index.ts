/*
* This program uses a method to find every "magic" square.
* @author Kenny Le
* @version 1.0
* @since   2024-0-08
*/

// Number constants
const magicNumber: number = 15

// Generates the magic sqaure
function genSquare(square: number[], currentIndex: number): void {
  const maxNumber: number = 9
  const lastIndex: number = maxNumber -1

  for (let counter = 1; counter <= maxNumber; counter++) {
    square[currentIndex] = counter
    if (currentIndex < lastIndex) {
      genSquare(square, currentIndex + 1)
    } else {
      if (!hasDuplicates(square)) {
        if (isMagic(square)) {
          printMagicSquare(square);
        }
      }
    }
  }
}

// Checks if the given array has duplicates
function hasDuplicates(array: number[]): boolean {
  for (let currentIndex = 0; currentIndex < array.length; currentIndex++) {
    for (let nextIndex = currentIndex + 1; nextIndex < array.length; nextIndex++) {
      if (array[currentIndex] === array[nextIndex]) {
        return true // Found a duplicate
      }
    }
  }
  return false // No duplicates found
}

// Checks if it is a magic square
function isMagic(preSquare: number[]): boolean {
  let row1: number = preSquare[0] + preSquare[1] + preSquare[2]
  let row2: number = preSquare[3] + preSquare[4] + preSquare[5]
  let row3: number = preSquare[6] + preSquare[7] + preSquare[8]
  let col1: number = preSquare[0] + preSquare[3] + preSquare[6]
  let col2: number = preSquare[1] + preSquare[4] + preSquare[7]
  let col3: number = preSquare[2] + preSquare[5] + preSquare[8]
  let diag1: number = preSquare[0] + preSquare[4] + preSquare[8]
  let diag2: number = preSquare[2] + preSquare[4] + preSquare[6]

  return row1 == magicNumber && row2 == magicNumber && row3 == magicNumber
        && col1 == magicNumber && col2 == magicNumber
        && col3 == magicNumber && diag1 == magicNumber && diag2 == magicNumber
}

// Prints formatted magic squares to the console.
function printMagicSquare(outputSquare: number[]): void {
  console.log("\n*****")
  for (let counter = 0; counter < outputSquare.length; counter++) {
    if (counter == 3 || counter == 6) {
      console.log()
      process.stdout.write(outputSquare[counter] + " ")
    } else {
      process.stdout.write(outputSquare[counter] + " ")
    }
  }
  console.log("\n*****")
}

let blankSquare: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0]

genSquare(blankSquare, 0)

console.log('\nDone.')
