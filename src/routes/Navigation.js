import React from "react";
import { Routes, Route, useLocation  } from "react-router-dom";
import { map } from "lodash";
import routes from "./routes";

export function Navigation() {
  const location = useLocation()
  
  return (
    <Routes location={location} key={location.pathname}>
      {map(routes, (route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          element={
            <route.layout>
              <route.component />
            </route.layout>
          }
        />
      ))}
    </Routes>
  );
}
