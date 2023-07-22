import { useCallback } from 'react'
import * as Yup from 'yup'
import { useMutation, useQueryClient } from 'react-query'
import { StackNavigationProp } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native'

import { FormData } from '..'
import QUERY_KEYS from '../../../../shared/constants/queryKyes'
import authService from '../../../../shared/services/auth'
import { RootStackRootParamList } from '../../../app/navigator/stack/model'
import usePersistedStore from '../../../../store'

type NavigationProps = StackNavigationProp<RootStackRootParamList>

export const schema = Yup.object()
  .shape({
    email: Yup.string()
      .required('Email is required!')
      .min(1)
      .trim()
      .email('the value must a email'),
    password: Yup.string().required('Password is required!').min(1).trim(),
  })
  .required()

const initValues = {
  email: '',
  password: '',
}

export const useDefaultValues = () => {
  const queryClient = useQueryClient()
  const { navigate } = useNavigation<NavigationProps>()
  const { setUser } = usePersistedStore(state => state)

  const login = useCallback(
    async (values: FormData) => {
      try {
        const resp = await authService.login({
          ...values,
          email: values.email.toLowerCase(),
        })
        setUser(resp)
        navigate('Root')
      } catch (error) {
        console.log(error)
      }
    },
    [navigate, setUser],
  )

  const { mutate, isLoading } = useMutation(login, {
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.AUTH])
    },
  })

  return {
    isLoading,
    submit: mutate,
    formValues: {
      defaultValues: initValues,
    },
    status: 'login',
  }
}
