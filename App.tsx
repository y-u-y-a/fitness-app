import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

import { AppNavigator } from './src/navigators/AppNavigator'

export default () => {
  const queryClient: QueryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <AppNavigator />
    </QueryClientProvider>
  )
}
