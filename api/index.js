const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

/**
 * Endpoint: POST /convert
 *
 * Example of request body:
 * {
 *     data: 325
 * }
 *
 * Example of successful response:
 * {
 *     status: 200,
 *     data: [ 'a', 'b', 'c' ]
 * }
 *
 * Example of unsuccessful response:
 * {
 *     status: 400,
 *     message: 'Bad request: missing request body or data property.'
 * }
 */
app.post('/convert', (req, res) => {
    /* Empty request */
    // TODO

    /* Malformed request */
    // TODO

    /* Process request data */
    // TODO
})

module.exports = app
