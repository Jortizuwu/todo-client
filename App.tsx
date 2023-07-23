import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

import AppProvider from './src/components/app'
import 'react-native-gesture-handler'

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider />
    </QueryClientProvider>
  )
}
