/* This project will take a set of values as input and calculate the standard deviation.
 * The result will be output for the user to see.
 * 
 * URL: http://www.reddit.com/r/dailyprogrammer/comments/35l5eo/20150511_challenge_214_easy_calculating_the/
 */

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class StandardDeviation {
	
		
		
	public static void main(String[] args) {
		
		// Initialize dynamic array to hold user input values
		List<Double> values = new ArrayList<Double>();
		
		// Variable to hold input from user
		Scanner in = new Scanner(System.in);
		System.out.println("Add a value to the array: ");
		
		// variable "v" holds the next value (double) entered by user
		double v = in.nextDouble();
		
		// Use the value of "0" as a sentinel i.e. the program will stop when "0" is entered
		while (v != 0) {
				
				// Add value "v" to array
				values.add(v);
				System.out.println("Add a value to the array: ");
				
				v = in.nextDouble();
		}
		
		// Loop through the array one number at a time, adding each number to the total
		double total = 0;
		
		// Calculate number of values in array
		int numberOfValues = values.size();
		
		for (int i = 0; i < numberOfValues; i++) {
			total += values.get(i);
		}
		
		/*  Calculate mean of all values. 
		 *  This is defined as the sum of all values,
		 *  divided by the number of values in the population. 
		 */
		double mean = total / numberOfValues;
		
		/* For each value in the population, calculate the difference between it
		 * and the mean value, then square that difference.
		 * These values will be summed and added to a new total.
		 * To obtain the VARIANCE, we then divide this total by the number of values.
		 */
		double tempTotal = 0;
		
		for (int i = 0; i < numberOfValues; i++) {
			tempTotal += Math.pow(values.get(i) - mean, 2);
		}
		
		// Calculate variance
		double variance = tempTotal / numberOfValues;
		
		// Calculate standard deviation
		double stDev = Math.sqrt(variance);
		
		// Output result to user
		System.out.println("The standard deviation is: " + stDev);
	}
}