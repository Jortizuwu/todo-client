import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackTodoParamList } from '../../app/navigator/stack/model'

export interface Props
  extends NativeStackScreenProps<RootStackTodoParamList, 'HomeTodo'> {}
