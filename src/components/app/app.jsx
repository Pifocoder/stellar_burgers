import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { MainPage } from "../../pages/main/main";
import { LoginPage } from "../../pages/login/login";
import { RegisterPage } from "../../pages/register/register";
import { ForgotPasswordPage } from "../../pages/forgot-password/forgot-password";
import { ResetPasswordPage } from "../../pages/reset-password/reset-password";
import { ProfilePage } from "../../pages/profile/profile";
import { ProtectedRoute } from "../protected-route/protected-route";
import { useDispatch, useSelector } from "react-redux";
import { refreshToken } from "../../services/actions/user";
import { getUser } from "../../services/actions/user";
import { useCallback } from "react";
import { Outlet } from "react-router-dom";
import IngredientPage from "../../pages/ingredient/ingredient";
import Modal from "../modal/modal";
import { closeIngredientDetails } from "../../services/actions/ingredientDetails";
import IngredientDetails from "../ingredient-details/ingredient-details";
import { getCookie } from "../../utils/cookies";
import { getApiIngredients } from "../../services/actions/ingredientsList";
import AppHeader from "../app-header/app-header";
function App() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  React.useEffect(() => {
    dispatch(getApiIngredients());
    dispatch(getUser());
  }, []);

  const location = useLocation();
  const state = location.state;
  return (
    <>
      <AppHeader />
      <Routes location={state?.background || location}>
        <Route
          path="/profile"
          element={<ProtectedRoute children={<ProfilePage />} />}
        />
        <Route
          path="/login"
          element={<ProtectedRoute children={<LoginPage />} anonymous={true} />}
        />
        <Route
          path="/register"
          element={
            <ProtectedRoute children={<RegisterPage />} anonymous={true} />
          }
        />
        <Route
          path="/forgot-password"
          element={
            <ProtectedRoute
              children={<ForgotPasswordPage />}
              anonymous={true}
            />
          }
        />
        <Route
          path="/reset-password"
          element={
            <ProtectedRoute children={<ResetPasswordPage />} anonymous={true} />
          }
        />
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/ingredients/:ingredientId" element={<IngredientPage />} />
        <Route path="*" element={<></>} />
      </Routes>
      {state?.background && (
        <Routes>
          <Route
            path="/ingredients/:ingredientId"
            element={
              <Modal title="Детали ингредиента">
                <IngredientDetails />
              </Modal>
            }
          />
        </Routes>
      )}
    </>
  );
}

export default App;
