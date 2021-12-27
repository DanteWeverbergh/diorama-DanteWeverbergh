import { Route, Switch, Redirect } from 'react-router';
import App from './App';

function Routing() {
  return (
    <Switch>
      <Route path="/">
        <h1>Welkom</h1>
        <a href="/diorama">Diorama</a>
      </Route>
      <Route path="/diorama">
        <h1>Diorama</h1>
      </Route>
      <Redirect to="/" />
    </Switch>
  );
}

export default Routing;
