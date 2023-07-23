import { useCallback } from 'react'
import * as Yup from 'yup'
import { useMutation, useQueryClient } from 'react-query'
import { useNavigation, useRoute } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import { FormData } from '..'
import QUERY_KEYS from '../../../../shared/constants/queryKyes'
import todoService from '../../../../shared/services/todos'
import {
  RoutePropTypeRootStack,
  useGetTodo,
} from '../../../../shared/hooks/react-query/todo'
import { RootStackRootParamList } from '../../../app/navigator/stack/model'
import useNotification from '../../../../shared/hooks/useNotification'

type NavigationProps = StackNavigationProp<RootStackRootParamList>

export const schema = Yup.object()
  .shape({
    title: Yup.string().required('Title required!').min(1).trim(),
    description: Yup.string(),
  })
  .required()

const initValues = {
  title: '',
  description: undefined,
}

export const useDefaultValues = () => {
  const queryClient = useQueryClient()
  const { addToast } = useNotification()
  const { todo, isLoading: isLoadingGet } = useGetTodo()
  const { params } = useRoute<RoutePropTypeRootStack>()
  const { navigate } = useNavigation<NavigationProps>()

  const create = useCallback(
    async (values: FormData) => {
      try {
        await todoService.createTodo({
          ...values,
        })
        addToast('todo create', { code: 'SUCCESS' })
        navigate('Root')
      } catch (error) {
        addToast('opps!!', { code: 'ERROR' })
      }
    },
    [navigate, addToast],
  )

  const update = useCallback(
    async (values: FormData) => {
      try {
        if (!params.id) return
        await todoService.updateTodo(params.id, {
          ...values,
        })
        addToast('todo create', { code: 'SUCCESS' })
      } catch (error) {
        addToast('opps!!', { code: 'ERROR' })
      }
    },
    [params, addToast],
  )

  const { mutate, isLoading } = useMutation(params.id ? update : create, {
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.TODO])
    },
  })

  return {
    isLoading: isLoadingGet || isLoading,
    submit: mutate,
    formValues: {
      defaultValues: todo
        ? {
            title: todo.title,
            description: todo.description,
          }
        : initValues,
    },
    status: params.id ? 'Edit' : 'Create',
    isEditing: !!params.id,
  }
}
