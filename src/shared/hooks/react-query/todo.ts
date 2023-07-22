import { useQuery } from 'react-query'

import todosServices from '../../services/todos'
import QUERY_KEYS from '../../constants/queryKyes'

export const useGetTodo = () => {
  //   const [searchParams] = useSearchParams()
  //   const params = useParams()
  //   const qparams = searchParams.get('id')
  //   const { data: publications, isLoading } = useQuery(
  //     [QUERY_KEYS.TODO, params.id || qparams],
  //     () => todosServices.getTodo(params.id || qparams),
  //     {
  //       enabled: !!params.id || !!qparams,
  //     },
  //   )
  //   return {
  //     publications,
  //     isLoading,
  //   }
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
