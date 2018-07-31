const jsdom = require('jsdom')
const { JSDOM } = jsdom

JSDOM.fromFile('./5000-most-common-words.html').then(dom => {
    const target = dom.window.document.querySelector('[data-target]').innerHTML
    console.log(target)
})
