const express = require('express')
const expressGraphQL = require("express-graphql")
const app = express();
const PORT = 5000

app.listen(PORT,()=>{
    console.log(`Server running in port ${PORT}`)
})