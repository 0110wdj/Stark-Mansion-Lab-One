### dp 表如下：

剩余容量只有 \([0,10,20,30,40,50]\) 这 6 种情况；
剩余可选物品只有 \([0,1,2,3,4,5]\) 这 6 种情况；

| cap/i | 0   | 1   | 2   | 3   | 4   | 5   |
| ----- | --- | --- | --- | --- | --- | --- |
| 0     |
| 10    |
| 20    |
| 30    |
| 40    |
| 50    |

### 下面是计算填入后的表格：

#### 初始化

| cap/i | 0   | 1   | 2   | 3   | 4   | 5   |
| ----- | --- | --- | --- | --- | --- | --- |
| 0     | 0   | 0   | 0   | 0   | 0   | 0   |
| 10    | 0   |
| 20    | 0   |
| 30    | 0   |
| 40    | 0   |
| 50    | 0   |

#### 动态填入

| cap/i | 0   | 1   | 2   | 3   | 4   | 5   |
| ----- | --- | --- | --- | --- | --- | --- |
| 0     | 0   | 0   | 0   | 0   | 0   | 0   |
| 10    | 0   | 50  | 50  | 50  | 50  | 50  |
| 20    | 0   | 50  | 120 | 120 | 120 | 120 |
| 30    | 0   | 50  | 170 | 170 | 170 | 170 |
| 40    | 0   | 50  | 170 | 200 | 210 | 210 |
| 50    | 0   | 50  | 170 | 270 | 270 | 270 |