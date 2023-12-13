import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, useNavigate } from "react-router-dom";
import { getCookie } from "../../utils/cookies";
import { getUser, refreshToken } from "../../services/actions/user";
import React from "react";
export const ProtectedRouteElement = ({ element }) => {
  const dispatch = useDispatch();
  const updateToken = React.useCallback(async () => {
    await dispatch(refreshToken());
    dispatch(getUser())
  }, [dispatch]);
  React.useEffect(() => {
    updateToken();
  }, []);
  const user = useSelector((store) => store.user);
  if (user.post_response_success || user.post_response_failed) {
    console.log(user)
    if (user.isAuthenticated) {
      return element;
    } else {
      return <Navigate to="/login" />;
    }
  } else {
    return <p>Загрузка</p>;
  }
};
