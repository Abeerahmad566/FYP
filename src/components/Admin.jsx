import React from "react";
import userService from "../services/UserService";
import { withRouter } from "react-router-dom";
const Admin = (props) => {
  React.useEffect(() => {
    if (!userService.isAdmin()) {
      props.history.push("/home");
    }
  }, []);
  return <>{props.children}</>;
};

export default withRouter(Admin);