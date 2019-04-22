import React from "react";
import UserList from "../components/userList/UserList";
import Placeholder from "../components/common/Placeholder";
import PageNotFound from "../components/common/PageNotFound";
import Unauthorized from "../components/common/Unauthorized";
import { ROLES } from "../constants/roles";

export const routes = [
  {
    path: "/",
    name: "Users",
    icon: <i className="material-icons">people</i>,
    renderOnScreen: true,
    exactMatch: true,
    component: UserList,
    activeClassName: "active",
    loginRequired: true,
    accessibleTo: "*"
  },
  {
    path: "/users",
    name: "Users",
    icon: <i className="material-icons">people</i>,
    renderOnScreen: false,
    exactMatch: true,
    component: UserList,
    activeClassName: "active",
    loginRequired: true,
    accessibleTo: "*"
  },
  {
    path: "/placeholder",
    name: "Placeholder",
    icon: <i className="material-icons">extension</i>,
    renderOnScreen: true,
    exactMatch: false,
    component: Placeholder,
    activeClassName: "active",
    loginRequired: true,
    accessibleTo: [ROLES.ADMIN, ROLES.OWNER]
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
