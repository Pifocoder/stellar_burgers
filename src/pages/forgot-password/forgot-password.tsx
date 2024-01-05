import React, { useState, useEffect } from "react";
import styles from "./forgot-password.module.css";
import AppHeader from "../../components/app-header/app-header";
import BurgerIngredients from "../../components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "../../components/burger-constructor/burger-constructor";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { API_URL_FORGOT_PASSWORD } from "../../constants";
import checkResponse from "../../utils/response";
import {
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { validateEmail } from "../../utils/validate";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { forgotPassword } from "../../services/actions/user";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/store";
import { RootState } from "../../services/reducers";

export function ForgotPasswordPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useAppSelector((store : RootState) => store.user);

  const [email, setEmail] = React.useState("");
  const [emailError, setEmailError] = React.useState({
    isError: false,
    error: "",
  });
  React.useEffect(() => {
    if (user.forgot_password) {
      navigate("/reset-password", { replace: true });
    }
  }, [user.forgot_password]);

  return (
    <div className={styles.app}>
      <main className={styles.body}>
        <div className={styles.body__content}>
          <form
            className={styles.form}
            onSubmit={() =>
              dispatch(
                forgotPassword({
                  email: email,
                })
              )
            }
          >
            <h2 className={styles.title}>Восстановление пароля</h2>
            <Input
              type={"text"}
              placeholder="Укажите e-mail"
              onChange={(e) => {
                if (!validateEmail(e.target.value)) {
                  setEmailError({
                    isError: true,
                    error: "Неправильно введен e-mail",
                  });
                } else {
                  setEmailError({
                    isError: false,
                    error: "",
                  });
                }
                setEmail(e.target.value);
              }}
              value={email}
              name={"name"}
              error={emailError.isError}
              errorText={emailError.error}
              size={"default"}
              extraClass="mt-6"
            />
            <Button
              htmlType="submit"
              type="primary"
              size="medium"
              extraClass="mt-6"
            >
              Восстановить
            </Button>
          </form>

          <p className="text text_type_main-default mt-20">
            Вспомнили пароль?{" "}
            <Link to="/login" className={styles.link}>
              Войти
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
