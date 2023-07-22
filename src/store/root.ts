import { create } from 'zustand'
import { persist, devtools, createJSONStorage } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { AuthSlice, createAuthSlice } from './auth'
import { UiSlice, createUiSlice } from './ui'

const usePersistedStore = create<AuthSlice & UiSlice>()(
  devtools(
    persist(
      (...a) => ({
        ...createUiSlice(...a),
        ...createAuthSlice(...a),
      }),
      {
        name: 'bound-persisted-store',
        storage: createJSONStorage(() => AsyncStorage),
      },
    ),
  ),
)

export default usePersistedStore
