import java.util.Arrays;

// you can also use imports, for example:
// import java.util.*;

// you can write to stdout for debugging purposes, e.g.
// System.out.println("this is a debug message");

class Solution {
    public static int solution(int[] plants, int capacity1, int capacity2) {
        if (plants.length == 0 || plants == null)
            return -1;
        int[] sorted = new int[plants.length];
        sorted = Arrays.copyOf(plants, plants.length);
        Arrays.sort(sorted);
        if (capacity1 < sorted[0] || capacity2 < sorted[0])
            return -1;

        if (plants[plants.length - 1] > capacity1 || plants[plants.length - 1] > capacity2)
            return -1;

        int refills = 0;

        for (int i = 0; i < plants.length / 2; i++) {
            if (capacity1 >= plants[i]) {
                capacity1 -= plants[i];
            } else {
                refills++;
                i--;
            }

            if (capacity2 >= plants[plants.length - 1 - i]) {
                capacity2 -= plants[plants.length - 1 - i];
            } else {
                refills++;
                i--;
            }

        }

        return refills;
    }

    public static void main(String[] args) {
        int capacity1 = 5;
        int capacity2 = 7;
        int[] plants = { 2, 4, 5, 1, 2 };

        int res = solution(plants, capacity1, capacity2);
        System.out.println(res);
    }
}