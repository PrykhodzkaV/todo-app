import { ToDoMutations, ToDoQueries, ToDoTypes } from './todo/index.js';

export const typeDefs = `#graphql
     type Query
     type Mutation
     ${ToDoTypes}
`
export const resolvers = {
    Query: {
        ...ToDoQueries,
    },
    Mutation: {
        ...ToDoMutations,
    }
}
