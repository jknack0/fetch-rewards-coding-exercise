const versionCompare = require('../utils/version_helper')

const shortStringSmall = '1.1'
const shortStringLarge = '5.5'
const longStringSmall = '1.1.1.1'
const longStringLarge = '5.5.5.5'

describe('When the strings are the same length', () => {
  test(`${shortStringLarge} is after ${shortStringSmall}`, () => {
    expect(versionCompare(shortStringLarge, shortStringSmall)).toBe('after')
  })

  test(`${shortStringSmall} is before ${shortStringLarge}`, () => {
    expect(versionCompare(shortStringSmall, shortStringLarge)).toBe('before')
  })

  test(`${shortStringLarge} is equal ${shortStringLarge}`, () => {
    expect(versionCompare(shortStringLarge, shortStringLarge)).toBe('equal')
  })
})

describe('When the strings are different lengths', () => {
  test(`${longStringLarge} is after ${shortStringSmall}`, () => {
    expect(versionCompare(longStringLarge, shortStringSmall)).toBe('after')
  })

  test(`${shortStringSmall} is before ${longStringLarge}`, () => {
    expect(versionCompare(shortStringSmall, longStringLarge)).toBe('before')
  })
})