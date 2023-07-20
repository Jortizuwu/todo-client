export type RootTabsParamList = {
  Todos: undefined
  Home: undefined
  Settings: undefined
}

export interface TABS {
  id: string
  name: keyof RootTabsParamList
  component: () => JSX.Element
  Icon: JSX.Element
}
