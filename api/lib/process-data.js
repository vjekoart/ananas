const keymap = require('./keymap.json')
const dictionary = require('./dictionary.json')

/**
 * Find the most frequent words which correspond to a number pattern.
 */
function findInDictionary (number)
{
    return []
}

/**
 * Get all the possible combinations for given number.
 * Ignore combinations present in 'exclude' array.
 */
function getAllPossibleWords (number, exclude)
{
    return []
}

/**
 * Convert number to word list, and return an array with results
 * ordered by relevance.
 */
function processData (number)
{
    /* Find the most frequent words which correspond to a number pattern */
    const firstArray = findInDictionary(number)

    /* Get all the possible combinations, excluding words from firstArray */
    const secondArray = getAllPossibleWords(number, firstArray)

    /* Return results */
    return firstArray.concat(secondArray)
}

module.exports = processData
