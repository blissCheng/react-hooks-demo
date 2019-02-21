import React, { createContext, useState } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import menuData from './config/menus';
// 全局状态类型声明
export interface AppContextProps {

}
export const AppContext = createContext({} as ContextAttr<AppContextProps>);

const App = () => {
  // 全局状态
  const [ state, setState ] = useState({
    num: 1
  } as AppContextProps);
  return (
    <AppContext.Provider
      value={{
        state,
        setState
      }}
    >
      <BrowserRouter>
        <Switch>
          {
            menuData.map((item: MenuData) => (
              <Route
                exact
                key={item.name}
                path={item.path}
                component={item.component}
              />
            ))
          }
        </Switch>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
