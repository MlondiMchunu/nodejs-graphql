const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const app = express();
const {GraphQLSchema,
GraphQlObjectType
} = require("graphql")


const PORT = 5000

app.use('/graphql', graphqlHTTP({
    graphql:true
}))


app.listen(PORT,()=>{
    console.log(`Server running in port ${PORT}`)
})