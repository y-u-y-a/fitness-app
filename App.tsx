import { ApolloProvider } from '@apollo/client'
import React from 'react'
import { initializeApollo } from './src/libs/apolloClient'
import { AppStackNavigator } from './src/navigators/AppStackNavigator'

export default () => {
  const client = initializeApollo()
  return (
    <ApolloProvider client={client}>
      <AppStackNavigator />
    </ApolloProvider>
  )
}
