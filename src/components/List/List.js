import React from "react";
import ListItem from "./ListItem";
import styles from "./List.module.scss";



const List = ({ items }) => {

console.log(items)
console.log(items.lenghth)



    return (

        <>
            {items !== null ? (
                <ul className={styles.listWrapper}>
                    {items.map(item => (
                        <ListItem key={item.title} props={items} />
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
