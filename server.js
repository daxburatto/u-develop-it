const express = require('express')
const db = require('./db/database')

const PORT = process.env.PORT || 3001
const app = express()

const apiRoutes = require('./routes/apiRoutes')

// Express Middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use('/api', apiRoutes)

// Default response for any other requests(Not Found) Catch all
app.get((req, res) => {
    res.status(404).end()
})

db.on('open', () => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
    })
})