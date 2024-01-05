import React from "react";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ListIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./app-header.module.css";
import { NavLink } from "react-router-dom";

function AppHeader() {
  return (
    <header className={styles.header}>
      <section className={styles.header__item + " mt-4 mb-4"}>
        <div className={styles.header__button + " ml-5 mr-5"}>
          <NavLink to="/">
            {({ isActive }) =>
              isActive ? (
                <div className={styles.header__button + " ml-5 mr-5"}>
                  <BurgerIcon type="primary" />
                  <p
                    className={
                      "text text_type_main-default " +
                      styles.primary_text +
                      " " +
                      styles.link
                    }
                  >
                    Конструктор
                  </p>
                </div>
              ) : (
                <div className={styles.header__button + " ml-5 mr-5"}>
                  <BurgerIcon type="secondary" />
                  <p
                    className={
                      "text text_type_main-default " +
                      styles.secondary_text +
                      " " +
                      styles.link
                    }
                  >
                    Конструктор
                  </p>
                </div>
              )
            }
          </NavLink>
        </div>
      </section>
      <section className={styles.header__item + " mt-4 mb-4"}>
        <div className={styles.header__button + " ml-5 mr-5"}>
          <ListIcon type="secondary" />
          <a
            className={
              "text text_type_main-default " +
              styles.secondary_text +
              " " +
              styles.link
            }
          >
            Лента заказов
          </a>
        </div>
      </section>
      <section className={styles.header__item + " mt-4 mb-4"}>
        <section className={styles.header__logo}>
          <Logo />
        </section>
      </section>
      <section className={styles.header__item + " mt-4 mb-4"}>
        <NavLink to="/profile">
          {({ isActive }) => (
            <div className={styles.header__button + " ml-5 mr-5"}>
              <ProfileIcon type={isActive ? "primary" : "secondary"} />
              <p
                className={
                  isActive
                    ? "text text_type_main-default " +
                      styles.primary_text +
                      " " +
                      styles.link
                    : "text text_type_main-default " +
                      styles.secondary_text +
                      " " +
                      styles.link
                }
              >
                Личный кабинет
              </p>
            </div>
          )}
        </NavLink>
      </section>
    </header>
  );
}

export default AppHeader;
