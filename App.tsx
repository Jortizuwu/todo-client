import React from 'react'

import AppProvider from './src/components/app'

import 'react-native-gesture-handler'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider />
    </QueryClientProvider>
  )
}
