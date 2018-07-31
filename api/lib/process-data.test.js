const processData = require('./process-data')

test('call with argument "2" should return ["a", "b", "c"]', () => {
    const results = processData('2')

    expect(results.length).toBe(3)
    expect(results).toContain('a')
    expect(results).toContain('b')
    expect(results).toContain('c')
})

test('call with argument "323" should contain string "dad"', () => {
    const results = processData('323')

    expect(results).toContain('dad')
    expect(results).not.toContain('bab')
})
