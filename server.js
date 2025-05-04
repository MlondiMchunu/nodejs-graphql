console.log({ starting: true });

const express = require('express');
const app = express();

const { graphqlHTTP } = require('express-graphql');
const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLID } = require('graphql');

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
        },
        node: {
            type: GraphQLString,
            args: {
                id: {
                    type: new GraphQLNonNull(GraphQLID)
                }
            },
            resolve(source, args) {
                return inMemoryStore[args.key]
            }
        }
    }
});

let inMemoryStore = {}; //whwnever you restart the server, it will clear data
const RootMutation = new GraphQLObjectType({
    name: 'RootMutation',
    description: 'The root mutation',
    fields: {
        setNode: {
            type: GraphQLString,
            args: {
                id: {
                    type: new GraphQLNonNull(GraphQLID)
                },
                value: {
                    type: new GraphQLNonNull(GraphQLString)
                }
            },
            resolve(source, args) {
                inMemoryStore[args.key] = args.value;
                return inMemoryStore[args.key];
            }
        },
        setProfile: {
            type: GraphQLString,
            args: {
                id: {
                    type: new GraphQLNonNull(GraphQLID)
                },
                value: {
                    type: new GraphQLNonNull(GraphQLString)
                }
            },
            resolve(source, args) {
                inMemoryStore[args.key] = args.value;
                return inMemoryStore[args.key];
            }
        }
    }
});

const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: RootMutation,

});

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));

app.listen(5000, () => {
    console.log(`Server running on port 5000`)
});