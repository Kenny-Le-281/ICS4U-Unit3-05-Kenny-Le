
/*
* This program uses a method to find every "magic" square.
*
* @author  Cristiano Sellitto
* @version 1.0
* @since   2024-04-24
*/

// Number constants
const magicNumber: number = 15

/**
 * Generates magic squares
 *
 * @param square the starting square
 * @param index the first index to use
 */
function genSquare(square: number[], index: number): void {
  const maxNumber: number = 9
  for (let counter = 1; counter < maxNumber + 1; counter++) {
    square[index] = counter
    if (index < maxNumber - 1) {
      genSquare(square, index + 1)
    } else {
      const duplicates: number[] = square.filter((item, index) => square.indexOf(item) < index)
      if (isMagic(square) && duplicates.length == 0) {
        printMagicSquare(square)
      }
    }
  }
}

/**
 * Checks if a square is magic.
 *
 * @param preSquare the square to be checked
 * @returns if the square is magic
 */
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

/**
 * Prints formatted magic squares to the console.
 *
 * @param outputSquare the square to be formatted
 */
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
