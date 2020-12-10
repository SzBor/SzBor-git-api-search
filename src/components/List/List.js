import React from "react";
import ListItem from "./ListItem";
import styles from "./List.module.scss";



const List = ({ items }) => {
 
    return (
        <>
            {items.length ? (
                <div className={styles.listWrapper}>
                    <h1 className={styles.listWrapper__header}>Ostatnio aktualizowane repozytoria:</h1>
                    <ul className={styles.listWrapper__list}>
                        {items.map(item => (
                            <ListItem key={item.id} {...item} />
                        )
                        )}
                    </ul>
                </div>
            ) : (
                    <h1 className={styles.listWrapper__noItems}>Brak repozytoriów tego uzytkownika</h1>
                )}
        </>
    )
};


export default List;
