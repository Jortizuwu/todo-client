import { useQuery } from 'react-query'
import { useRoute, RouteProp } from '@react-navigation/native'

import todosServices from '../../services/todos'
import QUERY_KEYS from '../../constants/queryKyes'
import { RootStackRootParamList } from '../../../components/app/navigator/stack/model'

export type RoutePropTypeRootStack = RouteProp<
  RootStackRootParamList,
  'TodoDetails'
>

export const useGetTodo = () => {
  const { params } = useRoute<RoutePropTypeRootStack>()

  const { data: todo, isLoading } = useQuery(
    [QUERY_KEYS.TODO, params?.id],
    // TODO: CHANGE THIS
    () => todosServices.getTodo(params.id),
    {
      enabled: !!params?.id,
    },
  )
  return {
    todo,
    isLoading,
  }
}

export const useListAllTodos = () => {
  const { data: todos, isLoading } = useQuery(
    [QUERY_KEYS.TODO],
    () => todosServices.listAllTodo(),
    // {
    //   enabled: window.localStorage.getItem('token')
    // }
  )

  return {
    todos,
    isLoading,
  }
}

// export const useGetPublicationsByUserId = () => {
//   const [searchParams] = useSearchParams()
//   const qparams = searchParams.get('id')
//   const location = useLocation()

//   const { data: publications, isLoading } = useQuery(
//     [QUERY_KEYS.PUBLICATIONS, qparams],
//     () => publicationServices.getPublicationsByUserId(qparams),
//     {
//       enabled: !!qparams && location.pathname.includes('profile'),
//     },
//   )

//   return {
//     publications,
//     isLoading,
//   }
// }
