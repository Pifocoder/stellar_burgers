import React from "react";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ListIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./app-header.module.css";

function AppHeader() {
  return (
    <header className={styles.header}>
      <section className={styles.header__item + " mt-4 mb-4"}>
        <div className={styles.header__button + " ml-5 mr-5"}>
          <BurgerIcon type="primary" />
          <a className={"text text_type_main-default " + styles.primary_text + styles.link}>
            Конструктор
          </a>
        </div>
      </section>
      <section className={styles.header__item + " mt-4 mb-4"}>
        <div className={styles.header__button + " ml-5 mr-5"}>
          <ListIcon type="secondary" />
          <a className={"text text_type_main-default " + styles.secondary_text + styles.link}>
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
        <div className={styles.header__button + " ml-5 mr-5"}>
          <ProfileIcon type="secondary" />
          <a className={"text text_type_main-default " + styles.secondary_text + styles.link}>
            Личный кабинет
          </a>
        </div>
      </section>
    </header>
  );
}

export default AppHeader;
