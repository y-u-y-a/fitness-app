import { ApolloProvider } from '@apollo/client'
import React from 'react'
import { client } from './src/libs/apolloClient'
import { AppStackNavigator } from './src/navigators/AppStackNavigator'

export default () => {
  return (
    <ApolloProvider client={client}>
      <AppStackNavigator />
    </ApolloProvider>
  )
}
