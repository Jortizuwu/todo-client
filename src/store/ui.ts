import { StateCreator } from 'zustand'

export interface UiSlice {
  toast: {
    message: string
  }
  setMessage: (message: string) => void
}

export const createUiSlice: StateCreator<UiSlice, [], [], UiSlice> = set => ({
  toast: {
    message: '',
  },
  setMessage: title => set(() => ({ toast: { message: title } })),
})
