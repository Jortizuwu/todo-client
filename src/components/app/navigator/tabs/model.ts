export type RootTabsParamList = {
  Todos: undefined
  Updates: undefined
  History: undefined
}

export interface TABS {
  id: string
  name: keyof RootTabsParamList
  component: () => JSX.Element
  Icon: JSX.Element
}
