import React from "react";
import { Route } from "react-router-dom";
import { getAllPageInfor } from "../asset/pages";

import Home from "../views/Home";
import Login from "../views/Login";
import Demo from "../views/Demo";
import NotFound from "../views/404";

const demoRoutes = getAllPageInfor().map((page) => (
  <Route
    exact
    key={page.pageSlug}
    path={page.pageSlug}
    component={() => <Demo title={page.pageTitle} />}
  />
));

export default [
  <Route exact key="home" path="/" component={Home} />,
  <Route exact key="login" path="/login" component={Login} />,
  demoRoutes,
  <Route key="404" path="*" component={NotFound} />,
];
