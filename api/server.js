const app = require('./index')

/* Port on which API should listen */
const port = process.env.PORT || 3333

/* Start the application */
app.listen(port, () => {
    console.log(`API listening on port ${ port }...`)
})
