import { Redirect, Route } from "react-router";
import { isLogin } from "../../pages/util/navbar-config";

const PrivateLayout = ({ component: Component, ...rest }: any) => {
  return (
    <>
      <Route {...rest} render={props => (isLogin() ? <Component {...props} /> : <Redirect to={'/'} />)} />
    </>
  )
}

export default PrivateLayout;