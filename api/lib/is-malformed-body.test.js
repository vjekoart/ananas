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

test('call with data property consisting of numbers "123" should return true', () => {
    expect(isMalformedBody({
        data: "123"
    })).toBe(true)
})

test('call with data property consisting of numbers "234" should return false', () => {
    expect(isMalformedBody({
        data: "234"
    })).toBe(false)
})
