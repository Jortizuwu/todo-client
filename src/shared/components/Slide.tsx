import { Alert, Slide, Text } from 'native-base'
import { InterfaceAlertProps } from 'native-base/lib/typescript/components/composites/Alert/types'

import React, { useState } from 'react'

interface Props {
  message: string
  status: InterfaceAlertProps['status']
}

function SlideComponent({ message, status }: Props) {
  const [isOpenTop] = useState(true)

  return (
    <Slide in={isOpenTop} placement="top">
      <Alert justifyContent="center" status={status} safeAreaTop={8}>
        <Alert.Icon />
        <Text color="error.600" fontWeight="medium">
          {message}
        </Text>
      </Alert>
    </Slide>
  )
}

export default SlideComponent
