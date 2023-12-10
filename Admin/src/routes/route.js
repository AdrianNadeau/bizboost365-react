import React from "react";
import { Navigate } from "react-router-dom";

const Authmiddleware = (props) => {

  if (!localStorage.getItem("authUser")) {
    //user is not logged in or have session
    return (
      <Navigate to={{ pathname: "/pages-login-2", state: { from: props.location } }} />
    );
  }
  return (<React.Fragment>
    {props.children}
  </React.Fragment>);
};

export default Authmiddleware;
