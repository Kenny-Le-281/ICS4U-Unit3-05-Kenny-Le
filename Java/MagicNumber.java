/*
* This program prints the Magic Sqaures.
*
* @author  Kenny Le
* @version 1.0
* @since   2024-05-06
*/

final class Main {
    private Main() {
        // Prevent instantiation
        // Optional: throw an exception e.g. AssertionError
        // if this ever *is* called
        throw new IllegalStateException("Cannot be instantiated");
    }

    /** The top left index. */
    public static final int ZERO = 0;
    /** The top middle index. */
    public static final int ONE = 1;
    /** The top right index. */
    public static final int TWO = 2;
    /** The middle left index. */
    public static final int THREE = 3;
    /** The center index. */
    public static final int FOUR = 4;
    /** The middle right index. */
    public static final int FIVE = 5;
    /** The lower left index. */
    public static final int SIX = 6;
    /** The lower center index. */
    public static final int SEVEN = 7;
    /** The lower right index. */
    public static final int EIGHT = 8;
    /** The maximum number for magicNumbers. */
    public static final int NINE = 9;
    /** The maximum number for magicNumbers. */
    public static final int MAGICNUM = 15;

    /**
    * Process numbers.
    */
    private static int numberOfProcess = 0;
    private static int numberOfMagicSquares = 0;

    public static void genSquare(final int[] square, final int currentIndex) {
        final int lastIndex = square.length - 1;

        if (currentIndex > lastIndex) {
            if (isMagic(square)) {
                printMagicSquare(square);
                numberOfMagicSquares++;
            }
            return;
        }

        boolean[] used = new boolean[NINE + 1]; // Array to mark used numbers
        for (int i = 0; i < currentIndex; i++) {
            used[square[i]] = true; // Mark numbers already placed in the square as used
        }

        for (int counter = 1; counter <= NINE; counter++) {
            if (!used[counter]) {
                square[currentIndex] = counter; // Place the current number in the square
                genSquare(square, currentIndex + 1); // Recursively fill the next position
            }
        }
    }


    public static boolean isMagic(final int[] preSquare) {
        // returns true or false for whether or not array is a magic square
        // this assumes there are no repeats, but that check could be added!
        int row1 = preSquare[ZERO] + preSquare[ONE] + preSquare[TWO];
        int row2 = preSquare[THREE] + preSquare[FOUR] + preSquare[FIVE];
        int row3 = preSquare[SIX] + preSquare[SEVEN] + preSquare[EIGHT];
        int col1 = preSquare[ZERO] + preSquare[THREE] + preSquare[SIX];
        int col2 = preSquare[ONE] + preSquare[FOUR] + preSquare[SEVEN];
        int col3 = preSquare[TWO] + preSquare[FIVE] + preSquare[EIGHT];
        int diag1 = preSquare[ZERO] + preSquare[FOUR] + preSquare[EIGHT];
        int diag2 = preSquare[TWO] + preSquare[FOUR] + preSquare[SIX];

        return row1 == MAGICNUM && row2 == MAGICNUM && row3 == MAGICNUM
                && col1 == MAGICNUM && col2 == MAGICNUM
                && col3 == MAGICNUM && diag1 == MAGICNUM && diag2 == MAGICNUM;
    }

    public static void printMagicSquare(final int[] outputSquare) {
        // prints inputted array in a magic square format
        System.out.println("\n*****");
        for (int count = 0; count < outputSquare.length; count++) {
            if (count == THREE || count == SIX) {
                System.out.println();
                System.out.print(outputSquare[count] + " ");
            } else {
                System.out.print(outputSquare[count] + " ");
            }
        }
        System.out.println("\n*****");
    }

    public static void main(final String[] args) {
        // main stub, get user input here
        int[] magicSquare = {0, 0, 0, 0, 0, 0, 0, 0, 0};
        int[] extraArray = {0, 0, 0, 0, 0, 0, 0, 0, 0};
        System.out.println("\n");
        System.out.println("All Possible Magic Squares (3x3):\n");
        genSquare(magicSquare, extraArray, 0);

        System.out.println("\nDone.");
    }
}
