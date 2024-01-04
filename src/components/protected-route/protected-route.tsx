import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, useNavigate } from "react-router-dom";
import React, { FC } from "react";
import { useLocation } from "react-router-dom";
import { useAppSelector } from "../../hooks/store";
import { RootState } from "../../services/reducers";
interface ProtectedRoute {
  children: React.ReactElement;
  anonymous?: boolean;
}
export const ProtectedRoute: FC<ProtectedRoute> = ({
  children,
  anonymous = false,
}) => {
  const user = useAppSelector((store) => store.user);

  const location = useLocation();
  const from = location.state?.from || "/";

  if (!user.post_response_success && !user.post_response_failed) {
    return <p>Загрузка</p>;
  }
  if (anonymous && user.isAuthenticated) {
    return <Navigate to={from} />;
  }
  if (!anonymous && !user.isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return children;
};
