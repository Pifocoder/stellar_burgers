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
import { getUser } from "../../services/actions/user";
import IngredientPage from "../../pages/ingredient/ingredient";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import { getApiIngredients } from "../../services/actions/ingredientsList";
import AppHeader from "../app-header/app-header";
import { useAppDispatch, useAppSelector } from "../../hooks/store";
import { AppDispatch } from "../..";
import { RootState } from "../../services/reducers";
import FeedPage from "../../pages/feed/feed";
import { ProfileFeedPage } from "../../pages/profile-feed/profile-feed";

function App() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((store: RootState) => store.user);
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
          path="/profile/orders"
          element={<ProtectedRoute children={<ProfileFeedPage />} />}
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
        <Route path="/feed" element={<FeedPage />} />
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
