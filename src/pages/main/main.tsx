import React, { useState, useContext, useEffect, ContextType } from 'react';
import { MainContext, MainContextProps } from './index';
import { AppContextProps } from '../../App';

interface Props {
  appContext: ContextAttr<AppContextProps>
}
const Main = (props: Props) => {
  const context: ContextAttr<MainContextProps> = useContext(MainContext);
  const { state } = context;
  const handleClick = () => {
    context.setState({
      ...context.state,
      count: state.count + 1
    });

    console.log(context);
  }

  return (
    <div>
      { state.count }

      <button
        onClick={handleClick}
      >click me</button>
    </div>
  )
}

export default Main;