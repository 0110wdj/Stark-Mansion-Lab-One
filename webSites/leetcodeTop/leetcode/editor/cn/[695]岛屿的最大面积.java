// 695 岛屿的最大面积

import java.util.HashMap;
import java.util.Map;

//leetcode submit region begin(Prohibit modification and deletion)
//class Solution {
//    static public int searchIsland(int[][] grid, Map<String, Boolean> visited, int i, int j) {
//        if (j < 0 || j >= grid[0].length || i < 0 || i >= grid.length) return 0;
//        if (grid[i][j] == 0) return 0;
//        String key = i + "," + j;
//        if (visited.containsKey(key)) return 0;
//
//        visited.put(key, true);
//        return searchIsland(grid, visited, i - 1, j)
//                + searchIsland(grid, visited, i + 1, j)
//                + searchIsland(grid, visited, i, j - 1)
//                + searchIsland(grid, visited, i, j + 1)
//                + 1;
//    }
//
//    static public int maxAreaOfIsland(int[][] grid) {
//        if (grid.length == 0) return 0;
//
//        int max = 0;
//        int columnLength = grid[0].length;
//        int lineLength = grid.length;
//        Map<String, Boolean> visited = new HashMap();
//
//        for (int i = 0; i < lineLength; i++) {
//            for (int j = 0; j < columnLength; j++) {
//                String key = i + "," + "j";
//                if (grid[i][j] == 0 || visited.containsKey(key)) {
//                    continue;
//                }
//                int currentMax = searchIsland(grid, visited, i, j);
//                max = Math.max(currentMax, max);
//            }
//        }
//
//        return max;
//    }
//
//}
//leetcode submit region end(Prohibit modification and deletion)

class Solution695 {

    public static void main(String[] args) {
        int[][] grid = {
                {0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0},
                {0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0},
                {0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0},
                {0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0},
                {0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0},
                {0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0},
                {0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0},
                {0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0}
        };
        System.out.println(maxAreaOfIsland(grid));
    }

    public static int maxAreaOfIsland(int[][] grid) {
        int maxArea = 0;
        for (int i = 0; i < grid.length; i++) {
            for (int j = 0; j < grid[0].length; j++) {
                if (grid[i][j] == 1) {
                    maxArea = Math.max(maxArea, dfs(grid, i, j));
                }
            }
        }
        return maxArea;
    }

    private static int dfs(int[][] grid, int i, int j) {
        if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] == 0) {
            return 0;
        }
        grid[i][j] = 0; // 标记为已访问
        int area = 1;
        area += dfs(grid, i - 1, j);
        area += dfs(grid, i + 1, j);
        area += dfs(grid, i, j - 1);
        area += dfs(grid, i, j + 1);
        return area;
    }
}