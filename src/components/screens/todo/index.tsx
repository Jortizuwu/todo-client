import React, { useEffect, useRef } from 'react'
import {
  Box,
  Button,
  Center,
  FormControl,
  Input,
  Spinner,
  TextArea,
  VStack,
} from 'native-base'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { schema, useDefaultValues } from './utils/create'

export type FormData = {
  title: string
  description: string | null
}

function Todo() {
  const {
    formValues: { defaultValues },
    isLoading,
    status,
    submit,
  } = useDefaultValues()

  const {
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<FormData>({
    mode: 'all',
    defaultValues,
    resolver: yupResolver(schema),
  })
  const prevDefaultValuesRef = useRef(defaultValues)

  useEffect(() => {
    const prevDefaultValues = prevDefaultValuesRef.current
    const currentDefaultValues = defaultValues

    if (
      JSON.stringify(currentDefaultValues) !== JSON.stringify(prevDefaultValues)
    ) {
      reset(currentDefaultValues)
      prevDefaultValuesRef.current = currentDefaultValues
    }
  }, [defaultValues, reset])

  if (isLoading)
    return (
      <Center>
        <Spinner mt="5" size="lg" />
      </Center>
    )

  return (
    <Box p="2" h="full" justifyContent="space-between">
      <VStack space={3} mt="5" flex={1} justifyContent="flex-start">
        <Controller
          name="title"
          control={control}
          render={({ field: { onBlur, onChange, value } }) => (
            <FormControl isInvalid>
              <Input
                onBlur={onBlur}
                onChangeText={onChange}
                onChange={onChange}
                value={value}
                variant="unstyled"
                placeholder="Title"
                size="2xl"
                fontWeight="bold"
              />
              <FormControl.ErrorMessage ml="3">
                {errors.title?.message}
              </FormControl.ErrorMessage>
            </FormControl>
          )}
        />
        <Controller
          name="description"
          control={control}
          render={({ field: { onBlur, onChange, value } }) => (
            <FormControl isInvalid>
              <TextArea
                h="90%"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value || undefined}
                size="xl"
                aria-label="description"
                variant="unstyled"
                placeholder="Description"
                autoCompleteType={undefined}
              />
              <FormControl.ErrorMessage ml="3">
                {errors.description?.message}
              </FormControl.ErrorMessage>
            </FormControl>
          )}
        />
      </VStack>
      <Button
        size="lg"
        borderColor="blue.100"
        variant="outline"
        borderRadius="lg"
        alignItems="center"
        // rightIcon={<Icon as={<Ionicons name="send" />} size="lg" />}
        onPress={handleSubmit(e => submit(e))}>
        {status}
      </Button>
    </Box>
  )
}

export default Todo
