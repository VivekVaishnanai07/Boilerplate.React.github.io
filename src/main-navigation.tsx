import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PrivateLayout from './layout/main/private-layout'
import Login from './pages/auth/login/login'
import Customer from './pages/customer/index'
import Dashboard from './pages/dashboard'
import Error from './pages/error'
import Product from './pages/product/index'

interface IProps { }

const MainNavigation: React.FC<IProps> = (props) => {
  return (
    <>
      <Router>
        <Switch>
          <Route path={"/"} component={Login} exact />
          <PrivateLayout path={"/dashboard"} component={Dashboard} exact />
          <PrivateLayout path={"/customer"} component={Customer} exact />
          <PrivateLayout path={"/product"} component={Product} exact />
          <PrivateLayout path={"*"} component={Error} exact />
        </Switch>
      </Router>
    </>
  )
}

export default MainNavigation
