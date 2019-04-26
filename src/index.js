import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import HelloWorld from 'components/helloworld'
import List from 'components/list'
import ClassComponent from 'components/class-component'
import Event from 'components/event'
import Parent from 'components/parent'
import ChildrenApi from 'components/children-api'
import Props from 'components/props'
import IInput from 'components/input'
import Counter from 'containers/counterContainer'
import Saga from 'containers/sagaContainer'
import TODO from 'containers/todoContainer'
import HOC from 'components/hoc'
import Hooks from 'components/hooks'
import Motion from 'components/motion'

import { Provider } from 'react-redux'


import store from './store/index'

/**
 * 单个文件
 */
// ReactDOM.render(
//   <Parent />,
//   document.getElementById("app")
// );

// ReactDOM.render(
//   <Props />,
//   document.getElementById("app")
// );

/**
 * 路由
 */

ReactDOM.render(
  <Provider store = {store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HelloWorld} />
        <Route path="/list" component={List} />
        <Route path="/parent" component={Parent} />
        <Route path="/counter" component={Counter} />
        <Route path="/saga" component={Saga} />
        <Route path="/todo" component={TODO} />
        <Route path="/hook" component={Hooks} />
        <Route path="/motion" component={Motion} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
)

// ReactDOM.render(
//   <BrowserRouter>
//     <div>
//       <Route path="/" component={HelloWorld} />
//       <Route path="/list" component={List} />
//     </div>
//   </BrowserRouter>,
//   document.getElementById('app')
// )

// ReactDOM.render(
//   <BrowserRouter>
//     <Switch>
//       <Route path="/" exact component={HelloWorld} />
//       <Route path="/list" component={List} />
//     </Switch>
//   </BrowserRouter>,
//   document.getElementById('app')
// )
