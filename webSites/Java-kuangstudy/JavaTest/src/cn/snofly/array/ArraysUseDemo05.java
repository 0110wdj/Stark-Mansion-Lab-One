package cn.snofly.array;

import java.util.Arrays;

public class ArraysUseDemo05 {
    public static void main(String[] args) {
        int[] arr = {1, 2, 5, 4, 8, 11, 33, 1, 2};
        Arrays.sort(arr);
        for (int i = 0; i < arr.length; i++) {
            System.out.println(arr[i]);
        }
    }
}
