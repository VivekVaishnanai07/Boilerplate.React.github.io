import { Redirect, Route } from "react-router";

const PublicLayout = ({ component: Component, restricted, ...rest }: any) => {
  const isLogin = localStorage.getItem('isLogin')
  const Login = () => {
    if (isLogin === "true") {
      return true;
    }
    return false;
  }
  return (
    <>
      <Route {...rest} render={props => (
        Login() && restricted ? <Component {...props} />
          : <Redirect to={'/'} />
      )} />
    </>
  )
}
export default PublicLayout;