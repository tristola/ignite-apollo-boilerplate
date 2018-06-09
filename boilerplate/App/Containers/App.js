import '../Config'
import DebugConfig from '../Config/DebugConfig'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import RootContainer from './RootContainer'
import createStore from '../Redux'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo';
import { AsyncStorage } from 'react-native';
import { persistCache } from 'apollo-cache-persist';
import Reactotron from 'reactotron-react-native'

// const YOUR_GRAPHQL_API_URL= 'https://api.react-finland.fi/graphql-2018'
const YOUR_GRAPHQL_API_URL= ''
const cache = new InMemoryCache()
persistCache({
  cache,
  storage: AsyncStorage,
})

const client = new ApolloClient({
  link: new HttpLink({uri: YOUR_GRAPHQL_API_URL}),
  cache
});
// create our store
const store = createStore()

/**
 * Provides an entry point into our application.  Both index.ios.js and index.android.js
 * call this component first.
 *
 * We create our Redux store here, put it into a provider and then bring in our
 * RootContainer.
 *
 * We separate like this to play nice with React Native's hot reloading.
 */
DebugConfig.useReactotron && require('../Config/ReactotronConfig')
class App extends Component {
  render () {
    return (
      <ApolloProvider client={client}>
        <Provider store={store}>
          <RootContainer />
        </Provider>
      </ApolloProvider>
    )
  }
}

// allow reactotron overlay for fast design in dev mode
export default App
