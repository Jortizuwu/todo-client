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
import useNotification from '../../../../shared/hooks/useNotification'

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
  const { addToast } = useNotification()

  const login = useCallback(
    async (values: FormData) => {
      try {
        const resp = await authService.login({
          ...values,
          email: values.email.toLowerCase(),
        })
        setUser(resp)
        addToast('wellcome back', { code: 'SUCCESS' })
        navigate('Root')
      } catch (error) {
        addToast('opps!!!', { code: 'ERROR' })
      }
    },
    [navigate, setUser, addToast],
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
