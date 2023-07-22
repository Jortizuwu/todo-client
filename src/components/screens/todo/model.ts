import { StackScreenProps } from '@react-navigation/stack'
import { RootStackRootParamList } from '../../app/navigator/stack/model'

export interface Props
  extends StackScreenProps<RootStackRootParamList, 'TodoDetails'> {}
