/**
 * @param {string} s
 * @return {number}
 */
const countBinarySubstrings = function (s) {
  let count = 0
  for (let i = 0; i < s.length - 1; i++) {
    // 从头开始按位截取字符串，进行匹配
    match(s.slice(i))
  }

  /**
   * 匹配字符串
   * @param fragment
   */
  function match (fragment) {
    // 判断字符串是否以连续 0 或连续 1 开头
    const j = fragment.match(/^(0+|1+)/)[0]
    // 对 j 进行按位取反获得 i
    const i = String((j[0] ^ 1)).repeat(j.length)
    // 如果 `${j}${i}` 能够匹配到当前 fragment 片段，则计数加一
    if (fragment.startsWith(`${j}${i}`)) {
      count++
    }
  }

  return count
}
export default countBinarySubstrings
