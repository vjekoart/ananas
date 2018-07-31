const keymap = require('./keymap.json')
const dictionary = require('./dictionary.json')

/**
 * Create regular expression for provided number.
 */
function createRegex (number)
{
    let expr = ''

    for (const digit of number)
        expr += `[${ keymap[digit].join('') }]`

    return '^' + expr + '$'
}

/**
 * Find the most frequent words which correspond to a number pattern.
 */
function findInDictionary (number)
{
    const expr = createRegex(number)
    const regexpr = new RegExp(expr, 'i')

    const words = dictionary.words
    const len = words.length
    const results = []

    for (let i = 0; i < len; ++i)
    {
        if (words[i].match(regexpr))
            results.push(words[i])
    }

    return results
}

/**
 * Get all the possible combinations for given number.
 * Ignore combinations present in 'exclude' array.
 */
function getAllPossibleWords (number, exclude)
{
    const results = []
    const createCombinations = (number, word) => {
        if (!number && exclude.indexOf(word) === -1)
            return results.push(word)

        const firstDigit = number[0]
        const letters = keymap[firstDigit] || []

        for (const letter of letters)
            createCombinations(number.substr(1), word + letter)
    }

    createCombinations(number, '')

    return results
}

/**
 * Convert number to word list, and return an array with results
 * ordered by relevance.
 */
function processData (number)
{
    number = number.toString()

    /* Find the most frequent words which correspond to a number pattern */
    const firstArray = findInDictionary(number)

    /* Get all the possible combinations, excluding words from firstArray */
    const secondArray = getAllPossibleWords(number, firstArray)

    /* Return results */
    return firstArray.concat(secondArray)
}

module.exports = processData
