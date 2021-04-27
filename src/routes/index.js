import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Page404 from '../pages/Page404';
export default function Routes() {
  return (
    <Switch>
      {/* component,  Irá rendezirar o componente de Login, que esta em pages
       * Path, fará chegar se existe  a rota na qual o usuario esta buscando
       */}
      <Route exact path="/" component={Login} />
      <Route path="*" component={Page404} />
    </Switch>
  );
}
