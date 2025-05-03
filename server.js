console.log({ starting: true });

const express = require('express');
const app = express();

const { graphqlHTTP } = require('express-graphql');
const { GraphQLSchema, GraphQLObjectType, GraphQLString,GraphQLNonNull, GraphQLID } = require('graphql');

const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    description: 'The Root query',
    fields: {
        viewer: {
            type: GraphQLString,
            resolve() {
                return 'viewer';
            }
        },
        hello: {
            type: GraphQLString,
            resolve() {
                return 'Hello World'
            }
        }
    }
});

const schema = new GraphQLSchema({
    query: RootQuery

});

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));

app.listen(5000, () => {
    console.log(`Server running on port 5000`)
});