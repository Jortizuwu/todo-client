import React, { useEffect, useState } from 'react'
import {
  Box,
  Button,
  Center,
  FormControl,
  HStack,
  Heading,
  Icon,
  Input,
  Spinner,
  Text,
  VStack,
  WarningOutlineIcon,
} from 'native-base'
import { Ionicons } from '@expo/vector-icons'
import { Pressable } from 'react-native'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { schema, useDefaultValues } from './utils/login'

export type FormData = {
  email: string
  password: string
}

function Login() {
  const [show, setShow] = useState(false)
  const {
    formValues: { defaultValues },
    isLoading,
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

  useEffect(() => {
    reset(defaultValues)
  }, [defaultValues, reset])

  if (isLoading)
    return (
      <Center>
        <Spinner mt="5" size="lg" />
      </Center>
    )

  return (
    <Box
      safeArea
      h="full"
      px="2"
      _dark={{
        background: 'dark.100',
      }}
      _light={{
        background: 'light.100',
      }}>
      <Box safeArea p="2">
        <Heading
          size="lg"
          fontWeight="600"
          color="coolGray.800"
          _dark={{
            color: 'warmGray.50',
          }}>
          Welcome
        </Heading>
        <Heading
          mt="1"
          _dark={{
            color: 'warmGray.200',
          }}
          color="coolGray.600"
          fontWeight="medium"
          size="xs">
          Sign in to continue!
        </Heading>

        <VStack space={3} mt="5">
          <Controller
            name="email"
            control={control}
            render={({ field: { onChange, ...rest } }) => (
              <FormControl isInvalid={!!errors.email}>
                <Input
                  {...rest}
                  onChangeText={onChange}
                  InputLeftElement={
                    <Icon
                      as={<Ionicons name="person" />}
                      size={5}
                      ml="2"
                      color="muted.400"
                    />
                  }
                  placeholder="Email"
                />
                <FormControl.ErrorMessage
                  leftIcon={<WarningOutlineIcon size="xs" />}>
                  {errors.email?.message}
                </FormControl.ErrorMessage>
              </FormControl>
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field: { onChange, ...rest } }) => (
              <FormControl isInvalid={!!errors.password}>
                <Input
                  {...rest}
                  onChangeText={onChange}
                  type={show ? 'text' : 'password'}
                  InputRightElement={
                    <Pressable onPress={() => setShow(!show)}>
                      <Icon
                        as={<Ionicons name={show ? 'eye' : 'eye-off'} />}
                        size={5}
                        mr="2"
                        color="muted.400"
                      />
                    </Pressable>
                  }
                  placeholder="Password"
                />
                <FormControl.ErrorMessage
                  leftIcon={<WarningOutlineIcon size="xs" />}>
                  {errors.password?.message}
                </FormControl.ErrorMessage>
              </FormControl>
            )}
          />
          <Button
            mt="2"
            colorScheme="indigo"
            onPress={handleSubmit(e => submit(e))}>
            Sign in
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text
              fontSize="sm"
              color="coolGray.600"
              _dark={{
                color: 'warmGray.200',
              }}>
              Im a new user
            </Text>
          </HStack>
        </VStack>
      </Box>
    </Box>
  )
}

export default Login
