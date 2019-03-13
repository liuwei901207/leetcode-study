import letterCombinations from '../../src/string/17. Letter Combinations of a Phone Number.js'

test('reverse words', () => {
  expect(letterCombinations('23')).
    toEqual(expect.arrayContaining(['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']))
})
