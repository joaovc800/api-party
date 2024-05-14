const express = require('express')
const cors = require('cors')
const conn = require('./db/conn')

const app = express()
app.use(express.json())
app.use(cors())

const routes = require("./routes/router")
app.use("/api", routes)

app.listen(3000, function(){
    conn()
    console.log('Server on')
})
