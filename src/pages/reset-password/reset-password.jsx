import React, { useState, useEffect } from "react";
import styles from "./reset-password.module.css";
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
import { validateEmail } from "../../utils/validate";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../../services/actions/user";
export function ResetPasswordPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const [password, setPassword] = React.useState("");
  const [emailCode, setEmailCode] = React.useState("");
  React.useEffect(() => {
    if (!user.forgot_password) {
      navigate("/forgot-password", { replace: true });
    }
  }, [user.forgot_password]);
  React.useEffect(() => {
    if (user.reset_password) {
      navigate("/", { replace: false });
    }
  }, [user.reset_password]);
  return (
    <div className={styles.app}>
      <main className={styles.body}>
        <div className={styles.body__content}>
          <form
            className={styles.form}
            onSubmit={() =>
              dispatch(
                resetPassword({
                  password: password,
                  token: emailCode,
                })
              )
            }
          >
            <h2 className={styles.title}>Восстановление пароля</h2>
            <PasswordInput
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
              name={"password"}
              placeholder="Введите новый пароль"
              extraClass="mt-6"
            />
            <Input
              type={"text"}
              placeholder="Введите код из письма"
              onChange={(e) => {
                setEmailCode(e.target.value);
              }}
              value={emailCode}
              name={"email_code"}
              size={"default"}
              extraClass="mt-6"
            />
            <Button
              htmlType="submit"
              type="primary"
              size="medium"
              extraClass="mt-6"
            >
              Сохранить
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
