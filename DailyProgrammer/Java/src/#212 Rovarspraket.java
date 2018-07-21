/* Rövarspråket is not very complicated: 
 * You take an ordinary word and replace the consonants with the consonant doubled and with an "o" in between. 
 * So the consonant "b" is replaced by "bob", "r" is replaced with "ror", "s" is replaced with "sos", and so on. 
 * Vowels are left intact. It's made for Swedish, but it works just as well in English.
 * Your task today is to write a program that can encode a string of text into Rövarspråket.
 * 
 * URL: http://www.reddit.com/r/dailyprogrammer/comments/341c03/20150427_challenge_212_easy_rövarspråket/
 */

import java.util.Scanner;

public class Rovarspraket {

	public static void main(String[] args) {
		
		// Allows console to accept user input
		Scanner input = new Scanner(System.in);
		// Prompt user to enter a sentence
		System.out.println("Enter the sentence to be coded: ");
		// Variable to hold the sentence input by user
		String sentence = input.nextLine();
		
		// Loop through each character in the sentence
		for (int i = 0; i < sentence.length(); i++) {
			// Check for consonants only
			if ("qwrtpsdfghjklzxcvbnm".contains(sentence.toLowerCase().charAt(i)+"")) {
				System.out.print(sentence.charAt(i) + "o" + sentence.toLowerCase().charAt(i));
			} else {
				System.out.print(sentence.toString().charAt(i));
			}
		}
		// Output codified sentence
		System.out.println();
	}
}
