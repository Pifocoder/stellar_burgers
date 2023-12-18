import React, { useState, useEffect } from "react";
import styles from "./login.module.css";
import AppHeader from "../../components/app-header/app-header";
import BurgerIngredients from "../../components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "../../components/burger-constructor/burger-constructor";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import {
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";

import { validateEmail } from "../../utils/validate";
import { useDispatch } from "react-redux";
import { getUser, login } from "../../services/actions/user";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export function LoginPage() {
  const dispatch = useDispatch();

  const [email, setEmail] = React.useState("");
  const [emailError, setEmailError] = React.useState({
    isError: false,
    error: "",
  });
  const [password, setPassword] = React.useState("");
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  React.useEffect(() => {
    if (user.isAuthenticated) {
      navigate("/", { replace: true });
    }
  }, []);
  React.useEffect(() => {
    if (user.isAuthenticated) {
      navigate("/", { replace: true });
      dispatch(getUser())
    }
  }, [user.isAuthenticated]);
  return (
    <div className={styles.app}>
      <main className={styles.body}>
        <div className={styles.body__content}>
          <form
            className={styles.form}
            onSubmit={() =>
              dispatch(
                login({
                  email: email,
                  password: password,
                })
              )
            }
          >
            <h2 className={styles.title}>Вход</h2>
            <Input
              type={"text"}
              placeholder="E-mail"
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
            <PasswordInput
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
              name={"password"}
              placeholder="Пароль"
              extraClass="mt-6"
            />
            <Button
              htmlType="submit"
              type="primary"
              size="medium"
              extraClass="mt-6"
            >
              Вход
            </Button>
          </form>
          <p className="text text_type_main-default mt-20">
            Вы - новый пользователь?{" "}
            <Link to="/register" className={styles.link}>
              Зарегистрироваться
            </Link>
          </p>
          <p className="text text_type_main-default mt-4">
            Забыли пароль?{" "}
            <Link to="/forgot-password" className={styles.link}>
              Восстановить пароль
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
