const express = require('express')
const { graphqlHTTP } = require('express-graphql')

//needed to create a query
const { GraphQLSchema,
    GraphQLObjectType,
    GraphQLString
} = require("graphql")

const app = express();

const PORT = 5000


const query = new GraphQLObjectType({
    name: 'HelloWorld',
    description: 'The root query',
    fields: {
        /*viewer: {
            type: GraphQLString,
            resolve() {
                return 'viewer';
            }
        },*/
        hello:{
            type:GraphQLString,
            resolve(){
                return 'Hello World!'
            }
        }
    }
});

const schema = new GraphQLSchema({
    query: query
});


app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql:true //enables the GraphiQL UI for testing
}))

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server running in port ${PORT}`)
})