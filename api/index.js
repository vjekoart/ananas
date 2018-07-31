const express = require('express')
const bodyParser = require('body-parser')

const lib = require('./lib')

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
 *     message: 'Missing request body or data property.'
 * }
 */
app.post('/convert', (request, response) => {
    /* Empty request */
    if (lib.isEmptyRequest(request))
        return response
            .status(400)
            .json({
                status: 400,
                message: 'Missing request body or data property.'
            })

    /* Malformed body */
    if (lib.isMalformedBody(request.body))
        return response
            .status(400)
            .json({
                status: 400,
                message: 'Data property should consist of numbers [2-9].'
            })

    /* Process request data */
    const result = lib.processData(request.body.data)

    return response
        .status(200)
        .json({
            status: 200,
            data: result
        })
})

module.exports = app
