/**
 * Returns 'true' if requst is empty, and 'false' otherwise.
 */
function isEmptyRequest (request)
{
    if (!request)
        return true

    if (!request.body)
        return true

    if (request.body.data === undefined)
        return true

    return false
}

module.exports = isEmptyRequest
