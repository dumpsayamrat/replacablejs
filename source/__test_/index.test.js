import sum from './../index'

describe('setup jest', () => {
  it('adds 1 + 2 to equal 3', () => {
    expect.assertions(1)
    expect(sum(1, 2)).toBe(3)
  })
})
