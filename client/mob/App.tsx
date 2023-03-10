/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {HomeScreen} from './src/screens/HomeScreen';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import {API_URL} from '@env';
const client = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache(),
});
const App = () => {
  return (
    <ApolloProvider client={client}>
      <HomeScreen />
    </ApolloProvider>
  );
};

export default App;
