import React, { Fragment } from "react";
import { Navigate } from "react-router-dom";

export const PublicRoute = ({
  component: Component,
  authenticated,
  ...rest
}: any) => {
  return (
    <Fragment>
      {authenticated === false ? <Component {...rest} /> : <Navigate to="/" />}
    </Fragment>
  );
};

export const PrivateRoute = ({
  component: Component,
  authenticated,
  ...rest
}: any) => {
  return (
    <Fragment>
      {authenticated === true ? (
        <Component {...rest} />
      ) : (
        <Navigate to="/login" />
      )}
    </Fragment>
  );
};
