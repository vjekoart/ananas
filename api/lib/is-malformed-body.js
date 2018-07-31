/**
 * Returns 'true' if requst body is malformed, and 'false' otherwise.
 */
function isMalformedBody (body)
{
    if (!body)
        return true

    if (!body.data)
        return true

    const toString = body.data.toString()

    if (!toString)
        return true

    return toString.match(/^[2-9]+$/) === null
}

module.exports = isMalformedBody
