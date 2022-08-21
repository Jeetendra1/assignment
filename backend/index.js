const express = require('express')

var cors = require('cors')
var app = express()

app.use(cors())

const port = 5000

app.use(express.json())

// Available routes
app.use('', require('./routes'));

app.listen(port, () => {
  console.log(`Ecommerce backend listening on port ${port}`)
})