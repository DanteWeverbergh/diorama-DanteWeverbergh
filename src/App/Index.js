import { Route, Switch, Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import Start from './Start';
import App from './Diorama';

function Routing() {
  return (
    <>
      <Switch>
        <Route path={'/home'}>
          <Start />
        </Route>
        <Route path={'/diorama'}>
          <App />
        </Route>
        <Redirect to={'/home'} />
      </Switch>
    </>
  );
}

export default Routing;
