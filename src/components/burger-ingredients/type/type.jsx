import React from 'react';
import styles from './type.module.css';
import Card from './card/card'

function Type({title, ingredients}) {
    return (
        <section>
            <h3 className='text text_type_main-medium'>{title}</h3>
            <section className={"mt-6 ml-4 " +  styles.ingredients_conteiner}>
                {ingredients.map((ingredient) => (
                   <Card ingredient={ingredient} key={ingredient._id}/> 
                ))}
            </section>
        </section>
    );
}

export default Type;
