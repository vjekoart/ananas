const fs = require('fs')
const jsdom = require('jsdom')

const { JSDOM } = jsdom

JSDOM.fromFile('./5000-most-common-words.html').then(dom => {
    const target = dom.window.document.querySelector('[data-target]')
    const results = []

    const rows = target.querySelectorAll('tr')

    /* Extract words from rows */
    for (const row of rows) {
        const cells = row.querySelectorAll('td')
        const position = parseInt(cells[0].innerHTML, 10)

        if (!isNaN(position)) {
            const word = cells[1].innerHTML.replace('&nbsp;&nbsp;&nbsp;', '')

            results.push(word)
        }
    }

    /* Save array of words to dictionary */
    fs.writeFile('../lib/dictionary.json', JSON.stringify({
        words: results
    }), error => {
        if (error)
            throw error

        console.log('Array of words saved to lib/dictionary.json file!')
    })
})
