import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PrivateLayout from './layout/main/private-layout'
import Login from './pages/auth/login/login'
import Customers from './pages/customers/index'
import Dashboard from './pages/dashboard'
import Products from './pages/products'

interface IProps { }

const MainNavigation: React.FC<IProps> = (props) => {
  return (
    <>
      <Router>
        <Switch>
          <Route path={"/"} component={Login} exact />
          <PrivateLayout path={"/dashboard"} component={Dashboard} exact />
          <PrivateLayout path={"/customers"} component={Customers} exact />
          <PrivateLayout path={"/products"} component={Products} exact />
        </Switch>
      </Router>
    </>
  )
}

export default MainNavigation
