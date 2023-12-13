import React, { useState, useEffect } from "react";
import styles from "./register.module.css";
import AppHeader from "../../components/app-header/app-header";
import BurgerIngredients from "../../components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "../../components/burger-constructor/burger-constructor";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Link, useNavigate } from "react-router-dom";

import {
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { validateEmail } from "../../utils/validate";
import { register } from "../../services/actions/user";
import { useDispatch, useSelector } from "react-redux";
export function RegisterPage() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [emailError, setEmailError] = React.useState({
    isError: false,
    error: "",
  });
  const [password, setPassword] = React.useState("");
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user)
  const navigate = useNavigate();
  React.useEffect(() => {
    if (user.post_response_success) {
      navigate("/", { replace: true });
    }
  }, [user.post_response_success]);
  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={styles.body}>
        <div className={styles.body__content}>
          <h2 className={styles.title}>Регистрация</h2>
          <Input
            type={"text"}
            placeholder="Имя"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
            name={"name"}
            size={"default"}
            extraClass="mt-6"
          />
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
            htmlType="button"
            type="primary"
            size="medium"
            extraClass="mt-6"
            onClick={() => {
              dispatch(
                register({
                  email: email,
                  password: password,
                  name: name,
                })
              );
            }}
          >
            Зарегистрироваться
          </Button>
          <p className="text text_type_main-default mt-20">
            Уже зарегистрированы?{" "}
            <Link to="/login" className={styles.link}>
              Войти
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
