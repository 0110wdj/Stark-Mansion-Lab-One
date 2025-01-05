package cn.snofly.array;

public class SparseDemo07 {
    public static void main(String[] args) {
        int[][] array1 = new int[11][11];
        array1[1][2] = 1;
        array1[2][3] = 2;
        System.out.println("原始数组");
        printArr(array1);
        System.out.println("稀疏数组");
        printArr(generateSparseArray(array1));
        System.out.println("稀疏数组还原");
        printArr(unzipSparseArray(generateSparseArray(array1)));
    }

    public static void printArr(int[][] arr) {
        for (int[] ints : arr) {
            for (int intNum : ints) {
                System.out.print(intNum + "\t");
            }
            System.out.println();
        }
    }

    public static int[][] generateSparseArray(int[][] arr) {
        int sum = 0;
        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr[i].length; j++) {
                if (arr[i][j] != 0) {
                    sum++;
                }
            }
        }
        int[][] sparseArray = new int[sum + 1][3];
        sparseArray[0][0] = arr.length;
        sparseArray[0][1] = arr[0].length;
        sparseArray[0][2] = sum;
        int count = 0;
        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr[i].length; j++) {
                if (arr[i][j] != 0) {
                    count++;
                    sparseArray[count][0] = i;
                    sparseArray[count][1] = j;
                    sparseArray[count][2] = arr[i][j];
                }
            }
        }
        return sparseArray;
    }

    public static int[][] unzipSparseArray(int[][] arr) {
        int[][] unzipArray = new int[arr[0][0]][arr[0][1]];
        for (int i = 1; i < arr.length; i++) {
            unzipArray[arr[i][0]][arr[i][1]] = arr[i][2];
        }
        return unzipArray;
    }
}
