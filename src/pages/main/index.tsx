import React, { useState, useContext } from 'react';
import { RouteComponentProps, Switch, Route } from 'react-router';
import { AppContext, AppContextProps } from '../../App';
import Main from './main';

// 声明状态类型
export interface MainContextProps {
  title: string;
  count: number;
}

export const MainContext = React.createContext({} as ContextAttr<MainContextProps>);

const MainProvider = () => {
  // 获取全局状态
  const appContext: ContextAttr<AppContextProps> = useContext(AppContext);
  
  //可以在这里进行一些改变，以保留核心业务代码的class组件写法，毕竟hooks的生命周期并不是很完善
  //const mainContext: ContextAttr<MainContextProps> = useContext(MainContext);

  // 定义状态初始值
  const [ state, setState ] = useState({
    title: '测试',
    count: 1
  } as MainContextProps);

  // 提供给状态组件
  return (
    <MainContext.Provider 
      value={{
        state,
        setState
      }}
    >
      <Main 
        appContext={appContext} 
        //mainContext={mainContext} 传递mainContext至下层 保留下层的class组件写法
      />
    </MainContext.Provider>
  )
}


export default MainProvider;
