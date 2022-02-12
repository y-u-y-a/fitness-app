import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

import { HomeScreen } from './src/screens/Home'

export default () => {
  const queryClient: QueryClient = new QueryClient()
  //
  return (
    <QueryClientProvider client={queryClient}>
      <HomeScreen />
    </QueryClientProvider>
  )
}
