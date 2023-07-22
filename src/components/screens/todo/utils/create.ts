import { useCallback } from 'react'
import * as Yup from 'yup'
import { useMutation, useQueryClient } from 'react-query'
import { useRoute } from '@react-navigation/native'

import { FormData } from '..'
import QUERY_KEYS from '../../../../shared/constants/queryKyes'
import todoService from '../../../../shared/services/todos'
import { RoutePropTypeRootStack } from '../../../../shared/hooks/react-query/todo'
import { Todo } from '../../../../shared/common/interface'

export const schema = Yup.object()
  .shape({
    title: Yup.string().required('Title required!').min(1).trim(),
    description: Yup.string().nullable(),
  })
  .required()

const initValues = {
  title: '',
  description: '',
}

export const useDefaultValues = (todo: Todo | undefined) => {
  const { params } = useRoute<RoutePropTypeRootStack>()
  const queryClient = useQueryClient()

  const create = useCallback(async (values: FormData) => {
    try {
      await todoService.createTodo({
        ...values,
      })
      // navigate('/jobs')
    } catch (error) {
      console.log(error)
    }
  }, [])

  const update = useCallback(
    async (values: FormData) => {
      try {
        if (!params.id) return
        await todoService.updateTodo(params.id, {
          ...values,
        })
        // navigate('/jobs')
      } catch (error) {
        console.log(error)
      }
    },
    [params],
  )

  const { mutate, isLoading } = useMutation(params.id ? update : create, {
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.TODO])
    },
  })

  return {
    isLoading,
    submit: mutate,
    formValues: {
      defaultValues: todo || initValues,
    },
    status: params.id ? 'Edit' : 'Create',
    isEditing: !!params.id,
  }
}
