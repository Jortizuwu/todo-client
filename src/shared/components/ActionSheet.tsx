import { Actionsheet, Box, useDisclose } from 'native-base'
import React from 'react'

function ActionsheetComponent() {
  const { isOpen, onClose } = useDisclose()
  return (
    <Actionsheet isOpen={isOpen} onClose={onClose}>
      <Actionsheet.Content>
        <Box w="100%" px={4} justifyContent="center" />
        <Actionsheet.Item>Delete</Actionsheet.Item>
        <Actionsheet.Item isDisabled>Share</Actionsheet.Item>
        <Actionsheet.Item>Play</Actionsheet.Item>
        <Actionsheet.Item>Favourite</Actionsheet.Item>
        <Actionsheet.Item>Cancel</Actionsheet.Item>
      </Actionsheet.Content>
    </Actionsheet>
  )
}

export default ActionsheetComponent
