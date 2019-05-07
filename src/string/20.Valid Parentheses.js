/**
 * @param s
 * @returns {boolean}
 */
const isValid = function (s) {
  let map = {
    '(': -1,
    ')': 1,
    '[': -2,
    ']': 2,
    '{': -3,
    '}': 3,
  }
  const stack = []

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] < 0) {
      stack.push(s[i])
    } else {
      const lastItem = stack.pop()
      if (map[lastItem] + map[s[i]] !== 0) return false
    }
  }
  return stack.length <= 0
}

export default isValid
