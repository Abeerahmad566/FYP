import React from "react";
import userService from "../services/UserService";
import { withRouter } from "react-router-dom";
const Auth = (props) => {
  React.useEffect(() => {
    if (!userService.isLoggedIn()) {
      props.history.push("/");
    }
  }, []);
  return <>{props.children}</>;
};

export default withRouter(Auth);