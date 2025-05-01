const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const app = express();

//needed to create a query
const { GraphQLSchema,
    GraphQLObjectType,
    GraphQLString
} = require("graphql")

const PORT = 5000

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Hello World',
        fields: () => ({
            message: {
                type: GraphQLString,
                resolve: () => `Hello World`
            }
        })
    })
})

app.use('/graphql', graphqlHTTP({
    schema:schema,
    graphql: true
}))


app.listen(PORT, () => {
    console.log(`Server running in port ${PORT}`)
})