// import { create } from 'zustand'
// import { createJSONStorage, persist } from 'zustand/middleware'
// import AsyncStorage from '@react-native-async-storage/async-storage'

import { StateCreator } from 'zustand'

import { User, loginResponse } from '../shared/common/interface'

export interface AuthSlice {
  user: User | null
  token: string
  setUser: (payload: loginResponse) => void
  removeUser: () => void
}

export const createAuthSlice: StateCreator<
  AuthSlice,
  [],
  [],
  AuthSlice
> = set => ({
  user: null,
  token: '',
  setUser: ({ token, user }) => set({ token, user }),
  removeUser: () => set({ user: null }),
})
