package cn.snofly.array;

import java.util.Arrays;

public class SortDemo06 {
    public static void main(String[] args) {
        int[] arr = {5, 4, 2, 3, 8};
        sort(arr);
        System.out.println(Arrays.toString(arr));
    }

    public static void sort(int[] arr) {
        int tmp = 0;
        for (int i = 0; i < arr.length - 1; i++) {
            boolean flag = false;
            for (int j = 0; j < arr.length - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    tmp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = tmp;
                    flag = true;
                }
            }
            if (flag == false) {
                break;
            }
        }
    }
}
