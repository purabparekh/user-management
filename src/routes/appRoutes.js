import React from "react";
import Login from "../components/login/Login";
import Layout from "../layout/Layout";
import PageNotFound from "../components/common/PageNotFound";
import Unauthorized from "../components/common/Unauthorized";

export const appRoutes = [
  {
    path: "/login",
    name: "Login",
    icon: <i className="material-icons">people</i>,
    renderOnScreen: false,
    exactMatch: true,
    component: Login,
    activeClassName: "active",
    loginRequired: false,
    accessibleTo: "*"
  },
  {
    path: "/",
    name: "Layout",
    icon: <i className="material-icons">extension</i>,
    renderOnScreen: false,
    exactMatch: false,
    component: Layout,
    activeClassName: "active",
    loginRequired: true,
    accessibleTo: "*"
  },
  {
    path: "/unauthorized",
    name: "Unauthorized",
    icon: <i className="material-icons">people</i>,
    renderOnScreen: false,
    exactMatch: true,
    component: Unauthorized,
    activeClassName: "active",
    loginRequired: false,
    accessibleTo: "*"
  }
];

export const pageNotFound = {
  component: PageNotFound
};
