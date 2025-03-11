// 200 岛屿数量

//leetcode submit region begin(Prohibit modification and deletion)
//class Solution {
//    static public void deleteLand(char[][] grid, int i, int j) {
//        // 1、如果不可访问，直接退出
//        if (i < 0 || j < 0 || i > grid.length - 1 || j > grid[0].length - 1 || grid[i][j] == '0') return;
//
//        // 2、如果是 ‘1’，则删除改陆地，然后删除相邻的四块陆地
//        grid[i][j] = '0';
//        deleteLand(grid, i - 1, j);
//        deleteLand(grid, i + 1, j);
//        deleteLand(grid, i, j - 1);
//        deleteLand(grid, i, j + 1);
//    }
//
//    public int numIslands(char[][] grid) {
//        int total = 0;
//        // 统计，然后消灭陆地
//        Map visitMap = new HashMap<String, Boolean>();
//        for (int i = 0; i < grid.length; i++) {
//            for (int j = 0; j < grid[0].length; j++) {
//                char current = grid[i][j];
//                if (current == '1') {
//                    total++;
//                    deleteLand(grid, i, j);
//                }
//            }
//        }
//        return total;
//    }
//}
//leetcode submit region end(Prohibit modification and deletion)

class Solution200 {
    static public void deleteLand(char[][] grid, int i, int j) {
        // 1、如果不可访问，直接退出
        if (i < 0 || j < 0 || i > grid.length - 1 || j > grid[0].length - 1 || grid[i][j] == '0') return;

        // 2、如果是 ‘1’，则删除改陆地，然后删除相邻的四块陆地
        grid[i][j] = '0';
        deleteLand(grid, i - 1, j);
        deleteLand(grid, i + 1, j);
        deleteLand(grid, i, j - 1);
        deleteLand(grid, i, j + 1);
    }

    static public int numIslands(char[][] grid) {
        int total = 0;
        // 统计，然后消灭陆地
        for (int i = 0; i < grid.length; i++) {
            for (int j = 0; j < grid[0].length; j++) {
                char current = grid[i][j];
                if (current == '1') {
                    total++;
                    deleteLand(grid, i, j);
                }
            }
        }
        return total;
    }

    public static void main(String[] args) {
        System.out.println(numIslands(new char[][]{
                {'1', '1', '1', '1', '0'},
                {'1', '1', '0', '1', '0'},
                {'1', '1', '0', '0', '0'},
                {'0', '0', '0', '0', '0'},
        }));
    }
}