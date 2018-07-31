const isMalformedBody = require('./is-malformed-body')

test('call with no arguments should return true', () => {
    expect(isMalformedBody()).toBe(true)
})

test('call with no data property should return true', () => {
    expect(isMalformedBody({})).toBe(true)
})

test('call with malformed data property should return true', () => {
    expect(isMalformedBody({
        data: 123
    })).toBe(true)

    expect(isMalformedBody({
        data: "abc"
    })).toBe(true)
})

test('call with data property consisting of numbers only should return false', () => {
    expect(isMalformedBody({
        data: "123"
    })).toBe(false)
})
