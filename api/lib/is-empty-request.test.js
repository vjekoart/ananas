const isEmptyRequest = require('./is-empty-request')

test('call with no arguments should return true', () => {
    expect(isEmptyRequest()).toBe(true)
})

test('call with anything other rather than object as an argument should return true', () => {
    expect(isEmptyRequest(false)).toBe(true)
    expect(isEmptyRequest(10)).toBe(true)
    expect(isEmptyRequest('word')).toBe(true)
    expect(isEmptyRequest([])).toBe(true)
    expect(isEmptyRequest(() => { console.log('Function') })).toBe(true)
})

test('call without body property should return true', () => {
    expect(isEmptyRequest({})).toBe(true)
    expect(isEmptyRequest({ test: 2 })).toBe(true)
})

test('call without data property should return true', () => {
    expect(isEmptyRequest({
        body: {}
    })).toBe(true)

    expect(isEmptyRequest({
        body: {
            test: 2
        }
    })).toBe(true)
})

test('call with body and data properties should return false', () => {
    expect(isEmptyRequest({
        body: {
            data: ''
        }
    })).toBe(false)
})
