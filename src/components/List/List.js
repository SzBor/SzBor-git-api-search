import React from "react";
import ListItem from "./ListItem";
import styles from "./List.module.scss";



const List = ({ items }) => {

console.log(items)

    return (

        <>
            {items !== null ? (
                <ul className={styles.listWrapper}>
                    {items.map(item => (
                        <ListItem key={item.id} {...item} />
                    )
                    )}
                </ul>
            ) : (
                    <h1 className={styles.noItems}>Brak repozytoriów tego uzytkownika</h1>
                )}
        </>
    )
};


export default List;
