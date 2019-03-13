/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function (s) {
  return s.split('').reverse().join('').split(' ').reverse().join(' ')
}
export default reverseWords
