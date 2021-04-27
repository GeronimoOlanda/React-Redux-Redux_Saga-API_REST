import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
// eslint-disable-next-line react/prop-types
export default function MyRoute({ component: Component, isClosed, ...rest }) {
  //verificar se o usuario esta logado
  const isLoggedId = false;
  if (isClosed && !isLoggedId) {
    // se a rota estiver fechada e o usuari nao estiver logado, ira redirecionar para login
    return (
      <Redirect
        to={{ pathname: '/login', state: { prevPath: rest.location.pathname } }}
      />
    );
  }
  return <Route {...rest} component={Component} />;
}
MyRoute.defaultProps = {
  isClosed: false,
};
MyRoute.PropTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  isClosed: PropTypes.bool,
};
