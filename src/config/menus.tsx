import * as React from 'react';
import { render } from 'react-dom';

interface State {
  component: null | React.ComponentClass
}
// 懒加载组件
const compLoad = (importComp: any) => {
  
  class Machine extends React.Component {

    state: State = {
      component: null
    };
    
    async componentDidMount() {
      const { default: component } = await importComp;
      this.setState({
        component
      });
    }
    render() {
      const C = this.state.component;
      return C ? <C { ...this.props }/> : null
    }
  }

  return Machine;

}

const menuData: MenuData[] = [
  {
    name: '测试',
    path: '/main',
    component: compLoad(import('../pages/main'))
  }
];


export default menuData;