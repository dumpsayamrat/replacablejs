import {replace} from './../index'

describe('test replace funciton', () => {
  it('replace with regular word', () => {
    const str = 'This is test text to test. replace me!'
    const textToReplace = 'test'
    const replaceWith = ''
    const result = replace(str, replaceWith, textToReplace)
    const expected = 'This is  text to . replace me!'
    expect(result).toBe(expected)
  })

  it('replace with regex', () => {
    const str = 'This is test text to test. replace me!'
    const textToReplace = /test/g
    const replaceWith = ''
    const result = replace(str, replaceWith, textToReplace)
    const expected = 'This is  text to . replace me!'
    expect(result).toBe(expected)
  })
})
