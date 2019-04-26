import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ClassComponent from 'components/class-component'
import Event from 'components/event'

const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    render={props => (
      // pass the sub-routes down to keep nesting
      <route.component {...props} routes={route.routes} />
    )}
  />
);


const routes = [
  {
    path: "/list/event",
    component: Event
  },
  {
    path: "/list/class",
    component: ClassComponent
  }
];



const List = () => {
  const list = ['one', 'two', 'three']
  const a = true

  return (
    <div>
      <ul>
        {
          list.map((o, key) => <li key={key}>{o}</li>)
        }
      </ul>

      <div>
        dadsa
      </div>

      <div>
        {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
      </div>
    </div>
  )
}


export default List
