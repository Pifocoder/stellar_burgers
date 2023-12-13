import React, { useState, useEffect } from "react";
import styles from "./profile.module.css";
import AppHeader from "../../components/app-header/app-header";

import {
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../services/actions/user";

export function ProfilePage() {
  const [password, setPassword] = useState("");
  const user = useSelector((store) => store.user)
  return (
    <div className={styles.app}>
      <AppHeader />
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
              onChange={() => {}}
              icon={"EditIcon"}
              value={user.user.name}
              name={"name"}
              error={false}
              onIconClick={() => {}}
              errorText={"Ошибка"}
              size={"default"}
            />
            <Input
              type={"text"}
              placeholder={"Логин"}
              onChange={() => {}}
              icon={"EditIcon"}
              value={user.user.email}
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
              onChange={(e) => setPassword(e.target.va)}
            />
          </section>
        </div>
      </main>
    </div>
  );
}
