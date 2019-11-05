
public class ChangeMaking {

    public static int change(int amount, int[] coins) {
        int dp[][] = new int[coins.length + 1][amount + 1];
        dp[0][0] = 1;
        for (int i = 1; i <= coins.length; i++) {
            dp[i][0] = 1;
            for (int j = 1; j <= amount; j++) {
                int currentCoin = coins[i - 1];
                int withoutCoin = dp[i - 1][j];
                int withCoin = currentCoin <= j ? dp[i][j - currentCoin] : 0;

                dp[i][j] = withoutCoin + withCoin;
            }
        }
        return dp[coins.length][amount];
    }

    public static void main(String[] args) {
        int amount = 5;
        int[] coins = { 1, 2, 5 };
        System.out.println(change(amount, coins));
    }
}