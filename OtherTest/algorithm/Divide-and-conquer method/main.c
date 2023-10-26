#include <stdio.h>
#define OK 1;
#define ERROR 0;
const int LENGTH = 6; // 骨牌的数目
typedef int Status;
typedef struct _data
{
  int left;      // 骨牌左边值
  int right;     // 骨牌右边值
  int status[2]; // 骨牌的状态
} Data[LENGTH];
typedef struct _Sum
{
  int Left;
  int Right;
} _Sum;
static _Sum Sum = {0, 0};
static int Num = LENGTH;
void Init(Data L) // 初始化骨牌
{
  L[0].left = 8;
  L[1].left = 4;
  L[2].left = 6;
  L[3].left = 7;
  L[4].left = 3;
  L[5].left = 11;

  L[0].right = 5;
  L[1].right = 2;
  L[2].right = 9;
  L[3].right = 7;
  L[4].right = 9;
  L[5].right = 10;

  int i;
  for (i = 0; i < LENGTH; i++)
  {
    if (L[i].left <= L[i].right) // 初始时将骨牌状态确定
    {
      L[i].status[0] = 0;
      L[i].status[1] = 0;
    }
    else
    {
      L[i].status[0] = 1;
      L[i].status[1] = 1;
    }
  }
  for (i = 0; i < Num; i++)
  {
    printf("%d ", L[i].status[0]);
  }
  printf("\n");
}
Status Recursion(int n, Data L) // 递归操作
{
  if (n == 0)
    return ERROR;
  Recursion(n - 1, L);
  int _left = Sum.Left;                                                              // 记录第1个骨牌到第n个骨牌的左部分为止的最大值
  if (L[n].left * L[n - 1].left + Sum.Right < L[n].left * L[n - 1].right + Sum.Left) // 记录从第1个骨牌到第n+1个骨牌的左部分为止的最大值
  {
    Sum.Left += L[n].left * L[n - 1].right;
  }
  else
  {
    Sum.Left = L[n].left * L[n - 1].left + Sum.Right;
    if (L[n - 1].status[0]) // 由于第n个骨牌调换了位置，所以状态要改变
    {
      L[n - 1].status[0] = 0;
    }
    else
    {
      L[n - 1].status[0] = 1;
    }
  }
  if (L[n].right * L[n - 1].left + Sum.Right < L[n].right * L[n - 1].right + _left) // 记录从第1个骨牌到第n+1个骨牌的右部分为止的最大值
  {
    Sum.Right = L[n].right * L[n - 1].right + _left;
  }
  else
  {
    Sum.Right = L[n].right * L[n - 1].left + Sum.Right;
    if (L[n - 1].status[1]) // 由于第n个骨牌调换了位置，所以状态要改变
    {
      L[n - 1].status[1] = 0;
    }
    else
    {
      L[n - 1].status[1] = 1;
    }
  }
  return OK;
}

int main()
{
  int i;
  Data _data;
  Init(_data);               // 初始化
  Recursion(Num - 1, _data); // 递归操作
  printf("sum.left %d \n", Sum.Left);
  printf("sum.right %d \n", Sum.Right);
  if (Sum.Left > Sum.Right)
  {
    for (i = 0; i < Num; i++)
    {
      printf("%d ", _data[i].status[0]);
    }
    printf("\n");
  }
  else // 最后一个骨牌调换位置，状态改变
  {
    printf("%d \n", Sum.Right);
    if (_data[Num - 1].status[1])
    {
      _data[Num - 1].status[1] = 0;
    }
    else
    {
      _data[Num - 1].status[1] = 1;
    }
    for (i = 0; i < Num; i++)
    {
      printf("%d ", _data[i].status[1]);
    }
    printf("\n");
  }
  return 0;
}