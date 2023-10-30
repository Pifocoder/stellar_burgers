import React, { useState, useEffect } from 'react';
import styles from './app.module.css';
import AppHeader from '../app-header/app-header'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from '../burger-constructor/burger-constructor'
const apiUrl = "https://norma.nomoreparties.space/api/ingredients";

function App() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [ingredients, setIngredients] = React.useState([{}])
    React.useEffect(() => {
        fetch(apiUrl)
        .then((resp) => {
            if (resp.ok) {
                return resp.json();
            }
            return Promise.reject(`Ошибка ${resp.status}`);
        })
        .then((data) => {
           setIngredients(data.data)
           setIsLoaded(true)
        })
        .catch(function(error) {
            setError(error)
        })
    }, [])

    if (error != null) {
        return (<p>Ошибка: {error}</p>);
    } else if (!isLoaded) {
        return (<p>Загрузка</p>)
    } else {
        return (
            <div className={styles.app}>
                <AppHeader/>
                <main className={styles.body}>
                    <BurgerIngredients ingredients={ingredients}/>
                    <BurgerConstructor ingredients={ingredients}/>
                </main>
            </div>
        );
    }
}

export default App;
