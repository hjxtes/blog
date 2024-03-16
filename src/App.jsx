import React, { useEffect } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import routes from '@/routes'


const App = props => {
  // 解构 route
  function renderRoutes(routes, contextPath) {
    const children = []

    const renderRoute = (item, routeContextPath) => {
      let newContextPath = item.path ? `${routeContextPath}/${item.path}` : routeContextPath
      newContextPath = newContextPath.replace(/\/+/g, '/')
      // todo 后续根据token在这边添加重定向
      // if (role !== 1) {
      //   item = {
      //     ...item,
      //     component: () => <Redirect to='/' />,
      //     children: []
      //   }
      // }
      if (!item.component) return

      if (item.childRoutes) {
        const childRoutes = renderRoutes(item.childRoutes, newContextPath)
        children.push(
          <Route
            key={newContextPath}
            render={props => <item.component {...props}>{childRoutes}</item.component>}
            path={newContextPath}
          />
        )
        item.childRoutes.forEach(r => renderRoute(r, newContextPath))
      } else {
        children.push(<Route key={newContextPath} component={item.component} path={newContextPath} exact />)
      }
    }

    routes.forEach(item => renderRoute(item, contextPath))

    return <Switch>{children}</Switch>
  }

  const children = renderRoutes(routes, '/')
  return (
    <BrowserRouter>
      {children}
    </BrowserRouter>)
}

export default App