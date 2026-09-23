import java.util.Scanner;

/**
 * Simple Interest Calculator App
 *
 * Formula: Simple Interest = (Principal × Rate × Time) / 100
 */
public class SimpleInterestCalculator {

    /**
     * Calculates simple interest.
     *
     * @param principal The principal amount
     * @param rate      The annual rate of interest (in %)
     * @param time      The time period (in years)
     * @return The calculated simple interest
     */
    public static double calculateSimpleInterest(double principal, double rate, double time) {
        return (principal * rate * time) / 100;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("========================================");
        System.out.println("     Simple Interest Calculator App     ");
        System.out.println("========================================");

        System.out.print("Enter the principal amount: ");
        double principal = scanner.nextDouble();

        System.out.print("Enter the rate of interest (% per annum): ");
        double rate = scanner.nextDouble();

        System.out.print("Enter the time period (in years): ");
        double time = scanner.nextDouble();

        double simpleInterest = calculateSimpleInterest(principal, rate, time);
        double totalAmount = principal + simpleInterest;

        System.out.println("----------------------------------------");
        System.out.printf("Principal Amount  : %.2f%n", principal);
        System.out.printf("Rate of Interest  : %.2f%%%n", rate);
        System.out.printf("Time Period       : %.2f years%n", time);
        System.out.println("----------------------------------------");
        System.out.printf("Simple Interest   : %.2f%n", simpleInterest);
        System.out.printf("Total Amount      : %.2f%n", totalAmount);
        System.out.println("========================================");

        scanner.close();
    }
}
