const request = require('supertest')
const app = require('./index')

test('empty post request', async () => {
    const response = await request(app).post('/convert')

    expect(response.statusCode).toBe(400)
    expect(response.body.status).toBe(400)
})

test('malformed post request body: missing data property', async () => {
    const payload = { test: 2 }
    const response = await request(app).post('/convert').send(payload)

    expect(response.statusCode).toBe(400)
    expect(response.body.status).toBe(400)
})

test('malformed post request body: malformed data property', async () => {
    const payload = { data: 'abc' }
    const response = await request(app).post('/convert').send(payload)

    expect(response.statusCode).toBe(400)
    expect(response.body.status).toBe(400)
})

test('correct request, data = 2', async () => {
    const payload = { data: '2' }
    const response = await request(app).post('/convert').send(payload)

    expect(response.statusCode).toBe(200)
    expect(response.body.status).toBe(200)
    expect(response.body.data.length).toBe(3)
    expect(response.body.data).toContain('a')
    expect(response.body.data).toContain('b')
    expect(response.body.data).toContain('c')
})
