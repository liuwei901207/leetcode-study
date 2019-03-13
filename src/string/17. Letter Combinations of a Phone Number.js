/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits === '') return []
  let arr = [
    null, null,
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i'],
    ['j', 'k', 'l'],
    ['m', 'n', 'o'],
    ['p', 'q', 'r', 's'],
    ['t', 'u', 'v'],
    ['w', 'x', 'y', 'z']]
  let result = arr[digits[digits.length - 1]]
  let calc = function (item) {
    let res = []
    for (let j = 0; j < item.length; j++) {
      let temp = result.concat()
      for (let k = 0; k < result.length; k++) {
        temp[k] = item[j] + temp[k]
      }
      res = res.concat(temp)
    }
    result = res
  }
  for (let i = digits.length - 2; i >= 0; i--) {
    calc(arr[digits[i]])
  }
  return result
}

export default letterCombinations
