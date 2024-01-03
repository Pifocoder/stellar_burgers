import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, useNavigate } from "react-router-dom";
import { getCookie } from "../../utils/cookies";
import { getUser, refreshToken } from "../../services/actions/user";
import React from "react";
import { useLocation } from 'react-router-dom';

export function ProtectedRoute({ children, anonymous = false }) {
  const user = useSelector((store) => store.user)
 
  const location = useLocation();
  const from = location.state?.from || '/';

  if (!user.post_response_success && !(user.post_response_failed)) {
    return <p>Загрузка</p>
  }
  if (anonymous && user.isAuthenticated ) {
    return <Navigate to={ from } />;
  }
  if (!anonymous && !user.isAuthenticated ) {
    return <Navigate to="/login" state={{ from: location}}/>;
  }
  return children;
}
