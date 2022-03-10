import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

import { AppStackNavigator } from './src/navigators/AppStackNavigator'

export default () => {
  const queryClient: QueryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <AppStackNavigator />
    </QueryClientProvider>
  )
}
