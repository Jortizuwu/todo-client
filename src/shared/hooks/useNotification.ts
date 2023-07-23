import React from 'react'
import { useToast } from 'native-base'

interface Type {
  code: 'SUCCESS' | 'ERROR' | 'WARNING'
}

const options = {
  SUCCESS: 'success.100',
  ERROR: 'danger.100',
  WARNING: 'warning.100',
}

export default function useNotification() {
  const toast = useToast()
  const toastIdRef = React.useRef()

  function addToast(message: string, type: Type) {
    toastIdRef.current = toast.show({
      title: message,
      background: options[type.code],
      shadow: 0,
      padding: 1,
      fontWeight: 'black',
      _dark: {
        color: 'white',
      },
    })
  }
  return {
    addToast,
  }
}
