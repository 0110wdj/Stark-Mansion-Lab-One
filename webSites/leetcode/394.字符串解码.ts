/*
 * @lc app=leetcode.cn id=394 lang=typescript
 *
 * [394] 字符串解码
 */

// @lc code=start
function decodeString(s: string): string {
  let res = ''
  const stack: string[] = []

  const recur = (s: string) => {
    if (!s) return

    const f = parseInt(s)
    const len = (f + '').length
    // console.log({ s, f, len });

    if (Number.isInteger(f)) {
      let i = len
      for (let c of s.slice(len)) {
        i++
        if (c === '[') {
          stack.push(c)
        }
        if (c === ']') {
          stack.pop()
        }

        if (stack.length === 0) {
          break
        }
      }

      for (let j = 0; j < f; j++) {
        recur(s.slice(len + 1, i - 1))
      }
      recur(s.slice(i, s.length))
    } else {
      let i = 0
      for (let c of s) {
        if (Number.isInteger(+c)) {
          recur(s.slice(i))
          break;
        } else {
          i++;
          res += c;
        }
      }
    }
  }

  recur(s)

  return res
};
// @lc code=end

console.log(decodeString("30[a]2[bc]"));