import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { getAccessToken } from "utils/tokenProvider";

function RequireAuth({ children }) {
  const loaction = useLocation();
  const auth = getAccessToken();

  //인증정보가 없을 때
  if (!auth) {
    if (loaction.pathname === "/register" || loaction.pathname === "/") {
      return children;
    }
    return <Navigate to="/" replace={true} />;
  }
  //인증 정보가 있을 때
  if (loaction.pathname === "/register" || loaction.pathname === "/") {
    return <Navigate to="/todo" replace={true} />;
  }
  return children;
}

export default RequireAuth;
