package cn.snofly.array;

public class ArrayUseDemo03 {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};
        int[] rev = rever(arr);
        logarr(rev);
    }

    public static int[] rever(int[] arr) {
        int[] res = new int[arr.length];
        for (int i = 0, j = arr.length - 1; i < arr.length; i++, j--) {
            res[i] = arr[j];
        }
        return res;
    }

    public static void logarr(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            System.out.println(arr[i]);
        }
    }
}
