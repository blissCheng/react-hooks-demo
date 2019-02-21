
// context
interface ContextAttr<U> {
  state: U,
  setState: any
}
// 菜单栏
interface MenuData {
  name: string,
  path?: string,
  icon?: string,
  component?: any;
  children?: MenuData[]
}