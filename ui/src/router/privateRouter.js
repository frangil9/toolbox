import React from "react";
import { Redirect, Route } from "react-router-dom";

export const PrivateRouter = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      true ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location },
          }}
        />
      )
    }
  />
);
