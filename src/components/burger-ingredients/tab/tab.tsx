import React from 'react';
import { useState } from 'react';
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './tab.module.css'
import PropTypes from "prop-types";

function BurgerIngredientsTab({activeTab}) {
  return (
    <div className={styles.tab_container}>
      <Tab value="one" active={activeTab === 0} >
        Булки
      </Tab>
      <Tab value="two" active={activeTab === 1} >
        Соусы
      </Tab>
      <Tab value="three" active={activeTab === 2} >
        Начинки
      </Tab>
    </div>
  )
}
BurgerIngredientsTab.propTypes = {
  activeTab : PropTypes.number.isRequired,
}
export default BurgerIngredientsTab