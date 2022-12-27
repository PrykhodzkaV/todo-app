import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs, resolvers } from './schema/index.js';
import * as dotenv from 'dotenv';
dotenv.config();
import {mongooseConnectDB} from './connectDB.js';
mongooseConnectDB();
const PORT = process.env.PORT;
const server = new ApolloServer({
    typeDefs,
    resolvers,
});
startStandaloneServer(server, {
    listen: { port: Number(PORT) },
}).then(({ url }) => console.log(`🚀 Server ready at: ${url}`));
