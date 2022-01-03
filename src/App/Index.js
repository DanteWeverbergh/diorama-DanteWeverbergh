import { Route, Switch, Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import Start from './Start';
import App from './Diorama';
import Cadeau from './Cadeau';

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
        <Route path={'/cadeau'}>
          <Cadeau />
        </Route>
        <Redirect to={'/home'} />
      </Switch>
    </>
  );
}

export default Routing;
