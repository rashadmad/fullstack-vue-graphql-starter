const { ApolloServer, gql } = require('apollo-server');

const todos = [
    { task: 'wash car', completed: false },
    { task: 'clean car', completed: true },
];

const typeDefs = gql` 
    type Query {
        task: String
        completed: Boolean
    }
`;

const server = new ApolloServer({
    typeDefs: typeDefs
});

server.listen(4500).then(({ url }) => {
    console.log(`server listening`)
});