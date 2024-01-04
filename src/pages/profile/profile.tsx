import React, { useState, useEffect } from "react";
import styles from "./profile.module.css";
import AppHeader from "../../components/app-header/app-header";
import { useAppDispatch, useAppSelector } from "../../hooks/useAppSelector";
import { RootState } from "../../services/reducers";

import {
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../services/actions/user";
import { updateUser } from "../../services/actions/user";
export function ProfilePage() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((store: RootState) => store.user.user);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState("");
  const [changed, setChanged] = useState(false);
  return (
    <div className={styles.app}>
      <main className={styles.body}>
        <div className={styles.body__content}>
          <section className={styles.profile__info}>
            <section className={styles.profile__navigation}>
              <NavLink
                to="/profile"
                className={({ isActive, isPending }) =>
                  isActive
                    ? "text text_type_main-medium " + styles.link
                    : "text text_type_main-medium " +
                      styles.link +
                      " " +
                      styles.link_inactive
                }
              >
                Профиль
              </NavLink>

              <NavLink
                to="/profile/orders"
                className={({ isActive, isPending }) =>
                  isActive
                    ? "text text_type_main-medium " + styles.link
                    : "text text_type_main-medium " +
                      styles.link +
                      " " +
                      styles.link_inactive
                }
              >
                История заказов
              </NavLink>

              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isActive
                    ? "text text_type_main-medium " + styles.link
                    : "text text_type_main-medium " +
                      styles.link +
                      " " +
                      styles.link_inactive
                }
              >
                Выход
              </NavLink>
            </section>
            <p
              className={
                "text text_type_main-default mt-20 " +
                styles.profile__info__placeholder
              }
            >
              В этом разделе вы можете изменить свои персональные данные
            </p>
          </section>
          <section className={styles.profile__inputs}>
            <Input
              type={"text"}
              placeholder={"Имя"}
              onChange={(e) => {
                setChanged(true);
                setName(e.target.value);
              }}
              icon={"EditIcon"}
              value={name}
              name={"name"}
              error={false}
              onIconClick={() => {}}
              errorText={"Ошибка"}
              size={"default"}
            />
            <Input
              type={"text"}
              placeholder={"Логин"}
              onChange={(e) => {
                setChanged(true);
                setEmail(e.target.value);
              }}
              icon={"EditIcon"}
              value={email}
              name={"name"}
              error={false}
              onIconClick={() => {}}
              errorText={"Ошибка"}
              size={"default"}
            />
            <PasswordInput
              value={password}
              name={"password"}
              icon={"EditIcon"}
              placeholder={"Пароль"}
              onChange={(e) => {
                setChanged(true);
                setPassword(e.target.value);
              }}
            />

            {changed && (
              <section className={styles.profile__inputs__submit}>
                <Button
                  htmlType="button"
                  type="secondary"
                  size="medium"
                  onClick={() => {
                    setChanged(false);
                    setEmail(user.email);
                    setName(user.name);
                    setPassword("");
                  }}
                >
                  Отменить
                </Button>
                <Button
                  htmlType="button"
                  type="primary"
                  size="medium"
                  onClick={() => {
                    dispatch(
                      updateUser({
                        email: email,
                        name: name,
                        password: password,
                      })
                    );
                    setChanged(false);
                  }}
                >
                  Сохранить
                </Button>
              </section>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}
