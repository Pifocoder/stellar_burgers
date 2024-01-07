import React, { useState, useEffect } from "react";
import styles from "./profile-feed.module.css";
import { useAppDispatch, useAppSelector } from "../../hooks/store";

import {
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../services/actions/user";
import { updateUser } from "../../services/actions/user";
import FeedOrder from "../../components/feed-order/feed-order";
export function ProfileFeedPage() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((store) => store.user.user);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState("");
  const [changed, setChanged] = useState(false);

  let ingredients = useAppSelector((store) => store.ingredientsList);
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
              В этом разделе вы можете посмотреть свою историю заказов
            </p>
          </section>
          <section className={styles.feed__orders}>
            <FeedOrder
              id={"#123"}
              date={new Date()}
              title={"qwe"}
              price={123}
              ingredients={ingredients.ingredients}
              status="done"
            />
            <FeedOrder
              id={"#123"}
              date={new Date()}
              title={"qwe"}
              price={123}
              status="created"
              ingredients={ingredients.ingredients}
            />
            <FeedOrder
              id={"#123"}
              date={new Date()}
              title={"qwe"}
              price={123}
              status="created"
              ingredients={ingredients.ingredients}
            />
            <FeedOrder
              id={"#123"}
              date={new Date()}
              title={"qwe"}
              price={123}
              status="created"
              ingredients={ingredients.ingredients}
            />
            <FeedOrder
              id={"#123"}
              date={new Date()}
              title={"qwe"}
              price={123}
              status="created"
              ingredients={ingredients.ingredients}
            />
          </section>
        </div>
      </main>
    </div>
  );
}
