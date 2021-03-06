import React from 'react';
import { Switch } from 'react-router-dom';
// import { toast } from 'react-toastify';

import MyRoute from './myRoute';
import Login from '../pages/Login';
import Page404 from '../pages/Page404';
export default function Routes() {
  // toast.success('Sucesso mermao', {
  //   toastId: 'successId',
  // });
  // toast.error('Sucesso mermao', {
  //   toastId: 'errorId',
  // });
  return (
    <Switch>
      {/* component,  Irá rendezirar o componente de Login, que esta em pages
       * Path, fará chegar se existe  a rota na qual o usuario esta buscando
       */}
      <MyRoute exact path="/" component={Login} />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}
