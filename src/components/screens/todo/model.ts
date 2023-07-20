import { StackScreenProps } from '@react-navigation/stack'
import { RootStackTodoParamList } from '../../app/navigator/stack/model'

export interface Props
  extends StackScreenProps<RootStackTodoParamList, 'TodoScreen'> {}
