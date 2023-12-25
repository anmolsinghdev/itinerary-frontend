import './App.css'
import {
  Redirect,
  Route,
  RouteProps,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom'
import { Loader } from './components'
import NotFound from './pages/NotFound'
interface CustomRouteProps extends RouteProps {
  children?: React.ReactNode
}

const TrackedRoute = ({
  children,
  ...rest
}: CustomRouteProps): React.ReactElement => {
  return <Route {...rest}>{children}</Route>
}

const PrivateRoute = ({ children }: CustomRouteProps) => {
  const AUTH = false
  return AUTH ? children : <Redirect to="/login" />
}

function App() {
  return (
    <Router>
      <Switch>
        <TrackedRoute exact path={'/admin'}>
          <PrivateRoute>
            <h1>Hello World</h1>
          </PrivateRoute>
        </TrackedRoute>
        <TrackedRoute exact path={'/contact'}>
          <PrivateRoute>
            <h1>Hello contact</h1>
          </PrivateRoute>
        </TrackedRoute>
        <TrackedRoute exact path={'/login'}>
          <h1>Login</h1>
          <Loader />
        </TrackedRoute>
        <TrackedRoute exact path={'/'}>
          <h1>Home Page</h1>
          <Loader size={100} />
        </TrackedRoute>
        <TrackedRoute path="*" exact>
          <NotFound />
        </TrackedRoute>
      </Switch>
    </Router>
  )
}

export default App
